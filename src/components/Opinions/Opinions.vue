<template>
  <section id="opinions" class="color-section">
    <div class="section-titles">
      <h2>Avis clients</h2>
      <p>Ils m'ont fait confiance.</p>
    </div>
    <div class="section-body">
      <div id="opinions-list">
        <div class="opinion-card" v-observe-visibility="show">
          <img src="@/assets/images/main-page.jpg" alt="Arnaud Frumy Photo">
          <p>
            Vincent est à l'écoute, compétant et passionné.<br />
            Nous avons fait appel à lui à plusieurs reprises, pour des projets ambitieux de logiciels internes, et il as toujours su trouver les solutions pour nos demandes.
          </p>
          <p class="opinion-author">
            Arnaud Frumy<br />
            MYSTERE EXPRESS
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
    
<script>
import { mapActions } from 'vuex'

export default {
  name: 'Opinions',
  methods: {
    ...mapActions([
      'addPosition',
    ]),
    show(isVisible, entry) {
      if (isVisible) {
        entry.target.classList.add('fadeInUp');
      }
    }
  },
  mounted() {
    this.addPosition([
      'opinions',
      document.getElementById('opinions').getBoundingClientRect().y
    ]);
  }
}
</script>
  
<style src="./Opinions.scss" lang="scss" scoped>

</style>
    