<template>
  <section ref="anchor" id="rates" class="color-section">
    <div class="section-titles">
      <h2>Tarifs</h2>
      <p>Des tarifs clairs et transparents.</p>
    </div>
    <div class="section-body">
      <div class="informations" v-observe-visibility="show">
        <a href="#contact">
          <p>
            Comme chaque projet est différent, chaque projet sera étudié avec soin et fera l'objet d'une analyse particulière afin de prendre en compte toutes ces spécificités.
            <br/>N'hésitez plus et demandez votre devis ! Et en plus c'est gratuit !
          </p>
        </a>
      </div>
      <div class="rates-list" v-if="ratesDisplay">
        <div class="rates-card">
          <div class="corner-rate"></div>
          <div class="rate">
            <p>A partir de</p>
            <h4>999€</h4>
          </div>
          <div class="card-header">
            <p><sup>*</sup>Site<br/>vitrine</p>
          </div>
          <div class="card-body">
            <ul>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Site one page</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Menu simple</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Thèmes fournis en amont</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Responsive PC, tablette, mobile</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Animations de navigation</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Formulaire de contact et envoi d'email</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Référencement naturel</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Liens de partages sur les réseau sociaux</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Support pendant 3 mois</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Hébergement + nom de domaine pendant 1 an</p></li>
            </ul>
          </div>
        </div>
        <div class="rates-card">
          <div class="corner-rate"></div>
          <div class="rate">
            <p>A partir de</p>
            <h4>1600€</h4>
          </div>
          <div class="card-header">
            <p><sup>*</sup>Site<br/>personnalisé</p>
          </div>
          <div class="card-body">
            <ul>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Site multi page</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Menu et sous menu optimisés</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Création et proposition de plusieurs thèmes sur mesure</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Responsive PC, tablette, mobile</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Animations diverses au choix</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Formulaire de contact et envoi d'email</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Référencement naturel</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Liens de partages sur les réseau sociaux</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Support pendant 6 mois</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Hébergement + nom de domaine pendant 1 an</p></li>
            </ul>
          </div>
        </div>
        <div class="rates-card">
          <div class="corner-rate"></div>
          <div class="rate">
            <p>A partir de</p>
            <h4>3500€</h4>
          </div>
          <div class="card-header">
            <p><sup>*</sup>Site<br/>E-commerce</p>
          </div>
          <div class="card-body">
            <ul>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Site multi page</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Menu et sous menu optimisés</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Charte graphique sur mesure</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Responsive PC, tablette, mobile</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Animations diverses au choix</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Formulaire de contact et envoi d'email</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Référencement naturel</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Liens de partages sur les réseau sociaux</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Support pendant 6 mois</p></li>
              <li><svg-icon :fa-icon="faMinus"></svg-icon><p>Hébergement + nom de domaine pendant 1 an</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default {
  name: 'Rates',
  data() {
    return {
      faMinus,
      ratesDisplay: false
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

<style src="./Rates.scss" lang="scss" scoped></style>
  