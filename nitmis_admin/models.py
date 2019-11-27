from django.db import models

# Create your models here.

'''
User model for registering all the users of this app.
Judges, administrators, participants, guests are all saved
into this single table. Email and password are mandatory
fields
'''


class User(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)


'''
Each registered user is assigned a role at the time
of registration. Application access will be restricted based
on the user roles.
'''


class UserRoles(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=60)


'''
Tokens are responsible for handling the user sessions.
This enables us to have a REST API architecture. A logged in user
will be alloted a token which expires in few hours (default=6). All requests
should send this token, or else the user is assumed to be unauthenticated.
'''


class Tokens(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=60)


'''
Stages stores all the location names. Having a separate
stage model ensures easy event stage assignment and access
to all the events scheduled at the location.
'''


class Stages(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)


'''
Events model has a status, name, details, start time and stage
id assigned to it. On deletion of a stage, the event will stay, but the
stage will be set to NULL.
'''


class Events(models.Model):
    id = models.AutoField(primary_key=True)
    status = models.CharField(max_length=60)
    name = models.CharField(max_length=255)
    details = models.TextField()
    stage = models.ForeignKey(Stages, on_delete=models.SET_NULL, null=True)
    schedule = models.TimeField()


'''
An event participant can be either a single user or a team. 
Team model holds all the event teams. The team will be deleted
if an event gets deleted.
'''


class Team(models.Model):
    id = models.AutoField(primary_key=True)
    event = models.ForeignKey(Events, on_delete=models.CASCADE)


'''
This model holds reference to team members. Team member will be
deleted if the user or the team gets deleted.
'''


class TeamMembers(models.Model):
    id = models.AutoField(primary_key=True)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


'''
EventParticipant holds all the event participant details. is_team
is set to true, if the participant is a team and the corresponding
team_id is stored. Set is_team to false, if the participant is not
a user. 
'''


class EventParticipant(models.Model):
    id = models.AutoField(primary_key=True)
    event = models.ForeignKey(Events, on_delete=models.CASCADE)
    is_team = models.BooleanField(default=False)
    chest_number = models.IntegerField(null=True)
    points = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)


'''
Winners table stores the event winner. A separate table is 
used so that any number of prize can be awarded to an event. Event and
event_participant is given a unique constraint so that only one rank
can be assigned to a participant for an event.
'''


class Winners(models.Model):
    id = models.AutoField(primary_key=True)
    event = models.ForeignKey(Events, on_delete=models.CASCADE)
    event_participant = models.ForeignKey(EventParticipant, models.CASCADE)
    rank = models.IntegerField()

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['event', 'event_participant'], name='event_participant_unique')
        ]


'''
An event can have any number of judges and any registered user
can be assigned as a judge. Judges table holds the reference to 
the user and event.
'''


class Judges(models.Model):
    id = models.AutoField(primary_key=True)
    event = models.ForeignKey(Events, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['event', 'user'], name='event_user_unique')
        ]
