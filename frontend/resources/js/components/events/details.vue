<template lang="pug">
    div(class="card-item")
        div(class="title h1 mb-2 pl-4" v-text="event.name")
        div(class="card-content pl-4 limit-400")
            template(v-if="hasEvent")                
                div(class="desc mb-4" v-html="event.details")
                div(class="schedule mb-4")
                    div(class="title")
                        span(class="fa fa-clock-o mr-2")
                        | Scheduled time
                    div(v-text="event.schedule")
                div(class="loc mb-4")
                    div(class="title")
                        span(class="fa fa-map-marker mr-2")
                        | Location
                    div(v-text="event.stage")
                div(class="cord mb-4")
                    div(class="title")
                        span(class="fa fa-users mr-2")
                        | Co-ordinators
                    ul
            template(v-else)
                span(class="mx-auto py-3") No event details added. Contact administrator.
</template>

<script>
export default {
  name: "event_details",
  props: ["event"],
  computed: {
    hasEvent: function() {
      return (
        this.event &&
        (this.event.name || this.event.schedule || this.event.details)
      );
    }
  },
  data: function() {
    return {};
  }
};
</script>