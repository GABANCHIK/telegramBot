const { Telegraf, Markup, session } = require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);
// Хранение информации о созданных комнатах и их участниках
const rooms = {};

bot.command('game', ctx => {
    let userID = ctx.from.id;
    let playerOneID;
    let playerTwoID;
    ctx.reply('Choose your game', Markup.inlineKeyboard(
        [Markup.button.callback('gameOne','game_one')]
    ));
    bot.action('game_one', ctx => {
        ctx.reply('Choose move', Markup.inlineKeyboard(
            [Markup.button.callback('Create room','create'), Markup.button.callback('Join room','join')]
        ));
    })
    bot.action('create', ctx => {
        let roomID = (userID + `${Math.random().toString(36).substr(2, 6)}`);
        rooms[roomID] = userID;
        ctx.reply('Your room is ready' + roomID);
        console.log(ctx.chat.id);
        playerOneID = ctx.chat.id;
        console.log('/////////////////////////////');
    })
    bot.action('join', ctx => {
        playerTwoID = ctx.chat.id;
        if(userID == playerTwoID) {
            ctx.reply('ERROR U CANT PLAY WITH YOURSELF');
        } else {
            ctx.reply('Enter your friend room-code: ', Markup.forceReply());
            bot.telegram.sendMessage(playerOneID,'Player two sucsesfully joined to your game');
        }
    })
})


// bot.command('game', (ctx) => {
//     const userId = ctx.from.id;
//     const roomId = `${Math.random().toString(36).substr(2, 6)}`;
//     rooms[roomId] = [userId];

//     ctx.reply(`Комната создана. Поделитесь этим кодом с вашим другом для присоединения: ${roomId}`, Markup.inlineKeyboard([
//         Markup.button.callback('Камень', 'rock'),
//         Markup.button.callback('Ножницы', 'scissors'),
//         Markup.button.callback('Бумага', 'paper')
//     ]))
//     console.log(rooms);
// });

// Обработчик команды для присоединения к комнате
// bot.command('join', (ctx) => {
//     const userId = ctx.from.id;
//     console.log(ctx.message);
//     const [command, roomId] = ctx.message.text.split(' ');
//     console.log(command,roomId)

//     // // Проверка наличия комнаты и свободных мест
//     // if (rooms[roomId] && rooms[roomId].length < 2) {
//     //     rooms[roomId].push(userId);
//     //     ctx.reply('Вы присоединились к комнате. Игра начинается!', Markup.inlineKeyboard([
//     //         Markup.button.callback('Камень', 'rock'),
//     //         Markup.button.callback('Ножницы', 'scissors'),
//     //         Markup.button.callback('Бумага', 'paper')
//     //     ]))
//     //     // Здесь можно начать игру для участников комнаты
//     // } else {
//     //     ctx.reply('Комната не существует или уже заполнена.');
//     // }
// });


bot.launch();