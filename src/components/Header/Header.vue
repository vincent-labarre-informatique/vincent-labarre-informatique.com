<template>
  <div id="coordonnees-rappel" v-if="windowTop == 0">
    <div class="social-network">
      <a href="https://www.linkedin.com/in/vincent-labarre-a7b0b013a" target="_blank"><svg-icon :fa-icon="faLinkedinIn"></svg-icon></a>
      <a href="https://www.instagram.com/vincent_labarre_informatique" target="_blank"><svg-icon :fa-icon="faInstagram"></svg-icon></a>
    </div>
    <div class="tel-mail">
      <a href="tel:+33771648825"><svg-icon :fa-icon="faPhone"></svg-icon> (+33) 07.71.64.88.25</a>
      <a href="mailto:contact@vincent-labarre-informatique.com"><svg-icon :fa-icon="faEnvelope"></svg-icon> contact@vincent-labarre-informatique.com</a>
    </div>
  </div>
  <nav ref="main-header" id="main-nav" :class="{ 'unfixed-main-nav': windowTop == 0, 'fixed-main-nav': windowTop != 0 }" v-if="getActivePage !== 'not-found'">
    <div id="logo-home">
      <router-link :to="{ name: 'home'}">
        <img src="~@/assets/images/logo-1.png" alt="VL-Informatique">
      </router-link>
    </div>
    <div id="open-menu">
      <svg-icon :fa-icon="faBars" @click="togglePhoneMenu" v-if="!phoneMenuVisible"></svg-icon>
      <svg-icon :fa-icon="faXmark" @click="togglePhoneMenu" v-if="phoneMenuVisible"></svg-icon>
    </div>
    <ul :class="[ phoneMenuVisible ? 'visible' : 'hide' ]">
      <router-link @click="togglePhoneMenu" to="/#services" :class="{ 
        'active':  (windowTop >= this.getSectionPosition('services') - mainHeader) && getActivePage == 'home' 
        && windowTop < this.getSectionPosition('rates') - mainHeader 
      }"><li>Services</li></router-link>
      <router-link @click="togglePhoneMenu" to="/#rates" :class="{ 
        'active':  (windowTop >= this.getSectionPosition('rates') - mainHeader) && getActivePage == 'home'
        && windowTop < this.getSectionPosition('opinions') - mainHeader 
      }"><li>Tarifs</li></router-link>
      <router-link @click="togglePhoneMenu" to="/#opinions" :class="{ 
        'active':  (windowTop >= this.getSectionPosition('opinions') - mainHeader) && getActivePage == 'home'
        && windowTop < this.getSectionPosition('contact') - mainHeader 
      }"><li>Avis</li></router-link>
      <router-link @click="togglePhoneMenu" to="/#contact" :class="{ 
        'active':  (windowTop >= this.getSectionPosition('contact') - mainHeader) && getActivePage == 'home' }"><li>Contact</li></router-link>
    </ul>
  </nav>
</template>

<script>
import { faBars, faXmark, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      faBars,
      faXmark,
      faInstagram,
      faLinkedinIn,
      faEnvelope, 
      faPhone,
      windowTop: 0,
      phoneMenuVisible: false,
      refsPosition: {},
      mainHeader: 0
    };
  },
  computed: {
    ...mapGetters([
      'getSectionPosition',
      'getActivePage'
    ]),
  },
  methods: {
    togglePhoneMenu() {
      this.phoneMenuVisible = !this.phoneMenuVisible;
    }
  },
  mounted() {
    this.mainHeader = this.$refs['main-header'].clientHeight;
    const self = this;
    window.addEventListener("scroll", function(){
      self.windowTop = window.scrollY;
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll");
  }
}
</script>

<style src="./Header.scss" lang="scss" scoped></style>
