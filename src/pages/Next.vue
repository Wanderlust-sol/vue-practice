<template>
  <div>
    Next
    <div>{{members}}</div>
    <div>{{membersArray}}</div>
    <button @click="getMembers">버튼</button>
    <!-- <div>{{text}}</div> -->
    <ComputedSetter :text="'안녕'"></ComputedSetter>
    <SlotWrapper>
      <template #header>머리다</template>
      <p>몸통이다</p>
      <template v-slot:footer="slotProps">{{slotProps.user.firstName}}</template>
      <template v-slot:other="{user}">{{user.lastName}}</template>
    </SlotWrapper>
  </div>
</template>

<script>
import ComputedSetter from "@/components/ComputedSetter";
import SlotWrapper from "@/components/SlotWrapper";

export default {
  components: { ComputedSetter, SlotWrapper },
  data() {
    return {
      members: {},
      membersArray: []
    };
  },
  methods: {
    getMembers() {
      const newMember = {
        name: "Flea",
        instrument: "Bass",
        baeLevle: "A++"
      };

      const myNewValue = "hi";

      //this.members[newMember.name] = newMember;
      this.$set(this.members, newMember.name, newMember);
      this.$set(this.membersArray, 0, myNewValue);
      console.log(this.members);
      console.log(this.membersArray);
    }
  },
  created() {
    //console.log(this.members);
  }
};
</script>

<style scoped></style>
