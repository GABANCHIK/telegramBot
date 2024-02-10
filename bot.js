const { Telegraf, Markup, session } = require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use(session({ defaultSession: () => ({}) }));
const text = require('./const');
let CurrentLang = "UK";
let user;

class Player {
    constructor(username) {
        this.name = username || 'guest';
        this.score = 0;
    }
}


bot.start(async (ctx) => {
    user = new Player(ctx.message.from.username);
    await ctx.replyWithHTML(`${text.functions.sayHi[CurrentLang]() || 'Unknown language'} ${ctx.message.from.first_name ? ctx.message.from.first_name : "таінствений незнакомец"}!!!`);
    startLanguage(ctx);
});

async function startLanguage(ctx) {
    try {
        return await ctx.replyWithHTML(`<b>${text.object.chooseText[CurrentLang] || "Unknown language"}</b>`, Markup.inlineKeyboard(
            [
                [Markup.button.callback('Українська 🇺🇦', 'btn_1'), Markup.button.callback('English 🇬🇧', 'btn_2')],
            ]
        ))
    } catch (e) {
        console.error(e);
    }
}

bot.help((ctx) => {
    ctx.reply(`${text.object.commands[CurrentLang] || "Unknown language"}`);
});

bot.command('language', (ctx) => {
    startLanguage(ctx);
});

bot.command('games', (ctx) => {
    try {
        ctx.replyWithHTML(`<b>${text.object.games.chooseGame[CurrentLang] || 'Unknown language'}</b>`, Markup.inlineKeyboard(
            [
                [Markup.button.callback(`${text.object.games.gameName[CurrentLang]}`, 'games_btn_1')],
                [Markup.button.callback('В розробці', 'games_btn_2')],
                [Markup.button.callback('В розробці', 'games_btn_3')]
            ]
        ));
    } catch (e) {
        console.error(e);
    }
})

async function sendDigits(ctx) {
    ctx.answerCbQuery();
    await ctx.replyWithHTML(`<b>${text.object.games.chooseNumber[CurrentLang] || 'Unknown language'}</b>`);
    await ctx.replyWithHTML(`<b>${text.object.games.gameStarted[CurrentLang] || 'Unknown language'}</b>`, Markup.inlineKeyboard(
        [
            [Markup.button.callback('7', '7'), Markup.button.callback('8', '8'), Markup.button.callback('9', '9')],
            [Markup.button.callback('4', '4'), Markup.button.callback('5', '5'), Markup.button.callback('6', '6')],
            [Markup.button.callback('1', '1'), Markup.button.callback('2', '2'), Markup.button.callback('3', '3')],
            [Markup.button.callback('0', '0')],
        ]
    ));
}

function handleGuessGame(name) {
    try {
        bot.action(name, (ctx) => {
            sendDigits(ctx);
            const PLAY_AGAIN = Markup.inlineKeyboard(
                [
                    [Markup.button.callback(`${text.object.games.gameAgain[CurrentLang] || 'Unknown language'} `, 'btn_again')]
                ]
            );
            bot.action(text.object.gameButtons, ctx => {
                let messageID = ctx.callbackQuery.message.message_id;
                let chatID = ctx.callbackQuery.message.chat.id;
                if (Math.floor(Math.random() * 10) == ctx.callbackQuery.data) {
                    ctx.reply(`${text.object.games.gameWin[CurrentLang]}`, PLAY_AGAIN);
                    user.score++;
                } else {
                    ctx.reply(`${text.object.games.gameLose[CurrentLang]}`, PLAY_AGAIN);
                }
                bot.telegram.deleteMessage(chatID, messageID - 1);
                bot.telegram.deleteMessage(chatID, messageID);
                setTimeout(() => {
                    bot.telegram.deleteMessage(chatID, messageID + 1);
                }, 5000);
            })
            bot.action('btn_again', ctx => sendDigits(ctx));
        })
    } catch (e) {
        console.error(e);
    }
}

