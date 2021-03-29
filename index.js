const { Telegraf } = require('telegraf')
const { getRandomFromRange } = require('./utils')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

const helpHandler = (ctx) =>
  ctx.reply(`
  Bot available commands:
    /hi - To say Hi!;
    /sticker - Reply on the sticker;
    /roll - Make your roll;
`)

bot.start((ctx) => ctx.reply('Welcome'))
bot.help(helpHandler)
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command('roll', (ctx) =>
  ctx.reply(
    `${ctx.message.from.username}, your roll is: ${getRandomFromRange(0, 100)}`
  )
)

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
