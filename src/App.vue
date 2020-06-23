<template>
  <div id="app">
    <!-- <span>{{ str }}</span>
    <button
      class="static"
      v-bind:class="{ active: isActive }"
      @click="handleClick"
    >
      press
    </button>
    <input v-model="question" />
    <div>대답: {{ answer }}</div>
    <GlobalComponent></GlobalComponent>
    <LocalComponent></LocalComponent>
    <ChildComponent @update="showAlert"></ChildComponent>
    <div v-if="type === `A`">A</div>
    <div v-else-if="type === `B`">B</div>
    <div v-else>C</div>
    <router-link to="/">main</router-link> |
    <router-link to="/next">next</router-link>
    <span @click="go('/')">main</span> |
    <span @click="go('/next')">next</span> -->
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
//import LocalComponent from "./components/LocalComponent.vue";
//import ChildComponent from "./components/ChildComponent.vue";

export default {
  name: "App",
  //components: { LocalComponent, ChildComponent },
  data: function() {
    return {
      str: "hello?",
      isActive: false,
      question: "",
      answer: "질문을 하기 전까지는 대답 할 수 없습니다.",
      type: "A",
    };
  },
  methods: {
    handleClick: function() {
      console.log(event.target);
      this.isActive = !this.isActive;
    },
    showAlert() {
      alert("event received");
    },
    go(targetName) {
      // 인자값으로 받은 url을 router.push함수에 전달하고 이동됩니다.
      this.$router.push(targetName);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
