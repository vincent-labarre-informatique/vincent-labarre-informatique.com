<template>
    <div id="home">
      <div id="title">
        <p class="title">Boostez votre productivité dès maintenant</p>
        <p>1 seul interlocuteur pour tous vos projets web</p>
      </div>
      <a href="#contact" class="cta">
        <button>
          Contacter moi
          <div class="down-arrow"></div>
        </button>
      </a>
    </div>
  </template>
  
  <script>
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

  export default {
    name: 'Home',
    data() {
      return {
        faQuoteLeft,
        faQuoteRight
      };
    }
  }
  </script>
  
  <style src="./Home.scss" lang="scss" scoped></style>
  