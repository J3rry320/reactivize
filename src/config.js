const personality = [
  "shakespeare",
  "conservative",
  "liberal",
  "africanAmerican",
  "baseballPlayer",
  "gigaChad",
  "karen",
  "pirate",
  "alien",
  "easternEuropean",
  "mexican",
];
const messageConfig = {
  createProject: {
    shakespeare: `Forsooth, we shall commence the creation of ${projectName} 🎭.`,
    conservative: `Let's make ${projectName} great again, folks! 🇺🇸`,
    liberal: `Together, we'll build an inclusive and sustainable ${projectName} 🌎.`,
    africanAmerican: `Aight, let's get this ${projectName} party started! 🎉`,
    baseballPlayer: `Step up to the plate, it's time to create ${projectName}! ⚾`,
    gigaChad: `Time to flex our coding muscles and create ${projectName}! 💪`,
    karen: `Excuse me, but I demand the creation of ${projectName} right now. 😤`,
    pirate: `Arr, matey! Let's set sail and create ${projectName}! 🏴‍☠️`,
    alien: `Greetings, Earthling. We shall now create ${projectName}. 👽`,
    easternEuropean: `Time to build strong ${projectName}, comrade. 💪`,
    mexican: `Let's create the amazing ${projectName} project, amigos! 🇲🇽`,
  },
  copyTemplates: {
    shakespeare: `Verily, we shall duplicate the finest templates 🎭.`,
    conservative: `Copying the most tremendous template files... 🇺🇸`,
    liberal: `Replicating templates that promote equality and sustainability... 🌎`,
    africanAmerican: `Aight, let's duplicate those cool templates! 🎉`,
    baseballPlayer: `Swing batter, batter! Copying them templates! ⚾`,
    gigaChad: `Time to effortlessly copy those template files 💪.`,
    karen: `I want those templates copied, and I want them now! 😤`,
    pirate: `Yarr, me hearties! We be copyin' the finest templates. 🏴‍☠️`,
    alien: `Commencing duplication of superior Earth templates. 👽`,
    easternEuropean: `Strong templates, we copy for ${projectName}. 💪`,
    mexican: `Copying the best templates for our ${projectName}, my friends! 🇲🇽`,
  },
  installDependencies: {
    shakespeare: `Now, we shall summon the finest dependencies 🎭.`,
    conservative: `Installing some tremendous dependencies, you won't believe it... 🇺🇸`,
    liberal: `Procuring eco-friendly and diverse dependencies... 🌎`,
    africanAmerican: `Aight, let's grab those awesome dependencies! 🎉`,
    baseballPlayer: `Load the bases with top-notch dependencies! ⚾`,
    gigaChad: `Time to acquire the strongest dependencies out there. 💪`,
    karen: `I expect the best dependencies, and I expect them now! 😤`,
    pirate: `Arr, we be summonin' the heartiest dependencies, me hearties! 🏴‍☠️`,
    alien: `Integrating Earth's finest dependencies. 👽`,
    easternEuropean: `Dependencies for strong ${projectName}, we install. 💪`,
    mexican: `Getting the most amazing dependencies for our ${projectName}! 🇲🇽`,
  },
  success: {
    shakespeare: `By my troth, ${projectName} has been splendidly created 🎭.`,
    conservative: `We did it, folks! ${projectName} is a beautiful project 🇺🇸.`,
    liberal: `Our collective effort has made ${projectName} a beacon of progress 🌎.`,
    africanAmerican: `Aight, we did it! ${projectName} is ready to roll! 🎉`,
    baseballPlayer: `Home run! ${projectName} is a winning project! ⚾`,
    gigaChad: `Mission accomplished! ${projectName} is as awesome as we are 💪.`,
    karen: `Finally, ${projectName} is done. It better be good 😤.`,
    pirate: `Yarr, me hearties! We be done with ${projectName} creation 🏴‍☠️.`,
    alien: `Success! The Earthling project ${projectName} is complete 👽.`,
    easternEuropean: `${projectName} is now strong like us, comrade 💪.`,
    mexican: `¡Excelente! We created the fantastic ${projectName}, amigos! 🇲🇽`,
  },
  error: {
    shakespeare: `Alas! An error hath occurred: ${err} 😞.`,
    conservative: `SAD! Something went wrong: ${err} 😔.`,
    liberal: `Unfortunately, we've encountered a setback: ${err} 😕.`,
    africanAmerican: `Dang, something went wrong: ${err} 😓.`,
    baseballPlayer: `Bummer! We struck out: ${err} 😖.`,
    gigaChad: `No worries, just a little hiccup: ${err} 😉.`,
    karen: `This is unacceptable! Fix this error: ${err} 😠.`,
    pirate: `Arrr, matey! We hit a snag: ${err} 🏴‍☠️.`,
    alien: `Cosmic disturbance! We encountered an error: ${err} 👽.`,
    easternEuropean: `Oh no, comrade! We have problem: ${err} 😬.`,
    mexican: `¡Ay, caramba! Something went wrong: ${err} 😩.`,
  },
};
module.exports = { messageConfig, personality };
