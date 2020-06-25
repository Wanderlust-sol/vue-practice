<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer" v-bind:user="user"></slot>
    <slot name="other" v-bind:user="user"></slot>
    <div id="demo">
      <button v-on:click="show = !show">Toggle</button>
      <transition name="fade" :duration="{enter: 5000, leave: 800}">
        <p v-if="show">hello</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "taesol",
        lastName: "kwon"
      },
      show: true
    };
  },
  create() {
    console.log(this.user);
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>