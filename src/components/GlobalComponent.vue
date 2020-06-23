<template>
  <div>
    <button @click="showTitle">click</button>
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: "GlobalComponent",
  data: function() {
    return {
      title: void 0
    };
  },
  methods: {
    showTitle() {
      this.title = "Global Component!!";
      console.log("why");
    }
  }
};
</script>

<style scoped>
div {
  padding: 20px;
}

div span {
  margin: 20px;
}
</style>