<template>
    <section id="presentation" class="black-section">
      <div class="section-titles">
        <h2>Présentation</h2>
        <p>Un développeur passionné.</p>
      </div>
      <div class="section-body">
        <div id="presentation-text">
          <div>
            <h3>Je suis Vincent Labarre, un développeur freelance à votre service</h3>
          </div>
          <p>
            Dans le monde de l'infomatique depuis 2013, j'ai eu la chance de travailler dans des domaines
            divers et variés, le développement, l'administration système et réseau, la chefferie de projet.<br /><br />
            Après ces expériences, j'ai décidé de mettre mon expertise à votre service afin de vous aider à
            croître et à réaliser tous vos projets.<br /><br />
            J'ai également pu mener de front un projet très enrichissant : la gestion de système informatique 
            pour un escape game.<br /><br />
            Ma stack technique préféré pour réaliser mes projets web est le framework <a href="https://flask.palletsprojects.com/en/2.2.x/quickstart/" target="_blank">Flask</a> en Python pour 
            la partie backend et le framework <a href="https://vuejs.org/" target="_blank">VueJS</a> pour la partie frontend.
          </p>
        </div>
        <img src="@/assets/images/photo.png" alt="">
      </div>
    </section>
  </template>
      
  <script>  
  export default {
    name: 'Presentation',
  }
  </script>
      
  <style src="./Presentation.scss" lang="scss" scoped></style>
  