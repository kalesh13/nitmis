<template lang="pug">
    div(class="event-summary" :class="{clickable:!selected, selected:selected}" @click.prevent="$emit('clicked')")
        icon(:title="event.name")
        div(class="details col-md-8")
            div(class="name" v-text="strippedName")
            div(class="location")
                span(class="fa fa-map-marker mr-2")
                | {{event.stage}}
        div(class="time" v-text="event.schedule")
</template>

<script>
import icon from "../user/icon";

export default {
  name: "event_summary",
  props: {
    event: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {};
  },
  computed: {
    strippedName: function() {
      let name = this.event.name;
      return name ? name.substring(0, 50) : "Event";
    }
  },
  components: { icon }
};
</script>