<template>
  <metainfo></metainfo>
  <div id="main">
      <Header ref="header" />
      <Home />
      <Services ref="services" />
      <Competencies ref="competencies" v-if="false" />
      <Rates ref="rates" />
      <Opinions ref="opinions" />
      <Contact ref="contact" />
      <Footer />
  </div>
</template>

<script>
import Competencies from './views/Competencies/Competencies.vue'
import Contact from './views/Contact/Contact.vue'
import Footer from './views/Footer/Footer.vue'
import Header from './views/Header/Header.vue'
import Home from './views/Home/Home.vue'
import Opinions from './views/Opinions/Opinions.vue'
import Rates from './views/Rates/Rates.vue'
import Services from './views/Services/Services.vue'
import { useMeta } from 'vue-meta'

export default {
  name: 'App',
  components: {
    Competencies,
    Contact,
    Footer,
    Header,
    Home,
    Opinions,
    Rates,
    Services
  },
  setup() {
    useMeta({
      title: 'Vincent Labarre Informatique | Développeur web freelance',
      htmlAttrs: { lang: 'fr-FR' },
      meta: [
        { 'name': 'description', content: 'Vincent Labarre Informatique, un freelance à votre service. Site web, développements spécifiques, chefferie de projet. un catalogue de service à votre disposition.' },
        { 'name': 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'property': 'og:title', 'content': 'Vincent Labarre Informatique' },
        { 'property': 'og:site_name', 'content': 'Développeur web freelance' },
        { 'property': 'og:type', 'content': 'website' },
        { 'property': 'og:url', 'content': 'https://vincent-labarre-informatique.com' },
      ],
      link: [
        { 'rel': 'canonical', 'href': 'https://www.vincent-labarre-informatique.com' }
      ]
    })
  }
}
</script>

<style src="./App.scss" lang="scss">

</style>
