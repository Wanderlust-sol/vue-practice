<template>
  <div>
    Next
    <div>{{members}}</div>
    <div>{{membersArray}}</div>
    <button @click="getMembers">버튼</button>
    <!-- <div>{{text}}</div> -->
    <ComputedSetter :text="'안녕'"></ComputedSetter>
  </div>
</template>

<script>
import ComputedSetter from "@/components/ComputedSetter";

export default {
  components: { ComputedSetter },
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
    console.log(this.members);
  }
};
</script>

<style scoped></style>
