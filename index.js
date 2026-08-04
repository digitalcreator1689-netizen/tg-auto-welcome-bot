const TelegramBot = require("node-telegram-bot-api");

// Render Environment Variable se token lega
const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  await bot.sendMessage(
    chatId,
    "🎉 Welcome!\n\nAapka swagat hai.\nVideo, APK aur baaki message agle step me add karenge."
  );
});

console.log("Bot Started...");
