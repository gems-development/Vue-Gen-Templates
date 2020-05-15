import Vue from "vue";
import Vuex from "vuex";
import proxy from "../proxy/proxy.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    card: null
  },

  mutations: {
    discard_changes: (state) => {
      state.card = null;
    },
    set_card: (state, key) => {
      state.card = JSON.parse(proxy.getCard(key));
    },
    set_card_value: (state, value) => {
      state.card.obj.fields[value.fieldName].value = value.value;
    },
  },

  actions: {
    getCardData: ({ commit }, key) => {
      commit("discard_changes");
      commit("set_card", key);
    },
    setCardValue: ({ commit }, payload) => {
      commit("set_card_value", payload);
    },
  },

  getters: {
    cardData: state => {
      return state.card;
    }
  }
});
export default store;
