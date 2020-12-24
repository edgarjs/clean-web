export default function AuthRepo (storage) {
  return {
    storeAccessToken (token) {
      storage.putItem('accessToken', token)
    },

    accessToken (token) {
      return storage.getItem('accessToken')
    },
  }
}
