<template lang="pug">
    form(class="register-form px-3 pb-4" @submit.prevent="onSubmit")
        div(class="form-group")
            label Full name
            input(v-model="form_data.name" class="form-control" placeholder="eg: Karthik Krishnan" required)
        div(class="form-group")
            label Email address
            input(v-model="form_data.email" class="form-control" type="email" placeholder="eg: karthik@gmail.com" required)
        div(class="form-group")
            label Password
            input(v-model="form_data.password" class="form-control" type="password" placeholder="Write this down somewhere :)" required)
        div(class="form-group")
            label Password confirmation
            input(v-model="form_data.password_confirmation" class="form-control" type="password" placeholder="Type the password again" required)
        div(class="form-group")
            label Course
            input(v-model="form_data.course" class="form-control" placeholder="eg: MBA(Marketing)" required)
        div(class="form-group")
            label College
            input(v-model="form_data.college" class="form-control" placeholder="eg: NIT, Calicut" required)
        div(class="form-group")
            label Contact number
            input(v-model="form_data.phone" class="form-control" placeholder="Your mobile number" required)
        div(class="form-group terms col-md-10")
            span(class="small") By registering, you agree to all the Code of Conduct terms given aside.
        button(class="btn theme-btn login-btn" :disabled="dp.submitted")
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

      this.$router.push({ name: "dashboard" });
    }
  }
};
</script>