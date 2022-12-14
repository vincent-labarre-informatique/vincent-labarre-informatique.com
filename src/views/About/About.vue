<template>
  <div id="about">
    <router-link :to="{ name: 'home'}">
      <button class="back-button"><svg-icon :fa-icon="faChevronLeft"></svg-icon> Retour</button>
    </router-link>
    <Presentation />
    <Competencies />
  </div>
</template>
    
<script>
import Competencies from '@/components/Competencies/Competencies.vue'
import Presentation from '@/components/Presentation/Presentation.vue'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { mapActions } from 'vuex'

export default {
  name: 'About',
  data () {
    return {
      faChevronLeft
    }
  },
  components: {
    Competencies,
    Presentation
  },
  methods: {
    ...mapActions([
      'updateActivePage',
    ]),
  },
  mounted() {
    this.updateActivePage('about');
  }
}
</script>
    
<style src="./About.scss" lang="scss" scoped></style>
