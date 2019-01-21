<template>
     <div class="container">
        <div class="row">
            <div class="col-lg-5 col-md-7 mx-auto">
                <div class="loginForm">
                    <div class="form-title">
                        <h2>
                            ЛК ЖКХ
                        </h2>
                    </div>
                    <form >
                      <FormInput inputName='Name' inputType='text'
                                  v-model="newUser.name"/>
                      <FormInput inputName='Email' inputType='Email'
                                  v-model="newUser.email"
                                  :emailValid='!emailNull'/>
                      <FormInput inputName='Password' inputType='password'
                                  v-model="newUser.password"/>
                      <FormInput inputName='Re-password' inputType='password'
                                  v-model="newUser.repassword"/>
                      <div class="form-text">
                        <a class="form-text-link" href="#">
                          Forgot password?
                        </a>
                      </div>
                      <button type="button" class="btn btn-block form-btn-color form-btn"
                              @click="signUp">
                        Sign Up
                      </button>
                      <div class="form-text">
                        Have account already? Please go to
                        <router-link to="/login" class="form-text-link">
                         Sign In
                        </router-link>
                      </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase';
import FormInput from '../components/FormInput';
const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export default {
  name: 'SignUp',
  components: {
    FormInput,
  },
  data() {
    return {
      newUser: {
        name: '',
        email: '',
        password: '',
        repassword: '',
      },
      emailValid: true,
    };
  },
  computed: {
    emailNull() {
      if (this.User.email === '') {
        return true;
      } return false;
    },
    validation() {
      return {
        name: !!this.newUser.name.trim(),
        email: emailRE.test(this.newUser.email),
        password: () => this.newUser.password === this.newUser.repassword,
      };
    },
    isValid() {
      const validation = this.validation;
      return Object.keys(validation).every(key => validation[key]);
    },
  },
  methods: {
    signUp() {
      if (this.isValid) {
        firebase.auth().createUserWithEmailAndPassword(this.newUser.email, this.newUser.password).then(
          (user) => {
            this.$router.replace('home');
          },
          (err) => {
            alert(`Oops. ${err.message}`);
          },
        );
      }
    },
  },
};
</script>
