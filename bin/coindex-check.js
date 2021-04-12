const program = require('commander')
const check = require('../commands/check')

program
  .command('price')
  .description('price description')
  .option('--coin <type>', 'Add specific type from BTC,ETH,XRP', 'BTC,ETH,XRP')
  .option('--cur <currency>', 'select your currency', 'USD')
  .action((cmd) => check.price(cmd))

program.parse(process.argv)