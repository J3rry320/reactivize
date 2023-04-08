const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, prettyPrint } = format;

// Set up the Winston logger
const logger = createLogger({
  level: "info",
  format: combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      const emojis = {
        info: ["🚀", "👍🏻"],
        warn: ["🤔"],
        error: ["😱"],
      };
      const emojiArray = emojis[level] || [];
      const emoji =
        emojiArray[Math.floor(Math.random() * emojiArray.length)] || "";
      return `[${timestamp}] ${level.toUpperCase()} ${message} ${emoji}`;
    }),
    prettyPrint()
  ),
  transports: [new transports.Console()],
});

module.exports = logger;
