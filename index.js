const TelegramBot = require("node-telegram-bot-api");

// BOT_TOKEN Render Environment Variable se aayega
const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {
  polling: true,
});

// /start command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "👋 Welcome!\n\nBot online hai aur welcome system active hai."
  );
});

// New member joined group
bot.on("new_chat_members", async (msg) => {
  const chatId = msg.chat.id;

  for (const member of msg.new_chat_members) {
    const name = member.first_name || "Friend";

    await bot.sendMessage(
      chatId,
      `🎉 Welcome ${name}!\n\nGroup me aapka swagat hai.`
    );
  }
});

console.log("✅ Bot Started...");
