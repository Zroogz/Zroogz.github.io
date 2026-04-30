const fortunes = require('./fortunes.json')

const getFortune = () =>
  fortunes[Math.floor(Math.random() * fortunes.length)]

module.exports = getFortune