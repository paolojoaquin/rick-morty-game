<template>
  <main class="dashboard">
    <div class="selected-card">
      <!-- <Button :name-button="refresh"/> -->
      <Card :character="chosenCharacter" :closed="isClosed" />
      <div class="results__">
        <!-- <CardInfo :icon-src="osadposa" :name-info="plus"/>
        <CardInfo :icon-src="osadposa" :name-info="plus"/> -->
      </div>
    </div>
    <div class="options">
      <Card v-for="option in options"
            :key="option.id"
            :character="option"
            :closed="false"
            @click="validate(option.id)"
      />
    </div>
  </main>
</template>

<script>
import Card from './components/Card.vue';
import { getCharacters, randomNumber } from "./utils/api";


export default {
  name: 'App',
  components: {
    Card
  },
  data() {
    return {
      options: [],
      chosenCharacter: {},
      isClosed: true
    }
  },
  async beforeCreate() {
    const characters = await getCharacters();
    const chosenCharacter = characters[ randomNumber(0, 2) ];
    this.options = characters;
    this.chosenCharacter = chosenCharacter;
  },
  methods: {
    validate(chosenCharacter) {
        if (chosenCharacter === this.chosenCharacter.id) {
            this.isClosed = false;
            alert("¡Lo has adivinado!");
        }
        else {
            alert("Personaje incorrecto, inténtalo de nuevo");
        }
    }
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
.dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background: rgb(154,221,212);
  background: linear-gradient(114deg, rgba(154,221,212,1) 0%, rgba(171,214,227,1) 100%);
}
.selected-card {
  display: flex;
  justify-content: center;
}
.options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  gap: 15px;
  justify-items: center;
}

</style>
