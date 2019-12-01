<template lang="pug">
    extends ../layouts/master.pug
    block contents
        div(class="contents central")
            div(class="card col-md-5 mx-auto px-0 d-block")
                div(class="main-title") User Login
                form(class="register-form px-3 pb-4" @submit.prevent="onSubmit")
                    div(class="form-group")
                        label Email address
                        input(v-model="form_data.email" class="form-control" type="email" placeholder="Registered email address" required)
                    div(class="form-group")
                        label Password
                        input(v-model="form_data.password" class="form-control" type="password" placeholder="Account password" required)
                    button(class="btn theme-btn login-btn" :disabled="dp.submitted")
                        span(class="fa fa-spin fa-circle-o-notch mr-2" v-if="dp.submitted")
                        span Login
                    div(class="form-group terms col-md-10 small mt-4")
                        span Don't have an account? 
                        a(href="/register") Register now
        
</template>

<script>
import { DataPoster } from "z-vueplates";

export default {
  name: "login",
  data: function() {
    return {
      form_data: {
        email: "",
        password: ""
      },
      dp: new DataPoster()
    };
  },
  methods: {
    onSubmit: function() {
      this.dp.formPost(
        "/api/login",
        this.form_data,
        this.onSuccess,
        this.onError
      );
    },
    onSuccess: function(data) {
      this.$store.commit("setToken", data);

      this.$router.push({ name: "dashboard" });
    },
    onError: function(error) {}
  }
};
</script>