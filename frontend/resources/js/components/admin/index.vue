<template lang="pug">
    extends ../layouts/master.pug
    block contents
        div(class="contents central")
            upcoming-events
</template>

<script>
import UpcomingEvents from "../events/upcoming";

export default {
  name: "dashboard",
  data: function() {
    return {};
  },
  components: {UpcomingEvents}
};
</script>