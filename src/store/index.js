import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playMove: undefined,
    computerMove: undefined,
    wins: 0,
    losses: 0,
    ties: 0
  },
  mutations: {
    playerSelection: function (context, move) {
      let compNum = Math.random()
      let compMove = 'rock'
      if (compNum > 0.66) {
        compMove = 'paper'
      } else if (compNum > 0.33) {
        compMove = 'scissors'
      }

      context.playMove = move
      context.computerMove = compMove

      if (move == 'rock') {
        if (compMove == 'paper') {
          context.losses++
        } else if (compMove == 'scissors') {
          context.wins++
        } else {
          context.ties++
        }
      } else if (move == 'paper') {
        if (compMove == 'scissors') {
          context.losses++
        } else if (compMove == 'rock') {
          context.wins++
        } else {
          context.ties++
        }
      } else if (move == 'scissors') {
        if (compMove == 'rock') {
          context.losses++
        } else if (compMove == 'paper') {
          context.wins++
        } else {
          context.ties++
        }
      } else {
        console.log("Invalid player selection!")
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
