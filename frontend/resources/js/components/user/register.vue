<template lang="pug">
    div
        div(class="title") User Registration
        register-form(url="/user/register")
</template>

<script>
import RegisterForm from "./register_form";

export default {
  name: "user_register",
  data: function() {
    return {};
  },
  components: { RegisterForm }
};
</script>