const TelegramBot = require('node-telegram-bot-api');
// import TelegramBot from 'node-telegram-bot-api';

const token = '5042659957:AAGtr-sCyrbRrUw4ExdKV6CXm2W4ZdMS0hc'

const bot = new TelegramBot(token, {polling: true});

const chat_id = '-772708022'

function objToString (obj) {
  var str = '';
  for (var p in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, p)) {
          str += `*${p}* \n${obj[p]} \n\n`
      }
  }
  return str;
}

export default function handler(req, res) {
  const body = JSON.parse(req.body);
  const solution = body.solution
  const b = JSON.stringify({
    solution,
    secret: 'A1O0THA4GP2JD0SU3VQB23JQO8KTGLOB5BK09HQP0ERULF6SV39JLMVA7Q',
    sitekey: 'FCMS9L5U25GTQ7FH',
  })
  fetch('https://api.friendlycaptcha.com/api/v1/siteverify', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: b,
  })
  .then((r) => r.json())
  .then((json) => {
    if (json && json.success){
      // bot.sendMessage(chat_id, '*☭☭☭ A new comrade has arrived ☭☭☭*', { parse_mode: 'MarkdownV2'})
      const m = body
      delete m.solution
      bot.sendMessage(chat_id, `*☭☭☭ A new comrade has arrived ☭☭☭* \n\n${objToString(body)}`, { parse_mode: 'Markdown'});
      res.status(200).json({ success: true })
    }
    res.status(400).json({ message: 'No captcha provided' })
  })
}