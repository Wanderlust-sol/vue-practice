<template>
  <div>
    <div @click="go('/next')">Main</div>

    {{ receivedClickCount }}
    <LocalComponent></LocalComponent>
    <ChildComponent></ChildComponent>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";
import LocalComponent from "@/components/LocalComponent.vue";
import ChildComponent from "@/components/ChildComponent.vue";
export default {
  components: { LocalComponent, ChildComponent },
  data() {
    return {
      receivedClickCount: 0,
    };
  },
  methods: {
    go(targetName) {
      this.$router.push(targetName);
    },
  },
  created() {
    EventBus.$on("use-eventbus", (clickedCount) => {
      this.receivedClickCount = clickedCount;
    });
  },
};
</script>

<style scoped></style>
