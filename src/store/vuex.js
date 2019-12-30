let Vue;

class Store {
  constructor({ state = {}, getters = {}, mutations = {}, actions = {} }) {
    this._store = new Vue({
      data: {
        state
      }
    });

    this.getters = {};
    Object.keys(getters).forEach(getterName => {
      Object.defineProperty(this.getters, getterName, {
        get: () => {
          return getters[getterName](this.state);
        }
      });
    });

    this.mutations = {};
    Object.keys(mutations).forEach(mutationName => {
      this.mutations[mutationName] = payload => {
        return mutations[mutationName](this.state, payload);
      };
    });

    this.actions = {};
    Object.keys(actions).forEach(actionName => {
      this.actions[actionName] = payload => {
        return actions[actionName](this, payload);
      };
    });
  }
  get state() {
    return this._store.state;
  }
  commit = (mutationName, payload) => {
    return this.mutations[mutationName](payload);
  };
  dispatch(actionName, payload) {
    return this.actions[actionName](payload);
  }
}

const install = _v => {
  Vue = _v;
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        console.log(this.$options.store);
        this.$store = this.$options.store;
      } else if (this.$parent && this.$parent.$store) {
        this.$store = this.$parent.$store;
      }
    }
  });
};

export default {
  install,
  Store
};
