<script>
export default {
  name: 'LoginRegisterView',
  components: {},
  methods: {
    login() {
      //si le login et le mot de passe sont correct alors on peut se connecter et on reveois avec vue router sur la page /home
      if (this.L_username === this.logine && this.L_password === this.passworda) {
        this.$router.push('/home')
      } else {
        console.log('login or password incorrect')
        this.error = 'login or password incorrect'
      }
    },


    register() {
     //si le mot de passe est sécurisé alors on peut s'inscrire sinon on affiche un message d'erreur
      if (this.checkPassword()) {
        console.log('password secure')
      } else {
        console.log('password not secure')
      }

    },
    /*verifcation des champs et de la securisation du mot de passe si il y a des majuscule et des chiffre*/
    checkPassword() {
      let password = this.password;
      let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
      return regex.test(password);
    }
  },
  data() {
    return {
      logine:'admin',
      passworda:'admin',
      username: '',
      password: '',
      L_username: '',
      L_password: '',
      error: '',
    }
  }


}


</script>

<template>
  <div class="container">
    <div class="logo">
      <svg width="166" height="166" viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="83" cy="83" r="77.5" fill="#D9D9D9" stroke="black" stroke-width="11"/>
        <path
            d="M155 86.5C155 104.667 147.414 122.091 133.912 134.937C120.409 147.783 102.096 155 83 155C63.9044 155 45.5909 147.783 32.0883 134.937C18.5857 122.091 11 104.667 11 86.5L83 86.5L155 86.5Z"
            fill="white"/>
        <path
            d="M155 74.5C155 57.1283 147.414 40.4681 133.912 28.1845C120.409 15.9009 102.096 9 83 9C63.9044 9 45.5909 15.9009 32.0883 28.1845C18.5857 40.4681 11 57.1283 11 74.5L83 74.5L155 74.5Z"
            fill="#B90000"/>
        <rect x="11" y="74" width="144" height="17" fill="black"/>
        <circle cx="83.5" cy="82.5" r="25.5" fill="black"/>
        <circle cx="83.5" cy="82.5" r="19.5" fill="white"/>
        <circle cx="84" cy="83" r="11.5" fill="white" stroke="black" stroke-width="3"/>
      </svg>
    </div>

    <div class="login-container">
      <input id="item-1" type="radio" name="item" class="sign-in" checked><label for="item-1" class="item">Login</label>
      <input id="item-2" type="radio" name="item" class="sign-up"><label for="item-2" class="item">Register</label>
      <div class="login-form">
        <div class="sign-in-htm">
          <form method="get" @submit.prevent="login()">
            <div class="group">
              <input placeholder="Username"  type="text" class="input"
                     v-model="L_username"
              >
            </div>
            <div class="group">
              <input placeholder="Password" type="password" class="input"
                     v-model="L_password"
              >
            </div>
            <div class="group">
              <button class="button">Login</button>
            </div>
          </form>
          <div class="hr"></div>
          <div class="footer">
            {{ error }}
          </div>
        </div>


        <div class="sign-up-htm" @submit.prevent="register()">
          <form method="get">
            <div class="group">
              <input placeholder="Username" id="user" type="text" class="input"
                      v-model="username"
                      ref="username"
              >
            </div>
            <div class="group">
              <input placeholder="Password" id="passe" type="password" class="input"
                     v-model=" password"
                     ref="password"
              >
            </div>
            <div class="group">
              <select name="Genre" id="role" class="input">
                <option value="Homme">Admin</option>
                <option value="Femme">User</option>
              </select>
            </div>

            <div class="group">
              <button class="button">Register</button>
            </div>
            <div class="hr"></div>
            <div class="footer">
              <p v-if="!checkPassword()" style="color: red" >Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre</p>
              <p v-else>
                Le mot de passe est sécurisé
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>
<style scoped lang="scss">
/* pokemon style*/
body {
  margin: 0;
  color: #ffffff;
  background: #ffffff;
  font-family: 'Montserrat', monospace;
  font-weight: bold;
}

*,
:after,
:before {
  box-sizing: border-box
}

.clearfix:after,
.clearfix:before {
  content: '';

}

.clearfix:after {
  clear: both;
  display: block
}

a {
  color: inherit;
  text-decoration: none
}

.container {
  width: 100%;
  margin: auto;
  max-width: 525px;
  height: 70vh;
  position: relative;
  background: #938f90;
  border-radius: 10px;

  .logo {
    position: relative;

    display: flex;
    justify-content: center;
    padding-top: 15px;
  }
}

.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 70px 50px 70px;
  background: #938f90;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.login-container .sign-in-htm,
.login-container .sign-up-htm {
  top: 30%;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all .4s linear;
}

.login-container .sign-up-htm {
  top: 20%;
}

.login-container .sign-in,
.login-container .sign-up,
.login-form .group .check {
  display: none;
}

.login-container .item,
.login-form .group .label,
.login-form .group .button {
  text-transform: uppercase;
}

.login-container .item {
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
  cursor: pointer;
}

.login-container .sign-in:checked + .item,
.login-container .sign-up:checked + .item {
  color: #fff;
  border-color: #FF0000FF;
}

.login-form {
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}

.login-form .group {
  margin-bottom: 15px;
}

.login-form .group .label,
.login-form .group .input,
.login-form .group .button {
  width: 100%;
  color: #fff;
  display: block;

  &::placeholder {
    color: whitesmoke;
  }


}

.button {
  cursor: pointer;
}

.login-form .group .input,
.login-form .group .button {
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
}


.login-form .group .label {
  color: #ffffff;
  font-size: 12px;
}


.login-form .group .check:checked + label {
  color: #fff;
}

.login-container .sign-in:checked + .item + .sign-up + .item + .login-form .sign-in-htm {
  transform: rotate(0);
}

.login-container .sign-up:checked + .item + .login-form .sign-up-htm {
  transform: rotate(0);
}

.hr {
  height: 2px;
  margin: 60px 0 50px 0;
  background: rgba(255, 255, 255, .2);
}

.footer {
  text-align: center;
}
</style>

