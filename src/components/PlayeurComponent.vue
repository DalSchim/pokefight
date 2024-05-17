<script>
export default {
  name: "PlayeurComponent"
}
</script>

<template>
  <!-- affichhage d'u joueur dans la page view battle stage-->
  <div class="player">
    <div>

      <div class="pokemon-stat">
        <div class="name">
          <h2 class="pokemon-name">pidgetto</h2>
          <span>Lv.50</span>
        </div>
        <div class="HpBarContainer">
          <div class="HpBar">
          </div>
        </div>
      </div>

      <div class="player-pokemon">
        <img src="@/assets/img/Pokeball-PNG-HD-Image.png" alt="pidgeotto">
      </div>
      <div class="decoration-garss">
        <svg width="892" height="156" viewBox="0 0 892 156" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M889.5 78C889.5 82.3435 886.99 86.9691 881.315 91.8192C875.658 96.6535 867.167 101.432 855.996 106.051C833.674 115.28 801.224 123.646 760.939 130.692C680.41 144.775 569.061 153.5 446 153.5C322.939 153.5 211.59 144.775 131.061 130.692C90.7762 123.646 58.3255 115.28 36.0042 106.051C24.8325 101.432 16.3418 96.6535 10.6854 91.8192C5.01041 86.9691 2.5 82.3435 2.5 78C2.5 73.6565 5.01041 69.0309 10.6854 64.1808C16.3418 59.3465 24.8325 54.5684 36.0042 49.9492C58.3255 40.7197 90.7762 32.3536 131.061 25.3083C211.59 11.2247 322.939 2.5 446 2.5C569.061 2.5 680.41 11.2247 760.939 25.3083C801.224 32.3536 833.674 40.7197 855.996 49.9492C867.167 54.5684 875.658 59.3465 881.315 64.1808C886.99 69.0309 889.5 73.6565 889.5 78Z" fill="url(#paint0_radial_13_2)" stroke="white" stroke-width="5"/>
          <defs>
            <radialGradient id="paint0_radial_13_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(446 78) scale(446 78)">
              <stop stop-color="#8BCF8D"/>
              <stop offset="0.505" stop-color="#8BCF8D"/>
              <stop offset="1" stop-color="#5E8160"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .player{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
  }
  .pokemon-stat{
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    background: #2c3e50;
    padding: 10px;
    border-radius: 8px;
  }
  .name{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    span{
      font-size: 1.5rem;
      color: white;
    }
  }
  .pokemon-name{
    font-size: 1.5rem;
    color: white;
  }
  .HpBarContainer{
    width: 200px;
    height: 20px;
    background-color: black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .HpBar{
    width: 100%;
    height: 100%;
    background-color: red;
    border-radius: 10px;
  }
  .player-pokemon{
    position: relative;
    z-index: 1;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .decoration-garss{
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
  }
  svg{
    width: 100%;
    height: 100%;
  }

</style>