<script>
import PlayeurComponent from "@/components/PlayeurComponent.vue";

export default {
  name: "BattleStageView",
  components: {PlayeurComponent}
}
</script>

<template>
  <section>
    <div class="stage">
      <div class="player-postion-left">
        <playeur-component/>
      </div>
      <div class=" player-postion-right">
        <playeur-component/>
      </div>
    </div>
    <audio src="/arena.mp3" autoplay></audio>
  </section>
</template>

<style scoped lang="scss">

.stage {
  position: relative;
  height: 95vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(../../assets/img/arenae.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.player-postion-left {
  position: absolute;
  bottom: 32px;
  left: 32px;
}

.player-postion-right {
  position: absolute;
  top: 70px;
  right: 32px;

}

</style>