//OBJECTS
const object = {
    gameButtons: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    commands: {
        'UK':
            `
✅ ЩО ВМІЄ БОТ ✅
/start — Перезапустити бота
/help — Допомога
/language — Вибір мови
/leaderboard — Дошка лідерів
/settings — Налаштування
/games — Ігри
        `,
        'EN':
            `
✅ WHAT THE BOT CAN DO ✅
/start — Restart the bot
/help — Navigation
/language — Select a language
/leaderboard — Leaderboard
/settings — Settings
/games — Games
        `
    },
    current_lang: {
        'UK':`Поточна мова — Українська 🇺🇦`,
        'EN':`Current language — English 🇬🇧`
    },
    hi: {
        'UK': [`Привіт`, `Здоров був`, `Васап`, `Ні Хао`, `Кууу`, `Вечір у хату`, `Привіт`, `Алоха`, `Конічіва`, `Здоровенькі були`, `Шалом`, `Добрий почонтек`, `Намасте`, `Як сямаєш нігер`, `Шо ти шляпа`, `Буенос тардес`],
        'EN': [`Hi`, `Hey`, `Greetings`, `Good day`, `Howdy`, `Hi there`, `Hello there`, `Salutations`, `What's up`, `How's it going`, `Hola`, `Bonjour`, `Ciao`, `Namaste`, `Aloha`]
    },
    chooseText: {
        'UK':`Оберіть вашу мову 👇`,
        'EN':`Choose your language 👇`
    },
    messageFromUser: {
        'UK':`❓❓❓ НЕВІДОМА КОМАНДА ❓❓❓`,
        'EN':`❓❓❓ UNKNOWN COMMAND ❓❓❓`
    },
    randomPhrases: {
'UK': ["Що ти чорт забирай верзеш..?", "Можеш казати мені знову, я не розумію твоєї мови...", "Мая твая не понімать...", "Я не могу понять сімпла...\nТо он хочет іграть..То он не хочет іграть\nЯ его не могу понять \nТобі не треба мене понімать\nТи вообще хто такой?\nХто ваще???", "Шо..?", "Ні, я розумію, я не найчарівніший і найприємніший BOT на світі, але щоб ніхто...", "Сомнітельно, ноо Okey", "Я не зрозумів тебе", "Чому це неможливо?\nЧому це не можливо тупий виродку?", "Як ти гадаєш?\nУневерсалі можуть існувати як сутності конкретних речей\nАбо вони є лише віддзеркаленням розуму\nУма-ума-ума-ума-ума\nАга, я теж так думаю", "Туя-туя-туя шо такое туя?🌲 \nТуя-туя-туя, да какого туя 🌲"],
'EN': ["What in heaven's name are you talking about", "Maya tvaya not understand...", "I can't understand the simple...\nSo he wants to play.\nSo he doesn't want to play... \nI can't understand him.. \nYou don't need to understand me... \nWho are you anyway?\nWhat...?", "No, I understand I'm not the most charming and pleasant BOT in the world, but no one. ...", "Doubtful, but okay", "I don't understand you", "Why is it impossible?\nWhy is it impossible you stupid bastard?", "What do you think? \nCan universals exist as entities of specific things, or are they just a reflection of the mind?\n Uma-uma-uma-uma-uma \nYeah, I think so too"],
    },
    randomStickers: {
        stikers:
            [
                "https://tlgrm.eu/_/stickers/e4d/0d1/e4d0d1cd-3c66-46b7-9ac6-0b897a81320a/20.webp",
                "https://tlgrm.eu/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/18.webp",
                "https://tlgrm.eu/_/stickers/e4d/0d1/e4d0d1cd-3c66-46b7-9ac6-0b897a81320a/28.webp",
                "https://tlgrm.eu/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/12.webp",
                "https://tlgrm.eu/_/stickers/ffb/53d/ffb53d6e-399a-48f2-b798-586605cbb536/4.webp"
            ]
    },
    leadText: {
        'UK':`🥇 ДОШКА ЛІДЕРІВ 🥇\n`,
        'EN':`🥇 LEADERBOARD 🥇\n`
    },
    currentScoreText: {
        'UK': `\nТВІЙ ПОТОЧНИЙ РАХУНОК:  `,
        'EN': `\nYOUR CURRENT SCORE:  `
    },
    games: {
        gameName: {
            'UK':`🔍 ГРА ВГАДАЙКА 🔍`,
            'EN':`🔍 GUESS GAME 🔍`
        },
        chooseGame: {
            'UK':`🎮 Виберіть гру 🎮`,
            'EN':`🎮 Choose a game 🎮`
        },
        chooseNumber: {
            'UK':`Загадаю цифру від 0 до 9... 🎲`,
            'EN':`I'll guess a number from 0 to 9... 🎲`
        },
        gameStarted: {
            'UK':`🏁 Починай відгадувати 🏁`,
            'EN':`🏁 Start guessing 🏁`
        },
        gameAgain: {
            'UK':`🔄 Зіграти знову 🔄`,
            'EN':`🔄 Play again 🔄`
        },
        gameLeaderboard: {
            "GABANCHIK": 88,
            "Simonchik 🥵": 78,
            "Suppleer": 52,
            "XeLip": 35,
            "Merio": 27,
            "VAN4OUS": 21,
            "SNIPER LOVE YOU": 12,
            "SON14KA": 9,
            "ADEKVAT": 5,
            "Pasha JavaScriptovich": 1
        },
        gameWin: {
            'UK':`Молодець, +1 💰`,
            'EN':`Well done, +1 💰`
        },
        gameLose: {
            'UK':`Невдача, спробуй ще 😞`,
            'EN':`Fail, try again 😞`
        }
    },
    currentDate: {
        'UK': `Поточний час : `,
        'EN': `Current time : `
    },
    settings: {
        'UK': `⚙️ НАЛАШТУВАННЯ ⚙️`,
        'EN': `⚙️ SETTINGS ⚙️`
    },
    userName: {
        'UK': `Ім'я користувача : `,
        'EN': `Username : `
    },
    settingsLang: {
        'UK': `Поточна мова : 🇺🇦`,
        'EN': `Current language : 🇬🇧`
    },
    settingsChangeName: {
        'UK': `Зміна імені 🔃`,
        'EN': `Change username 🔃`
    },
    settingsChooseLang: {
        'UK': `Вибір мови 🌎`,
        'EN': `Choose language 🌎`
    },
    options: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
    }
}