bot.command('leaderboard', (ctx) => {
    text.object.games.gameLeaderboard[user.name] = user.score;
    generateLeaderBoardText(ctx);
});


function generateLeaderBoardText(ctx) {
    try {
        let obj = text.functions.handleLeaderboard();
        let leaderboardText = `<b>${text.object.leadText[CurrentLang]}\n`;

        for (let i = 0; i < 10; i++) {
            leaderboardText += `${i + 1}. ${Object.keys(obj)[i]} — ${Object.values(obj)[i] + ' 💰'}\n`;
        }

        leaderboardText += `${text.object.currentScoreText[CurrentLang] + user.score + ' 💰'}</b>`;
        return ctx.replyWithHTML(leaderboardText);
    } catch (e) {
        console.error(e);
    }
}


bot.command('settings', (ctx) => {
    handleSettings(ctx);
});

function showSettings() {
    return `<b>
${text.object.settings[CurrentLang]}
${text.object.currentDate[CurrentLang] + text.functions.getTime(CurrentLang)}
${text.object.currentScoreText[CurrentLang] + user.score + " 💰"}
${text.object.userName[CurrentLang] + ' ' + user.name || "guest"}
${text.object.settingsLang[CurrentLang]}
    </b>`;
}


async function handleSettings(ctx) {
    const inlineKeyboard = {
        inline_keyboard: [
            [{ text: `${text.object.settingsChangeName[CurrentLang]}`, callback_data: 'stg_btn_1' }, { text: `${text.object.settingsChooseLang[CurrentLang]}`, callback_data: 'stg_btn_2' }],
        ]
    };
    const chatId = ctx.chat.id;
    const initialMessage = await ctx.reply(`${showSettings()}`, { reply_markup: inlineKeyboard, parse_mode: 'HTML' });
    const messageId = initialMessage.message_id;
    setInterval(() => {
        bot.telegram.editMessageText(chatId, messageId, null, `${showSettings()}`, { reply_markup: inlineKeyboard, parse_mode: 'HTML' });
    }, 1000);

    bot.action('stg_btn_1', (ctx) => {
        ctx.session.waitingForName = true;
        ctx.reply('Enter your name: ', { reply_markup: { force_reply: true } });
    });

    bot.action('stg_btn_2', ctx => {
        startLanguage(ctx);
    })
}

bot.command('KMN', ctx => {
    ctx.replyWithHTML(`<b>Choose your</b>`, Markup.inlineKeyboard(
        [
            [Markup.button.callback('🪨', 'rock'), Markup.button.callback('✂️', 'scissors'), Markup.button.callback('📰', 'paper')],
        ]
    ));
    bot.action(['rock','scissors','paper'],ctx => {
        console.log(ctx.from);
        console.log(ctx);
        bot.telegram.sendMessage()
    })
})


bot.on('message', async (ctx) => {
    try {
        if (!ctx.session.waitingForName || ctx.message.sticker) {
            await ctx.replyWithHTML(`<b>${text.object.messageFromUser[CurrentLang] || 'Unknown language'}</b> 
<b>${text.functions.randMessage[CurrentLang]()}</b>`);
            await ctx.sendSticker(`${text.functions.randStickers()}`);
        } else {
            let oldName = user.name;
            user.name = ctx.message.text;
            delete text.object.games.gameLeaderboard[oldName];
            ctx.reply(`Name changed to: ${user.name}`);
            ctx.session.waitingForName = false;
        }
    } catch (e) {
        console.error(e);
    }
});



function handleAction(name, text) {
    bot.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery();
            await ctx.reply(text);

            CurrentLang = text.trim().slice(-4);
            switch (CurrentLang) {
                case "🇺🇦":
                    CurrentLang = "UK";
                    break;
                case "🇬🇧":
                    CurrentLang = "EN";
                    break;
                default:
                    break;
            }
        } catch (e) {
            console.error(e);
        }
    })
}
handleGuessGame('games_btn_1');

handleAction('btn_1', text.object.current_lang.UK);
handleAction('btn_2', text.object.current_lang.EN);


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

