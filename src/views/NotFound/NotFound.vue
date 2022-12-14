<template>
  <div id="not-found">
    <div>
      <p>Page non trouvée</p>
      <router-link :to="{ name: 'home'}">
        <button>Retour à l'accueil</button>
      </router-link>
    </div>
  </div>
</template>
    
<script>
import { mapActions } from 'vuex'

export default {
  name: 'NotFound',
  methods: {
    ...mapActions([
      'updateActivePage',
    ]),
  },
  mounted() {
    this.updateActivePage('not-found');
  }
}
</script>
    
<style src="./NotFound.scss" lang="scss" scoped>

</style>
