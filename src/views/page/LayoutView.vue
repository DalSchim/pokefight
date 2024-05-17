<script>
import NavComponent from "@/components/NavComponent.vue";

export default {
  name: "LayoutView",
  components: {NavComponent}
}
</script>

<template>
  <NavComponent/>
  <router-view/>
</template>

<style scoped lang="scss">

</style>