const Telegraf = require('telegraf')
const { getRandomFromRange } = require('./utils')

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('roll', (ctx) => ctx.reply(`${ctx.message.from.username}, your roll is: ${getRandomFromRange(0, 100)}`))

bot.launch()
