<template>
  <div>
    <div v-if="loginType === 'username'">
      <label>사용자 이름</label>
      <input placeholder="사용자 이름을 입력하세요" key="username-input" />
    </div>
    <div v-else>
      <label>이메일</label>
      <input placeholder="이메일 주소를 입력하세요" key="email-input" />
    </div>
    <div v-show="loginType === 'username'">나왔다</div>
    <button @click="loginButton">로그인 유형 변경</button>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{item}}</li>
    </ul>
    <ul>
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </ul>
    <input v-model="message" placeholder="여기를 수정해보세요" />
    <p>메시지: {{ message }}</p>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <select v-model="selected">
      <option v-for="option in options" :value="option.value" :key="option.text">{{option.text}}</option>
    </select>
    <span>선택함: {{ selected }}</span>
  </div>
</template>

<script>
export default {
  name: "LocalComponent",
  data: function() {
    return {
      title: void 0,
      loginType: "username",
      items: ["a", "b", "c"],
      numbers: [1, 2, 3, 4, 5],
      message: "",
      checked: false,
      selected: "",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" }
      ]
    };
  },
  methods: {
    showTitle() {
      this.title = "Local Component!!";
    },
    loginButton() {
      if (this.loginType === "username") {
        this.loginType = "email";
      } else return (this.loginType = "username");
      this.items.splice(0, 1, "");
    }
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    }
  }
};
</script>

<style scoped>
div {
  padding: 20px;
}

div span {
  margin: 20px;
}
</style>