<script>
export default {
name: "welcomView"
}
</script>

<template>
  <div class="contenaire">
    <div class="poke-inf">
      <svg viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="83" cy="83" r="77.5" fill="#D9D9D9" stroke="black" stroke-width="11"/>
        <path d="M155 86.5C155 104.667 147.414 122.091 133.912 134.937C120.409 147.783 102.096 155 83 155C63.9044 155 45.5909 147.783 32.0883 134.937C18.5857 122.091 11 104.667 11 86.5L83 86.5L155 86.5Z" fill="white"/>
        <path d="M155 74.5C155 57.1283 147.414 40.4681 133.912 28.1845C120.409 15.9009 102.096 9 83 9C63.9044 9 45.5909 15.9009 32.0883 28.1845C18.5857 40.4681 11 57.1283 11 74.5L83 74.5L155 74.5Z" fill="#B90000"/>
        <rect x="11" y="74" width="144" height="17" fill="black"/>
        <circle cx="83.5" cy="82.5" r="25.5" fill="black"/>
        <circle cx="83.5" cy="82.5" r="19.5" fill="white"/>
        <circle cx="84" cy="83" r="11.5" fill="white" stroke="black" stroke-width="3"/>
      </svg>
      <div>
        <div class="starter">
          <img id="ia" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="">
          <img id="ib" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="">
          <img id="ic" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" alt="">
        </div>
        <nav>
          <router-link to="/profile"><div class="im1"><img src="@/assets/img/Pokeball-PNG-HD-Image.png" alt=""></div></router-link>
          <router-link to="/wait"><div class="im2"><img src="@/assets/img/Pokeball-PNG-HD-Image.png" alt=""></div></router-link>
          <router-link to="/PC"><div class="im3"><img src="@/assets/img/Pokeball-PNG-HD-Image.png" alt=""></div></router-link>
        </nav>
      </div>
      <h1>choose your road</h1>
    </div>
  </div>
 <audio src="/arena.mp3" autoplay></audio>
</template>

<style scoped lang="scss">
.contenaire{
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100wh;
  height: 100vh;
  padding: 8px;
  .poke-inf{
    border-radius: 23px;
    border: red solid 8px;
    flex-direction: column;
    background-color: #ffffff;
    max-width:80% ;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80%;

    svg{
      width: 128px;
      height: 128px;

    }
    a{
      color: black;
      text-decoration: none;
    }

    .im1{
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      &::after{
        content: "Profil";
      }
    }
    .im2{
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      &::after{
        content: "Fight";
      }
    }
    .im3{
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      &::after{
        content: "PC";

      }
    }
    .starter{
      gap: 32px;
      display: flex;
      justify-content: center;
      align-items:center ;
      img{
        width: 80px;
      }
    }

    nav{
      gap: 32px;
      display: flex;
      justify-content: center;
      align-items:center ;
      img{
        width: 80px;
      }
    }
  }
}
</style>