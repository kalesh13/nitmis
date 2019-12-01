<template lang="pug">
    div(class="card col-md-12")
        div(class="card-item")
            div(class="title")
                span(class="fa fa-calendar-o mr-2")
                | Upcoming events
            div(class="card-content limit-400")
                event-summary(v-for="(event,index) in events" @clicked="selectedIndex=index" :event="event" :selected="selectedEvent.id===event.id" :key="event.id")
        event-details(:event="selectedEvent")
</template>

<script>
import EventSummary from "./eventSummary";
import EventDetails from "./details";

export default {
  name: "upcoming_event",
  data: function() {
    return {
      events: [
          {id:1, name:"Business Fest", stage:"Location sample 1", details:"Location sample 1", schedule:"11/09/2020 12:30"},
          {id:2, name:"Demo Fets", stage:"Location sample 2", details:"Location sample 1", schedule:"15/09/2020 14:30"},
          {id:3, name:"Management Fest", stage:"Location sample 3", details:"Location sample 1", schedule:"17/09/2020 11:30"},
          {id:4, name:"Sample Fest", stage:"Location sample 4", details:"Location sample 1", schedule:"16/09/2020 22:30"},
          {id:5, name:"Business Fest", stage:"Location sample 1", details:"Location sample 1", schedule:"11/09/2020 12:30"},
          {id:6, name:"Demo Fets", stage:"Location sample 2", details:"Location sample 1", schedule:"15/09/2020 14:30"},
          {id:7, name:"Management Fest", stage:"Location sample 3", details:"Location sample 1", schedule:"17/09/2020 11:30"},
          {id:8, name:"Sample Fest", stage:"Location sample 4", details:"Location sample 1", schedule:"16/09/2020 22:30"}
      ],
      selectedIndex: 0
    };
  },
  computed: {
    selectedEvent: function() {
      return this.events[this.selectedIndex || 0];
    }
  },
  components: { EventSummary, EventDetails }
};
</script>