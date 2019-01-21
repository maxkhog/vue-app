<template>
  <div>
    <NavBar @logOut='logOut'/>
  </div>
</template>
<script>
import firebase from 'firebase';
import NavBar from '../components/Navbar'

export default {
  name: 'about',
  components:{
    NavBar,
  },
  methods: {
    logOut() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/');
      });
    },
  },
};
</script>
