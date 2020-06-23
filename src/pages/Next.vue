<template>
  <div>
    Next
    <button @click="globalButton">click</button>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";
export default {
  data() {
    return {
      clickedCount: 0,
    };
  },
  methods: {
    globalButton() {
      this.clickedCount++;

      EventBus.$emit("use-eventbut", this.clickedCount);
    },
  },
};
</script>

<style lang="scss" scoped></style>
