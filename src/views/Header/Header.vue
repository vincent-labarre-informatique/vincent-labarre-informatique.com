<template>
  <nav ref="main-header" id="main-nav" :class="{ 'unfixed-main-nav': windowTop == 0, 'fixed-main-nav': windowTop != 0 }">
    <div id="logo-home">
      <router-link :to="{ name: 'home'}" ref="home">
        <img src="~@/assets/images/logo-1.png" alt="VL-Informatique">
      </router-link>
    </div>
    <div id="open-menu">
      <svg-icon :fa-icon="faBars" @click="togglePhoneMenu" v-if="!phoneMenuVisible"></svg-icon>
      <svg-icon :fa-icon="faXmark" @click="togglePhoneMenu" v-if="phoneMenuVisible"></svg-icon>
    </div>
    <ul :class="[ phoneMenuVisible ? 'visible' : 'hide' ]">
      <router-link @click="togglePhoneMenu" to="#services" :class="{ 'active':  windowTop >= refsPosition['services'] && windowTop < refsPosition['competencies'] }"><li>Services</li></router-link>
      <router-link @click="togglePhoneMenu" to="#competencies" :class="{ 'active':  windowTop >= refsPosition['competencies'] && windowTop < refsPosition['rates'] }"><li>Comp&eacute;tences</li></router-link>
      <router-link @click="togglePhoneMenu" to="#rates" :class="{ 'active':  windowTop >= refsPosition['rates'] && windowTop < refsPosition['contact'] }"><li>Tarifs</li></router-link>
      <!--<router-link @click="togglePhoneMenu" to="#opinions" :class="{ 'active':  windowTop >= refsPosition['opinions'] && windowTop < refsPosition['contact'] }"><li>Avis</li></router-link>-->
      <router-link @click="togglePhoneMenu" to="#contact" :class="{ 'active':  windowTop >= refsPosition['contact'] }"><li>Contact</li></router-link>
    </ul>
  </nav>
</template>

<script>
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default {
  name: 'Header',
  data(){
    return {
      faBars,
      faXmark,
      windowTop: 0,
      refsPosition: [],
      phoneMenuVisible: false
    };
  },
  methods: {
    togglePhoneMenu() {
      this.phoneMenuVisible = !this.phoneMenuVisible;
    }
  },
  mounted() {
    let self = this;
    let mainHeader = this.$refs['main-header'].clientHeight;
    this.refsPosition['services'] = this.$parent.$refs['services'].$refs['anchor'].getBoundingClientRect().y - mainHeader;
    this.refsPosition['competencies'] = this.$parent.$refs['competencies'].$refs['anchor'].getBoundingClientRect().y - mainHeader;
    this.refsPosition['rates'] = this.$parent.$refs['rates'].$refs['anchor'].getBoundingClientRect().y - mainHeader;
    // this.refsPosition['opinions'] = this.$parent.$refs['opinions'].$refs['anchor'].getBoundingClientRect().y - mainHeader;
    this.refsPosition['contact'] = this.$parent.$refs['contact'].$refs['anchor'].getBoundingClientRect().y - mainHeader;

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
