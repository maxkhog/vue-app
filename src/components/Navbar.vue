<template>
  <nav class="navbar navbar-color">
      <div class="container">
          <div class="navbar-brand">ЛК ЖКХ</div>
          <div class="nav mr-auto">
              <router-link to="/home"
              class="nav-item navbar-link navbar-link-color">
                Мои заявки
              </router-link>
              <router-link to="/about"
              class="nav-item navbar-link navbar-link-color">
                О приложении
              </router-link>
          </div>
          <div class="buttons">
              <button class="btn btn-light btn-color navbar-btn"
                      @click = logOut>
                  <i class="fas fa-sign-out-alt fa-lg"></i>
              </button>
          </div>
      </div>
  </nav>
</template>
<script>
export default {
  name: 'navbar',
  methods: {
    logOut() {
      this.$emit('logOut');
    },
  },
}
</script>
