<template>
  <div>
    Next
    <div>{{text}}</div>
    <ComputedSetter :text="'안녕'"></ComputedSetter>
  </div>
</template>

<script>
import ComputedSetter from "@/components/ComputedSetter";

export default {
  components: { ComputedSetter },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
