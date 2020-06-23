<template>
  <div>
    <button @click="sendEvent()">Print</button>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus";
export default {
  name: "ChildComponent",
  props: {
    parentMessage: {
      type: String,
      default: void 0
    }
  },
  data() {
    return {
      clickedCount: 0
    };
  },
  methods: {
    sendEvent() {
      this.clickedCount++;
      EventBus.$emit("use-eventbus", this.clickedCount);
    }
  }
};
</script>

<style scoped></style>
