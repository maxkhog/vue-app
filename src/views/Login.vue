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
                      <FormInput inputName='Email' inputType='Email'
                                  v-model="User.email" :emailValid='!emailNull'/>
                      <FormInput inputName='Password' inputType='password'
                                  v-model="User.password"/>
                        <div class="form-text">
                          <a class="form-text-link" href="#">
                            Forgot password?
                          </a>
                        </div>
                      <button type="button" class="btn btn-block form-btn-color form-btn"
                              @click="login">
                        Sign in
                      </button>
                      <div class="form-text"> Still no account? Please go to
                        <router-link to="/signup" class="form-text-link">
                          Sign up
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
  name: 'login',
  components: {
    FormInput,
  },
  data() {
    return {
      User: {
        email: '',
        password: '',
      },
      emailValid: true,
    };
  },
  computed: {
    emailNull() {
      if (this.User.email === '') {
        return true;
      }
      return false;
    },
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.User.email, this.User.password).then(
        () => {
          this.$router.replace('home');
        },
        (err) => {
          alert(`Oops. ${err.message}`);
        },
      );
    },
  },
};
</script>
