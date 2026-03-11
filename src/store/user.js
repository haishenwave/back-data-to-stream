import { reactive } from 'vue'
import { accounts } from '@/data/accounts.js'

function restoreSession() {
  try {
    const saved = sessionStorage.getItem('leapstream_account')
    return saved ? JSON.parse(saved) : null
  } catch {
    return null
  }
}

export const userStore = reactive({
  currentAccount: restoreSession(),

  get isLoggedIn() {
    return !!this.currentAccount
  },

  login(username, password) {
    const account = accounts.find(
      a => a.credentials.username === username && a.credentials.password === password
    )
    if (account) {
      this.currentAccount = account
      sessionStorage.setItem('leapstream_account', JSON.stringify(account))
      return true
    }
    return false
  },

  logout() {
    this.currentAccount = null
    sessionStorage.removeItem('leapstream_account')
  },
})
