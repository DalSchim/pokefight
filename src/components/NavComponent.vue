<script>
import {Icon} from "@iconify/vue";

export default {
  name: 'NavComponent',
  components: {
    Icon
  },
  mounted() {
    // si c'est un téléphone on hide la nav par défaut
    this.isPhone();
  },
  methods: {
    toggleNav() {
      this.show = !this.show;

    },
    isPhone() {
      this.isPhone = window.innerWidth < 768;
    }

  },
  data() {
    return {
      show: true,
    };
  },
}

</script>

<template>
  <header>
    <div class="containeur" v-if="show">
      <nav>
        <router-link to="/home">Home</router-link>
        <router-link to="/wait">Wait</router-link>

      </nav>
      <div class="icon">
        <router-link to="/profile"><Icon  class="icone" icon="iconamoon:profile-fill" /></router-link>
        <div><Icon class="icone" icon="ic:round-log-out"  /></div>
      </div>

    </div>
    <div class="burger-menu" v-if="isPhone" @click="toggleNav">
      <span></span>
      <span></span>
      <span></span>
    </div>

  </header>
</template>

<style scoped lang="scss">
  header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    color: white;
    width: 100%;
    z-index: 100;
    height: 70px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  }

  nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #333;
    color: white;
    z-index: 100;
  }

  nav a {
    padding: 10px 0;
    text-align: center;
    width: 100%;
    border-bottom: 1px solid white;
  }

  .burger-menu {
    position: absolute;
    top: 32px;
    right: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .containeur {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .burger-menu span {
    width: 100%;
    height: 3px;
    background-color: #000000;
  }

  @media (min-width: 768px) {
    .burger-menu {
      display: none;
    }

    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      position: static;
      background-color: transparent;
      justify-content: space-around;
    }

    nav a {
      border: none;
    }
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: black;
    text-decoration: none;
  }

  .icon{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    text-align: center;
    padding: 32px;
  }
  .icone{
    font-size: 30px;
    cursor: pointer;
  }

  nav a.router-link-exact-active {
    color: red;
  }
  .icone{
    font-size: 30px;
    cursor: pointer;
    color: black;
  }

  .icone.router-link-exact-active{
    color: red;
  }
</style>