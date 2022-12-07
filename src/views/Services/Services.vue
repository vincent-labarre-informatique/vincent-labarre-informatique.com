<template>
  <section ref="anchor" id="services" class="white-section">
    <div class="section-titles">
      <h2>Catalogue de service</h2>
      <p>Trouver la prestation qui répondra le mieux à vos attentes.</p>
    </div>
    <div class="section-body">
      <div id="services-list">
        <div class="service-card" v-observe-visibility="show">
          <svg-icon :fa-icon="faFileCode" :size=60></svg-icon>
          <h3><strong>Développement web</strong></h3>
          <p>Site vitrine, e-commerce, intranet, sur-mesure, application professionnelles.</p>
        </div>
        <div class="service-card" v-observe-visibility="show">
          <svg-icon :fa-icon="faSquareCheck" :size=60></svg-icon>
          <h3>Optimisation SEO</h3>
          <p>Référencement naturel, Analyse et optimisation, Rédaction de contenu.</p>
        </div>
        <div class="service-card" v-observe-visibility="show">
          <svg-icon :fa-icon="faPenToSquare" :size=60></svg-icon>
          <h3>Design et contenu</h3>
          <p>Aide à la rédaction des pages, proposition de design, pages responsives et adaptable sur plusieurs supports (PC, mobile, tablette)</p>
        </div>
        <div class="service-card" v-observe-visibility="show">
          <svg-icon :fa-icon="faKeyboard" :size=60></svg-icon>
          <h3>Script & automatisation</h3>
          <p>Scripts d'automatisation de tâche (nocturne, horaires...), Macros (Excel, Google Sheets), Sauvegarde.</p>
        </div>
        <div class="service-card" v-observe-visibility="show">
          <svg-icon :fa-icon="faFloppyDisk" :size=60></svg-icon>
          <h3>Administration système</h3>
          <p>Hébergement de site et de base de données, cloud, déploiement continu.</p>
        </div>
        <div class="service-card" v-observe-visibility="show">
          <svg-icon :fa-icon="faClipboard" :size=60></svg-icon>
          <h3>Consulting</h3>
          <p>Gestion de projet, aide au choix et à la fourniture de matériel informatique, analyse et chiffrage de projet.</p>
        </div>
      </div>
    </div>
    <div class="section-footer">
      <a href="#contact"><p>Pour plus d'information, n'hésitez pas à prendre contact avec moi.</p></a>
    </div>
  </section>
</template>
  
<script>
import { faClipboard, faFileCode, faKeyboard, faFloppyDisk, faPenToSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";

export default {
  name: 'Services',
  data() {
    return {
      faClipboard,
      faFloppyDisk,
      faFileCode,
      faKeyboard,
      faPenToSquare,
      faSquareCheck
    };
  },
  methods: {
    show(isVisible, entry) {
      if(isVisible) {
        entry.target.classList.add('fadeInUp');
      }
    }
  }
}
</script>

<style src="./Services.scss" lang="scss" scoped></style>
  