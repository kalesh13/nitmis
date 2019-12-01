<template lang="pug">
    div(class="icon" :style="bg" v-text="character")
</template>

<script>
export default {
  name: "icon",
  props: ["title"],
  computed: {
    bg: function() {
      let colors = [
        "#c33174",
        "#b818ec",
        "#186dec",
        "#ec8d18",
        "#41ab2e",
        "#2e88ab"
      ];

      return { background: colors[Math.floor(Math.random() * 6)] };
    },
    character: function() {
      return this.title
        ? this.title.charAt(0)
        : "ABCDEFGHIJKLM".charAt(Math.floor(Math.random() * 13));
    }
  }
};
</script>