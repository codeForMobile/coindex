const KeyManager = require('../lib/KeyManager')
const CryptoAPIClass = require('../lib/CryptoAPI')

const check = {
 async price(cmd) {
    //console.log(cmd.coin, cmd.cur)
    try {
      keyManager = new KeyManager()
      const key = keyManager.getKey()

      const api = new CryptoAPIClass(key);

      const priceData = await api.getPriceData(cmd.coin, cmd.cur)

      console.log(priceData)
    } catch (error) {
      console.error(error.red)
    }
  }
}

module.exports = check