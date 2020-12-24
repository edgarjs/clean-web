export default {
  getItem (key) {
    const item = localStorage.getItem(key)
    if (!item) return item

    return JSON.parse(item)
  },

  putItem (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },

  deleteItem (key) {
    localStorage.removeItem(key)
  }
}
