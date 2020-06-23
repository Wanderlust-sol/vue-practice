<template>
  <div>
    <input :value="text" type="text" @input="onInput" />
    <button @click="convertToUpperCase">click</button>
  </div>
</template>

<script>
export default {
  props: ["text"],

  methods: {
    onInput(e) {
      this.$emit("set-text", e.target.value);
    },
    convertToUpperCase() {
      this.$emit("set-text", this.text.toUpperCase());
    }
  }
};
</script>

<style scoped></style>
