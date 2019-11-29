<template lang="pug">
    form(@submit.prevent="onSubmit")
        div(class="form-group")
            input(v-model="form_data.name" class="form-control")
        button(class="btn theme-btn" :disabled="dp.submitted")
            span(class="fa fa-spin fa-circle-o-notch mr-2" v-if="dp.submitted")
            span Register
</template>

<script>
import { DataPoster } from "z-vueplates";

export default {
  name: "register_form",
  props: ["url"],
  data: function() {
    return {
      form_data: {
        name: "",
        age: "",
        campus: "",
        place: "",
        course: ""
      },
      dp: new DataPoster()
    };
  },
  methods: {
    onSubmit: function() {
      this.dp.formPost(this.url, this.form_data, this.onSuccess);
    },
    onSuccess: function(data) {
      this.$store.commit("setToken", data);
    }
  }
};
</script>