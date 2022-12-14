<template>
  <metainfo></metainfo>
  <div id="main">
      <Header />
      <router-view />
      <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/Header.vue'
import { useMeta } from 'vue-meta'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
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
  },
}
</script>

<style src="./App.scss" lang="scss">

</style>
