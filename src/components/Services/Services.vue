<template>
  <section id="services" class="white-section">
    <div class="section-titles">
      <h2>Catalogue de service</h2>
      <p>Trouver la prestation qui répondra le mieux à vos attentes.</p>
    </div>
    <div class="section-body">
      <div id="services-list">
        <div class="service-card" v-observe-visibility="show">
          <svg-icon :fa-icon="faFileCode" :size=60></svg-icon>
          <h3><strong>Développement web</strong></h3>
          <p>Augmenter votre visibilité grâce à votre présence sur internet. Démarquez-vous de vos concurrents grâce à un site personnalisé.</p>
        </div>
        <div class="service-card" v-observe-visibility="show">
          <svg-icon :fa-icon="faSquareCheck" :size=60></svg-icon>
          <h3>Optimisation SEO</h3>
          <p>Augmenter le nombre de vos visiteurs en étant dans les premiers lors des recherches sur Google.</p>
        </div>
        <div class="service-card" v-observe-visibility="show">
          <svg-icon :fa-icon="faPenToSquare" :size=60></svg-icon>
          <h3>Design et contenu</h3>
          <p>Améliorer votre identité visiuelle ainsi que vos textes. Soyez présent sur tous les supports (téléphone, PC , tablette ...).</p>
        </div>
        <div class="service-card" v-observe-visibility="show">
          <svg-icon :fa-icon="faKeyboard" :size=60></svg-icon>
          <h3>Script & automatisation</h3>
          <p>Gagner du temps dans vos tâches récurrantes et redondantes. Prenez le temps pour d'autre activité plus rémunératrices.</p>
        </div>
        <div class="service-card" v-observe-visibility="show">
          <svg-icon :fa-icon="faFloppyDisk" :size=60></svg-icon>
          <h3>Administration système & réseau</h3>
          <p>Créer ou améliorer votre réseau informatique interne. Ne perdez plus de temps dans le choix et dans l'installation de vos équipements.</p>
        </div>
        <div class="service-card" v-observe-visibility="show">
          <svg-icon :fa-icon="faClipboard" :size=60></svg-icon>
          <h3>Consulting</h3>
          <p>Optimiser les délais et budgets de vos projets. Anticiper les problèmes et plannifier au mieux vos objectifs.</p>
        </div>
      </div>
    </div>
    <div class="section-footer">
      <a href="#contact" class="cta">
        <button>
          Demander votre devis
          <div class="down-arrow"></div>
        </button>
      </a>
    </div>
  </section>
</template>
  
<script>
import { faClipboard, faFileCode, faKeyboard, faFloppyDisk, faPenToSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { mapActions } from 'vuex'

export default {
  name: 'Services',
  data() {
    return {
      faClipboard,
      faFloppyDisk,
      faFileCode,
      faKeyboard,
      faPenToSquare,
      faSquareCheck,
    };
  },
  methods: {
    ...mapActions([
      'addPosition',
    ]),
    show(isVisible, entry) {
      if(isVisible) {
        entry.target.classList.add('fadeInUp');
      }
    }
  },
  mounted() {
    this.addPosition([
      'services',
      document.getElementById('services').getBoundingClientRect().y
    ]);
  }
}
</script>

<style src="./Services.scss" lang="scss" scoped></style>
  