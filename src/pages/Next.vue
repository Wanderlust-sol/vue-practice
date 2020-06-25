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
    <div>
      <button @click="counterComputed++">computed button</button>
      <p>{{ counterComputed }}</p>

      <button @click="counterMethod++">method button</button>
      <p>{{ counterMethod }}</p>

      <div>
        {{ printTextMethod() }}
        {{ printTextComputed }}
      </div>
    </div>
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
      membersArray: [],
      counterComputed: 0,
      counterMethod: 0
    };
  },
  computed: {
    printTextComputed: function() {
      return console.log(
        "counter printed from computed:",
        this.counterComputed
      );
    }
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
    },
    printTextMethod: function() {
      console.log("counter printed from method:", this.counterMethod);
    }
  },
  created() {
    //console.log(this.members);
  }
};
</script>

<style scoped></style>
