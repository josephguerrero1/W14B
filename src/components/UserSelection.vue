<template>
  <div>
    <h1>User Move</h1>
    <img
      v-if="playerMove == 'rock'"
      src="@/assets/rock.jpg"
      alt="Rock Selection"
    />
    <img
      v-if="playerMove == 'paper'"
      src="@/assets/paper.jpg"
      alt="Paper Selection"
    />
    <img
      v-if="playerMove == 'scissors'"
      src="@/assets/scissors.jpg"
      alt="Scissors Selection"
    />
  </div>
</template>

<script>
export default {
  computed: {
    playerMove() {
      return this.$store.state.playMove;
    },
  },
};
</script>

<style scoped>
img {
  width: 263px;
}
</style>