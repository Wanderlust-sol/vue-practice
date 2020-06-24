<template>
  <div>
    <div @click="go('/next')">Main</div>
    {{ receivedClickCount }}
    <LocalComponent></LocalComponent>
    <ChildComponent></ChildComponent>
    <LifeCycle></LifeCycle>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";
import LocalComponent from "@/components/LocalComponent.vue";
import ChildComponent from "@/components/ChildComponent.vue";
import LifeCycle from "@/components/LifeCycle.vue";
export default {
  components: { LocalComponent, ChildComponent, LifeCycle },
  data() {
    return {
      receivedClickCount: 0
    };
  },
  methods: {
    go(targetName) {
      this.$router.push(targetName);
    }
  },
  created() {
    EventBus.$on("use-eventbus", clickedCount => {
      this.receivedClickCount = clickedCount;
    });
  }
};
</script>

<style scoped></style>
