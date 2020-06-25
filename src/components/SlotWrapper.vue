<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer" v-bind:user="user"></slot>
    <slot name="other" v-bind:user="user"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "taesol",
        lastName: "kwon"
      }
    };
  },
  create() {
    console.log(this.user);
  }
};
</script>

<style scoped>
</style>