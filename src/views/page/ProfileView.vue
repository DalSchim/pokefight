<script>
export default {
  name: "ProfileView",

}
</script>

<template>
  <!--- Profile dresseur pokemon  une image de profil une boite pour les padge et les information du dresseur non prenon age et genre-->
  <div class="profile">
    <div class="profile__header">
      <img src="@/assets/img/200px-Ludwig-NB.png" alt="profile" class="profile__header__image">
      <div class="profile__header__info">
        <h1 class="profile__header__info__name">Nom du dresseur</h1>
        <div class="profile__header__info__badges">
          <div class="profile__header__info__badges__badge">
            <img src="https://via.placeholder.com/50" alt="badge" class="profile__header__info__badges__badge__image">
          </div>
          <div class="profile__header__info__badges__badge">
            <img src="https://via.placeholder.com/50" alt="badge" class="profile__header__info__badges__badge__image">
          </div>
          <div class="profile__header__info__badges__badge">
            <img src="https://via.placeholder.com/50" alt="badge" class="profile__header__info__badges__badge__image">
          </div>
        </div>
      </div>
    </div>
    <div class="profile__content">
      <div class="profile__content__info">
        <div class="profile__content__info__item">
          <h2 class="profile__content__info__item__title">Age</h2>
          <p class="profile__content__info__item__value">20</p>
        </div>
        <div class="profile__content__info__item">
          <h2 class="profile__content__info__item__title">Genre</h2>
          <p class="profile__content__info__item__value">Homme</p>
        </div>
      </div>
    </div>
  </div>

  <!--- Liste des pokemons du dresseur -->
  <div class="pokemon-list">
    <div class="pokemon-list__item">
      <img src="https://via.placeholder.com/150" alt="pokemon" class="pokemon-list__item__image">
      <h2 class="pokemon-list__item__name">Pikachu</h2>
    </div>
    <div class="pokemon-list__item">
      <img src="https://via.placeholder.com/150" alt="pokemon" class="pokemon-list__item__image">
      <h2 class="pokemon-list__item__name">Bulbizarre</h2>
    </div>
    <div class="pokemon-list__item">
      <img src="https://via.placeholder.com/150" alt="pokemon" class="pokemon-list__item__image">
      <h2 class="pokemon-list__item__name">Salamèche</h2>
    </div>
  </div>


</template>
<style scoped lang="scss">
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  .profile__header {
    display: flex;
    align-items: center;
    .profile__header__image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 20px;
      object-fit: cover;
      object-position: top;
      box-shadow:  0 0 10px rgba(0, 0, 0, 0.1);
    }
    .profile__header__info {
      display: flex;
      flex-direction: column;
      .profile__header__info__name {
        font-size: 24px;
        margin: 0;
      }
      .profile__header__info__badges {
        display: flex;
        .profile__header__info__badges__badge {
          margin-right: 10px;
          .profile__header__info__badges__badge__image {
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
  .profile__content {
    display: flex;
    .profile__content__info {
      display: flex;
      .profile__content__info__item {
        margin-right: 20px;
        .profile__content__info__item__title {
          font-size: 18px;
          margin: 0;
        }
        .profile__content__info__item__value {
          font-size: 16px;
          margin: 0;
        }
      }
    }
  }
}

.pokemon-list {
  display: flex;
  .pokemon-list__item {
    margin-right: 20px;
    .pokemon-list__item__image {
      width: 150px;
      height: 150px;
    }
    .pokemon-list__item__name {
      font-size: 24px;
      margin: 0;
    }
  }
}
</style>
