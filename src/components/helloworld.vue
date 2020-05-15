<template>
  <div>
    <button @click="onBtnClick(1)">Go to first card</button>
    <button @click="onBtnClick(2)">Go to second card</button>
    <button @click="onBtnClick(3)">Go to third card</button>
    <hr>
    <dynamic :template="template" :data="propsData"></dynamic>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import dynamic from './renderer.vue';
import Generator from '../generator.js';

export default {
  name: 'HelloWorld',
  computed: {
    propsData() {
      return this.cardData;
    },
    template() {
      return Generator.generateCard(this.cardData);
    },
    ...mapGetters(['cardData']),
  },
  components: {
    dynamic,
  },
  methods: {
    onBtnClick(index) {
      this.$store.dispatch('getCardData', index);
    },
  },
};
</script>
