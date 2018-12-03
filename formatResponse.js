const chalk = require('chalk')

module.exports = function formatResponse(key, data){
    console.log(chalk.green(key) + chalk.blue(data))
}