//FUNCTIONS
const functions = {
    sayHi: {
        'UK':
            function selectHiUkr() {
                let number = Math.floor(Math.random() * object.hi.UK.length);
                return [...object.hi.UK][number];
            },
        'EN':
            function selectHiEng() {
                let number = Math.floor(Math.random() * object.hi.EN.length);
                return [...object.hi.EN][number];
            }
    },
    randMessage: {
        'UK':
            function selectRandMessage() {
                let response = Math.floor(Math.random() * object.randomPhrases.UK.length);
                return object.randomPhrases.UK[response];
            },
        'EN':
            function selectRandMessage() {
                let response = Math.floor(Math.random() * object.randomPhrases.EN.length);
                return object.randomPhrases.EN[response];
            }
    },
    randStickers: function () {
        let response = Math.floor(Math.random() * object.randomStickers.stikers.length);
        return object.randomStickers.stikers[response];
    },
    getTime: function (lang) {
        return new Date().toLocaleTimeString(`${lang}`, object.options);
    },
    handleLeaderboard: function () {
        try {
            let array = Object.entries(object.games.gameLeaderboard);
            array.sort((x, y) => y[1] - x[1]);
            let sortedObject = {};
            array.forEach(([key, value]) => {
                sortedObject[key] = value;
            });
            return sortedObject;
        } catch (e) {
            console.error(e);
        }
    }
    

}


module.exports.object = object;
module.exports.functions = functions;