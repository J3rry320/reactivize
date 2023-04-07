const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");
const handlebars = require("handlebars");
const winston = require("winston");

// Set up the Winston logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      const colors = { info: "blue", warn: "yellow", error: "red" };
      const color = colors[level] || "white";
      const emojis = { info: "🚀", warn: "🤔", error: "😱" };
      const emoji = emojis[level] || "📝";
      return `[${timestamp}] ${emoji} ${level.toUpperCase()} ${message} ${emoji}`;
    })
  ),
  transports: [new winston.transports.Console()],
});

async function generateProject(projectName, projectConfig) {
  const projectDir = path.join(process.cwd(), projectName);

  const templateDir = path.join(
    __dirname,

    "templates",
    projectConfig.useTypeScript ? "ts" : "js"
  );

  logger.info(`Let's make ${projectName} great again, folks!`);

  try {
    logger.info(`Creating the ${projectName} project directory...`);
    await fs.mkdir(projectDir);
    logger.info(
      `Bigly success! We created the ${projectName} project directory.`
    );
  } catch (err) {
    logger.error(`SAD! Couldn't create the project directory: ${err}`);
    return;
  }

  try {
    logger.info("Copying the most tremendous template files...");
    await fs.copy(templateDir, projectDir);
    logger.info("Believe me, we copied the template files successfully!");
    logger.info(`Template directory: ${templateDir}`);
    logger.info(`Project directory: ${projectDir}`);
  } catch (err) {
    logger.error(
      `Can't copy the templates, folks! Something went wrong: ${err}. Belive Me! Mexico will pay for this`
    );
    return;
  }

  logger.info("Processing the best templates, trust me...");
  logger.info(`Template directory: ${templateDir}`);
  await processTemplates(projectDir, { projectName, ...projectConfig });

  try {
    logger.info(
      "Installing some tremendous dependencies, you won't believe it..."
    );
    execSync(`cd ${projectName} && npm install`, {
      stdio: "inherit",
    });
    logger.info(`All the dependencies were installed bigly, believe me!`);
  } catch (err) {
    logger.error(`Folks, we've got a problem with the dependencies: ${err}`);
    return;
  }

  logger.info(`We did it, folks! ${projectName} is a beautiful project.`);
  logger.info("Thanks for using our generator, you have a very big brain!");
}
async function processTemplates(dir, data) {
  const files = await fs.readdir(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    const stat = await fs.stat(filepath);
    if (stat.isDirectory()) {
      await processTemplates(filepath, data);
    } else if (file.endsWith(".hbs")) {
      try {
        const content = await fs.readFile(filepath, "utf8");
        const template = handlebars.compile(content);
        const result = template(data);
        const outputPath = filepath.replace(".hbs", "");
        await fs.writeFile(outputPath, result, "utf8");
        await fs.unlink(filepath);
      } catch (err) {
        logger.warn(
          `Something went wrong with '${file}' template, but don't worry, we'll fix it and Mexico will pay for it! Error: ${err}`
        );
      }
    } else {
      logger.info(`Found a non-template file: ${filepath}`);
    }
  }
}

module.exports = { generateProject };
