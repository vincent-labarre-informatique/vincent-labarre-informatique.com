<template>
  <section id="competencies" class="white-section">
    <div class="section-titles">
      <h2>Revue de compétence</h2>
      <p>Un arsenal de compétence, pour répondre à vos besoins.</p>
    </div>
    <div class="section-body">
      <div class="competency-part" v-observe-visibility="show">
        <h3>Languages de programmation</h3>
        <div class="competency-list">
          <div class="competency-card">
            <div class="competency-domain">
              <p>HTML / CSS</p>
            </div>
            <div class="competency-level">
              <progress max="100" value="90"></progress>
            </div>
          </div>
          <div class="competency-card">
            <div class="competency-domain">
              <p>Python</p>
            </div>
            <div class="competency-level">
              <progress max="100" value="80"></progress>
            </div>
          </div>
          <div class="competency-card">
            <div class="competency-domain">
              <p>JavaScript</p>
            </div>
            <div class="competency-level">
              <progress max="100" value="80"></progress>
            </div>
          </div>
          <div class="competency-card">
            <div class="competency-domain">
              <p>Bash</p>
            </div>
            <div class="competency-level">
              <progress max="100" value="70"></progress>
            </div>
          </div>
          <div class="competency-card">
            <div class="competency-domain">
              <p>App Script</p>
            </div>
            <div class="competency-level">
              <progress max="100" value="70"></progress>
            </div>
          </div>
          <div class="competency-card">
            <div class="competency-domain">
              <p>PHP</p>
            </div>
            <div class="competency-level">
              <progress max="100" value="65"></progress>
            </div>
          </div>
        </div>
      </div>
      <div class="competency-part" v-observe-visibility="show">
        <h3>Framworks</h3>
        <div class="competency-list">
          <div class="competency-card">
            <div class="competency-domain">
              <p>Flask (Python)</p>
            </div>
            <div class="competency-level">
              <progress max="100" value="80"></progress>
            </div>
          </div>
          <div class="competency-card">
            <div class="competency-domain">
              <p>VueJS v3 (JavaScript)</p>
            </div>
            <div class="competency-level">
              <progress max="100" value="70"></progress>
            </div>
          </div>
          <div class="competency-card">
            <div class="competency-domain">
              <p>Angular v2+ (JavaScript)</p>
            </div>
            <div class="competency-level">
              <progress max="100" value="65"></progress>
            </div>
          </div>
          <div class="competency-card">
            <div class="competency-domain">
              <p>Laravel (PHP)</p>
            </div>
            <div class="competency-level">
              <progress max="100" value="40"></progress>
            </div>
          </div>
          <div class="competency-card">
            <div class="competency-domain">
              <p>Django (Python)</p>
            </div>
            <div class="competency-level">
              <progress max="100" value="35"></progress>
            </div>
          </div>
        </div>
      </div>
      <div class="competency-part" v-observe-visibility="show">
        <h3>Domaine de compétence</h3>
        <div class="competency-list">
          <div class="competency-card">
            <div class="card-title">
              <h4><svg-icon :fa-icon="faCheckCircle"></svg-icon>Conception et réalisation de site web</h4>
            </div>
            <div class="card-contain">
              <p>Choix des meilleurs technologies, <strong>développement full stack</strong>. Maîtrise de la partie backend et frontend.</p>
            </div>
          </div>
          <div class="competency-card">
            <div class="card-title">
              <h4><svg-icon :fa-icon="faCheckCircle"></svg-icon>Optimisation et fiabilité</h4>
            </div>
            <div class="card-contain">
              <p>Utilisation d'outils de fiabilisation (validation W3C), respet des standard, utilisation de framework performant, à jour et maintenu (VueJS, Flask).</p>
            </div>
          </div>
          <div class="competency-card">
            <div class="card-title">
              <h4><svg-icon :fa-icon="faCheckCircle"></svg-icon>Agilité et maîtrise du projet</h4>
            </div>
            <div class="card-contain">
              <p>Git CI, tests unitaires.</p>
            </div>
          </div>
          <div class="competency-card">
            <div class="card-title">
              <h4><svg-icon :fa-icon="faCheckCircle"></svg-icon>Script et automatisation</h4>
            </div>
            <div class="card-contain">
              <p>Script sous Linux et Windows, tâches planifiées, macros.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="competency-part" v-observe-visibility="show">
        <h3>Compétences diverses</h3>
        <div class="competency-list">
          <div class="competency-card">
            <div class="card-title">
              <h4><svg-icon :fa-icon="faCircleRight"></svg-icon>GIT</h4>
            </div>
          </div>
          <div class="competency-card">
            <div class="card-title">
              <h4><svg-icon :fa-icon="faCircleRight"></svg-icon>SQL</h4>
            </div>
          </div>
          <div class="competency-card">
            <div class="card-title">
              <h4><svg-icon :fa-icon="faCircleRight"></svg-icon>Hébergement</h4>
            </div>
          </div>
          <div class="competency-card">
            <div class="card-title">
              <h4><svg-icon :fa-icon="faCircleRight"></svg-icon>Supervision</h4>
            </div>
          </div>
          <div class="competency-card">
            <div class="card-title">
              <h4><svg-icon :fa-icon="faCircleRight"></svg-icon>Virtualisation</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
import { faCheckCircle, faCircleRight } from "@fortawesome/free-regular-svg-icons";

export default {
  name: 'Competencies',
  data() {
    return {
      faCheckCircle,
      faCircleRight
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

<style src="./Competencies.scss" lang="scss" scoped></style>
  