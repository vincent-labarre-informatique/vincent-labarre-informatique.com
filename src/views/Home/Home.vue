<template>
    <div id="home">
      <div id="title">
        <h1>Vincent Labarre Informatique</h1>
        <p><svg-icon :fa-icon="faQuoteLeft" :size=20></svg-icon> La solution pour d&eacute;velopper vos id&eacute;es. <svg-icon :fa-icon="faQuoteRight" :size=20></svg-icon></p>
      </div>
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
  