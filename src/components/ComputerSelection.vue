<template>
  <div>
    <h1>Computer Move</h1>
    <img
      v-if="computerMove == 'rock'"
      src="@/assets/rock.jpg"
      alt="Rock Selection"
    />
    <img
      v-if="computerMove == 'paper'"
      src="@/assets/paper.jpg"
      alt="Paper Selection"
    />
    <img
      v-if="computerMove == 'scissors'"
      src="@/assets/scissors.jpg"
      alt="Scissors Selection"
    />
  </div>
</template>

<script>
export default {
  computed: {
    computerMove() {
      return this.$store.state.computerMove;
    },
  },
};
</script>

<style scoped>
img {
  width: 263px;
}
</style>