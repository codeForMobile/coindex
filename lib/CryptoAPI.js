const axios = require('axios')
const colors = require('colors')

class CryptoAPIClass {
  constructor(apiKey) {
    this.apiKey = apiKey
    this.baseURL = 'https://api.nomics.com/v1/currencies/ticker'
  }

  async getPriceData(coinOption, curOption) {
    try {
      const res = await axios.get(`${this.baseURL}?key=${this.apiKey}&ids=${coinOption}&interval=1d&convert=${curOption}`)
      let output = ''
      res.data.forEach(coin => {
        output +=`Coin : ${coin.symbol.yellow} (${coin.name}) | Price: ${coin.price.green} | Rank: ${coin.rank.blue} \n`;
      });
      return output;
    } catch (error) {
      //console.error(err)
      handleAPIError(error)
    }
  }
}

function handleAPIError(err) {
  if(err.response.status === 401) {
    throw new Error('Invalid key')
  }
}

module.exports = CryptoAPIClass;