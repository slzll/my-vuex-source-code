<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>num:{{ $store.state.num }}</div>
    <div>num:{{ $store.getters.getNum }}</div>
    <div>
      <button @click="incre">increase</button>
      <button @click="minus">minus</button>
      <button @click="asyncIncre">asyncIncre</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    incre() {
      this.$store.commit("incre", 1);
    },
    minus() {
      this.$store.commit("minus", 1);
    },
    asyncIncre() {
      this.$store.dispatch("asyncIncre", 1);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
