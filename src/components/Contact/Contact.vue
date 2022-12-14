<template>
  <section id="contact" class="white-section">
    <div class="section-titles">
      <h2>Contact</h2>
      <p>N'hésitez plus, demandez un devis.</p>
    </div>
    <form class="section-body" @submit.prevent="sendEmail">
      <div id="contact-form" v-observe-visibility="show">
        <div class="input-textfield full-width" v-if="info != ''">
          <p>{{info}}</p>
        </div>
        <div class="input-textfield">
          <input type="text" id="firstname" name="firstname" placeholder=" " v-model="firstname">
          <label><sup>*</sup> Prénom</label>
        </div>
        <div class="input-textfield">
          <input type="text" id="lastname" name="lastname" placeholder=" " v-model="lastname">
          <label><sup>*</sup> Nom</label>
        </div>
        <div class="input-textfield">
          <input type="email" id="email" name="email" placeholder=" " v-model="email">
          <label><sup>*</sup> E-Mail</label>
        </div>
        <div class="input-textfield">
          <input type="phone" id="phone" name="phone" placeholder=" " v-model="phone">
          <label>Téléphone</label>
        </div>
        <div class="input-textfield full-width">
          <textarea name="details" id="details" v-model="message" placeholder="Afin de rendre la création du devis et la compréhension du projet la plus fine possible, merci de détailler un maximum votre futur projet."></textarea>
          <label><sup>*</sup> Votre projet</label>
        </div>
        <button type="submit" name="Send">Me contacter</button>
      </div>
    </form>
  </section>
</template>
      
<script>
import emailjs from 'emailjs-com';
import { mapActions } from 'vuex'

export default {
  name: 'Contact',
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
      info: ''
    };
  },
  methods: {
    ...mapActions([
      'addPosition',
    ]),
    sendEmail(e) {
      e.preventDefault();
      this.info = '';
      if (this.firstname && this.lastname && this.email && this.message) {
        if (!this.validEmail(this.email)) {
          this.info = 'Merci de saisir une adresse mail valide.';
        } 
        if (this.phone != '' && !this.validPhone(this.phone)) {
          this.info = 'Merci de saisir un numéro de téléphone valide.';
        } 
        if (this.info == '') {
          try {
            emailjs.sendForm('service_3hadj5k', 'template_4adbwgc', e.target,
            'ERkH5KloKsYK4bGjk', {
              'firstname': this.firstname,
              'lastname': this.lastname,
              'email': this.email,
              'phone': this.phone,
              'message': this.message,
            });
            this.info = 'Votre demande a bien été envoyée.';
          } catch(error) {
            this.info = 'Une erreur est survenue lors de l\'envoi du message. Contacter moi directement à l\'adresse contact@vincent-labarre-informatique.com';
          }

          this.firstname = '';
          this.lastname = '';
          this.email = '';
          this.phone = '';
          this.message = '';
        }
      }
      else {
        this.info = 'Merci de renseigner tous les champs obligatoires. (';
        if (!this.firstname) {
          this.info += 'Prénom,';
        }
        if (!this.lastname) {
          this.info += 'Nom,';
        }
        if (!this.email) {
          this.info += 'Email,';
        }
        if (!this.message) {
          this.info += 'Détail du projet,';
        }
        this.info = this.info.slice(0, -1) + ').';
      }
    },
    validEmail(email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPhone(phone){
      let re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;
      return re.test(phone);
    },
    show(isVisible, entry) {
      if (isVisible) {
        entry.target.classList.add('fadeInUp');
      }
    }
  },
  mounted() {
    this.addPosition([
      'contact',
      document.getElementById('contact').getBoundingClientRect().y
    ]);
  }
}
</script>
    
<style src="./Contact.scss" lang="scss" scoped>

</style>
      