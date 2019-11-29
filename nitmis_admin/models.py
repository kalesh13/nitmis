import datetime
from django.db import models

# Create your models here.


class User(models.Model):
    """
    User model for registering all the users of this app.
    Judges, administrators, participants, guests are all saved
    into this single table. Email and password are mandatory
    fields
    """
    id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    def has_role(self, roles):
        """
        Checks if the user has the submitted roles. If the roles
        argument is empty or None, no role check is needed.
        """
        if not roles:
            return True
        return self.roles_set.all()


class Roles(models.Model):
    """
    Each registered user is assigned a role at the time
    of registration. Application access will be restricted based
    on the user roles.
    """
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=60)


class Tokens(models.Model):
    """
    Tokens are responsible for handling the user sessions.
    This enables us to have a REST API architecture. A logged in user
    will be alloted a token which expires in few hours (default=6). All requests
    should send this token, or else the user is assumed to be unauthenticated.
    """
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=60)
    expiry = models.DateTimeField(null=True)

    def expire(self):
        """
        Sets the expiry of the token to now, so that the
        token becomes invalid immediately.
        """
        current_time = datetime.datetime.now()
        self.expiry = current_time
        self.save()

    @staticmethod
    def from_token(token):
        """
        Returns the Token model from the token
        string. The returned token is also checked for
        expiry.
        """
        current_time = datetime.datetime.now()
        return Tokens.objects.fiter(token__exact=token).filter(expiry__lt=current_time)


class Stages(models.Model):
    """
    Stages stores all the location names. Having a separate
    stage model ensures easy event stage assignment and access
    to all the events scheduled at the location.
    """
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)


class Events(models.Model):
    """
    Events model has a status, name, details, start time and stage
    id assigned to it. On deletion of a stage, the event will stay, but the
    stage will be set to NULL.
    """
    id = models.AutoField(primary_key=True)
    status = models.CharField(max_length=60)
    name = models.CharField(max_length=255)
    details = models.TextField()
    stage = models.ForeignKey(Stages, on_delete=models.SET_NULL, null=True)
    schedule = models.TimeField()


class Team(models.Model):
    """
    An event participant can be either a single user or a team. 
    Team model holds all the event teams. The team will be deleted
    if an event gets deleted.
    """
    id = models.AutoField(primary_key=True)
    event = models.ForeignKey(Events, on_delete=models.CASCADE)


class TeamMembers(models.Model):
    """
    This model holds reference to team members. Team member will be
    deleted if the user or the team gets deleted.
    """
    id = models.AutoField(primary_key=True)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class EventParticipant(models.Model):
    """
    EventParticipant holds all the event participant details. is_team
    is set to true, if the participant is a team and the corresponding
    team_id is stored. Set is_team to false, if the participant is not
    a user.
    """
    id = models.AutoField(primary_key=True)
    event = models.ForeignKey(Events, on_delete=models.CASCADE)
    is_team = models.BooleanField(default=False)
    chest_number = models.IntegerField(null=True)
    points = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)


class Winners(models.Model):
    """
    Winners table stores the event winner. A separate table is 
    used so that any number of prize can be awarded to an event. Event and
    event_participant is given a unique constraint so that only one rank
    can be assigned to a participant for an event.
    """
    id = models.AutoField(primary_key=True)
    event = models.ForeignKey(Events, on_delete=models.CASCADE)
    event_participant = models.ForeignKey(EventParticipant, models.CASCADE)
    rank = models.IntegerField()

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['event', 'event_participant'], name='event_participant_unique')
        ]


class Judges(models.Model):
    """
    An event can have any number of judges and any registered user
    can be assigned as a judge. Judges table holds the reference to 
    the user and event.
    """
    id = models.AutoField(primary_key=True)
    event = models.ForeignKey(Events, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['event', 'user'], name='event_user_unique')
        ]
