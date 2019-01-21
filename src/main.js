/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue';
import router from './router';
// import store from './store';

Vue.config.productionTip = false;


let app = '';
const config = {
  apiKey: 'AIzaSyCLWR97Y_OO9j9PI0JdcO_R2exJmApJZ5w',
  authDomain: 'vue-app-auth.firebaseapp.com',
  databaseURL: 'https://vue-app-auth.firebaseio.com',
  projectId: 'vue-app-auth',
  storageBucket: 'vue-app-auth.appspot.com',
  messagingSenderId: '449065436889',
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app');
  }
});
