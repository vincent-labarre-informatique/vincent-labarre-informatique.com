<template>
  <section ref="anchor" id="opinions" class="black-section" v-if="showAvis">
    <div class="section-titles">
      <h2>Avis clients</h2>
      <p>Ils m'ont fait confiance.</p>
    </div>
    <div class="section-body">
    </div>
  </section>
</template>
    
<script>

export default {
  name: 'Opinions',
  data() {
    return {
      showAvis: false
    };
  },
  methods: {
    show(isVisible, entry) {
      if (isVisible) {
        entry.target.classList.add('fadeInUp');
      }
    }
  }
}
</script>
  
<style src="./Opinions.scss" lang="scss" scoped>

</style>
    