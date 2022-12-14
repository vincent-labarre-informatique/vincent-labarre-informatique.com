<template>
  <footer v-if="getActivePage !== 'not-found'">
    <div id="footer-header">
      <div class="logo">
        <a href="https://vincent-labarre-informatique.com"><img src="~@/assets/images/logo-1.png" alt="VL-Informatique"></a>
      </div>
      <div class="social-network">
        <a href="https://www.instagram.com/vincent_labarre_informatique" target="_blank"><svg-icon :fa-icon="faInstagram"></svg-icon></a>
        <a href="https://www.linkedin.com/in/vincent-labarre-a7b0b013a" target="_blank"><svg-icon :fa-icon="faLinkedinIn"></svg-icon></a>
      </div>
    </div>
    <div id="footer-body">
      <div id="bio">
        <h6><strong>Développeur web full stack freelance</strong></h6>
        <p>
          Je me nomme Vincent, j'ai 27 ans et je vous propose mes compétences en développement, 
          en intégration, en chefferie de projet ou en automatisation. 
          Passionné par tout ce qui attrait à internet et aux nouvelles technologies, 
          je me mets au service de vos besoins et de vos envies.<br /><br />
          <router-link :to="{ name: 'about'}">
            En savoir plus
          </router-link>
        </p>
      </div>
      <div id="bio-contact">
        <span><svg-icon :fa-icon="faLocationDot" size="14"></svg-icon> 5 rue Jeanne d'Arc - 58000 Nevers</span><br>
        <span><svg-icon :fa-icon="faPhone" size="14"></svg-icon> <a href="tel:+33771648825">(+33) 07.71.64.88.25</a></span><br>
        <span><svg-icon :fa-icon="faEnvelope" size="14"></svg-icon> <a href="mailto:contact@vincent-labarre-informatique.com">contact@vincent-labarre-informatique.com</a></span><br>
        <span><svg-icon :fa-icon="faGlobe" size="14"></svg-icon> <a href="https://www.vincent-labarre-informatique.com">https://www.vincent-labarre-informatique.com</a></span>
      </div>
    </div>
    <div id="footer-footer">
      <p>Vincent Labarre - VL Informatique - Copyright &copy;2022 - {{getYear}}</p>
    </div>
  </footer>
</template>
  
<script>
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { mapGetters } from 'vuex'

export default {
  name: 'Footer',
  data() {
    return {
      faEnvelope,
      faGlobe,
      faInstagram,
      faLinkedinIn,
      faLocationDot, 
      faPhone
    };
  },
  computed: {
    ...mapGetters([
      'getActivePage'
    ]),
    getYear() {
      return new Date().getFullYear();
    }
  }
}
</script>
  
<style src="./Footer.scss" lang="scss" scoped></style>
  