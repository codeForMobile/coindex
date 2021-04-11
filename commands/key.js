const inquirer = require('inquirer')
const colors = require('colors')
const KeyManager = require('../lib/KeyManager')

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'key',
        message:'Enter api key'.green + ' nomics url'
      }
    ]);

    const key = keyManager.setKey(input.key)
    if(key) {
      console.log('API key set'.blue);
    }
  },
  show() {
    console.log('hello from show')
  },
  remove() {
    console.log('hello from remove')
  }
}

module.exports = key;