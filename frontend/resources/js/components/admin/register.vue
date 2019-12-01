<template lang="pug">
    register-layout(title="Admin Registration" url="/admin/register/")
</template>

<script>
import RegisterLayout from "../user/register";

export default {
  name: "user_register",
  components: { RegisterLayout }
};
</script>