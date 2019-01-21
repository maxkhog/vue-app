<template>
  <div>
    <NavBar @logOut='logOut'/>
    <div class="page">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="profile">
                        <div class="profile-title">
                            <div class="title-name">
                                MaxKhog
                            </div>
                            <div class="title-img">
                                <i class="fas fa-user-tie fa-lg"></i>
                            </div>
                        </div>
                        <div class="profile-stats">
                            <div class="stats-claim">
                                0 заявок
                            </div>
                            <div class="stats-answer">
                                0 ответов
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-block profile-btn profile-btn-color mt-2">
                            <i class="fas fa-plus fa-xs"></i> добавить заявку
                    </button>
                </div>
                <div class="col-lg-9 ">
                    <div class="panel mt-lg-0 mt-2">
                        <div class="panel-nav nav">
                            <a class="panel-nav-link panel-nav-link-active" href="#" >Мои заявки</a>
                            <a class="panel-nav-link" href="#" >Ответы на заявки</a>
                        </div>
                        <div class="panel-content">
                            <ul class="panel-content-list">
                                <li class="content-list-item">
                                    <div class="list-icon list-icon-reject">
                                        <i class="fas fa-file-alt fa-3x"></i>
                                    </div>
                                    <div class="list-item-textwrap">
                                            <div class="list-item-title">
                                                Заявка на уборку снега
                                            </div>
                                            <div class="list-item-stutus">
                                                рассмотрено 18 января
                                            </div>
                                            <div class="list-item-body">
                                                прошу убрать снег с придомовой территории
                                            </div>
                                    </div>
                                </li>
                                <li class="content-list-item">
                                        <div class="list-icon list-icon-accept">
                                            <i class="fas fa-file-alt fa-3x"></i>
                                        </div>
                                    <div class="list-item-textwrap">
                                        <div class="list-item-title">
                                            Заявка на уборку снега
                                        </div>
                                        <div class="list-item-stutus">
                                            рассмотрено 18 января
                                        </div>
                                        <div class="list-item-body">
                                            прошу убрать снег с придомовой территории
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="fixed-bottom panel">
        <div class="container">
                @2019 MaxKhog
        </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase';
import NavBar from '../components/Navbar'

export default {
  name: 'home',
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
