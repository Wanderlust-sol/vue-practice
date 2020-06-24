<template>
  <div @click="clickButton">라이프사이클 훅 연습 : {{count}}</div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    clickButton() {
      this.count++;
      console.log("clickedButton");
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style scoped>
</style>