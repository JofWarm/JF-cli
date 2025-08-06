import { reactive } from 'vue'

const store = {
  state: reactive({
    user: null
  }),

  login(user) {
    this.state.user = user
  },

  logout() {
    this.state.user = null
  }
}

export default store
