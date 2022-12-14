<template>
  <div id="home">
    <div id="title">
      <h1>Vincent Labarre Informatique</h1>
      <p class="citation"><svg-icon :fa-icon="faQuoteLeft"></svg-icon> La solution pour développer vos idées. <svg-icon :fa-icon="faQuoteRight"></svg-icon></p>
      <p class="title">Boostez votre productivité dès maintenant</p>
    </div>
    <a href="#contact" class="cta">
      <button>
        Contacter moi
        <div class="down-arrow"></div>
      </button>
    </a>
  </div>
  <Services />
  <Rates />
  <Opinions/>
  <Contact />
</template>
  
<script>
import Contact from '@/components/Contact/Contact.vue'
import Opinions from '@/components/Opinions/Opinions.vue'
import Rates from '@/components/Rates/Rates.vue'
import Services from '@/components/Services/Services.vue'
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Contact,
    Opinions,
    Rates,
    Services
  },
  data() {
    return {
      faQuoteLeft,
      faQuoteRight
    };
  },
  methods: {
    ...mapActions([
      'updateActivePage',
    ]),
  },
  mounted() {
    this.updateActivePage('home');
  }
}
</script>
  
<style src="./Home.scss" lang="scss" scoped></style>
  