<script>
export default {
  name: "ProfileView"
}
</script>

<template>
<section>
  <div class="containeur">
    <div class="profil">
      <div class="profil-image">
        <img src="@/assets/img/Pokeball-PNG-HD-Image.png" alt="">
      </div>
      <div class="boite-Badge">
        <div><img src="" alt=""></div>
        <div><img src="" alt=""></div>
        <div><img src="" alt=""></div>
        <div><img src="" alt=""></div>
        <div><img src="" alt=""></div>
        <div><img src="" alt=""></div>
        <div><img src="" alt=""></div>
        <div><img src="" alt=""></div>
      </div>
    </div>
    <div class="information-utilisateur">
      <div class="info">
        <span>nom: </span>
        <span>email: </span>
        <span>date de naissance: </span>
        <span>nombre de pokemons: </span>
      </div>
    </div>
  </div>
  <!-- liste des pokemons du dresseur -->


</section>
</template>

<style scoped lang="scss">
.containeur{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 80vh;

  .profil{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #f5f5f5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 100%;

    .profil-image{
      width: 400px;
      height: 400px;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .boite-Badge{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
      margin-top: 10px;
      background: #2c3e50;
      height: 100%;
      width: 100%;
      padding: 10px;
      border-radius: 10px;

      div{
        width: 120px;
        height: 120px;
        border-radius: 10px;
        background: #f5f5f5;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .information-utilisateur{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    background: #f5f5f5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    .info{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px;
      border-radius: 10px;
      background: #f5f5f5;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

      span{
        margin: 5px;
      }
    }
  }
}



</style>