<template lang="pug">
    div
        div(class="title") Admin Registration
        register-form(url="/admin/register")
</template>

<script>
import RegisterForm from "../user/register_form";

export default {
  name: "admin_register",
  data: function() {
    return {};
  },
  components: { RegisterForm }
};
</script>