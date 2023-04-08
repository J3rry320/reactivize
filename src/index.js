const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");
const handlebars = require("handlebars");
const logger = require("./logger");
const { renderImage, renderText } = require("./artGenerator");
const { messageConfig, personality } = require("./config");
const choosenPersonality = Math.floor(Math.random() * (personality.length - 1));
function getRandomMessage(step) {
  const messages = messageConfig[step];

  return messages[personality[choosenPersonality]];
}

async function generateProject(projectName, projectConfig) {
  const projectDir = path.join(process.cwd(), projectName);
  const { useTypeScript, deployService, useRedux, useRouter } = projectConfig;

  // Set the appropriate deploy command based on the chosen deploy service
  let deployCommand = "";
  if (deployService) {
    switch (deployService.toLowerCase()) {
      case "heroku":
        deployCommand = "git push heroku master";
        break;
      case "netlify":
        deployCommand = "netlify deploy";
        break;
      case "github-pages":
        deployCommand = "gh-pages -d build";
        break;
      case "firebase":
        deployCommand = "firebase deploy";
        break;
      default:
        console.error(
          "Invalid deploy service. Supported services: heroku, netlify, github-pages, firebase"
        );
        process.exit(1);
    }
  }

  const templateDir = path.join(
    __dirname,
    "templates",
    useTypeScript ? "ts" : "js"
  );

  logger.info(`Let's make ${projectName} great again, folks 🇺🇸!`);
  logger.info(renderImage("../templates/js/src/assets/media/coder.jpg"));
  try {
    getRandomMessage("createProject");
    await fs.mkdir(projectDir);
    logger.info(`We have created the ${projectName} project directory.`);
  } catch (err) {
    getRandomMessage("error");
    return;
  }

  try {
    getRandomMessage("copyTemplates");
    await fs.copy(templateDir, projectDir);
    logger.info("Believe me, we copied the template files successfully!");
  } catch (err) {
    getRandomMessage("error");
    return;
  }

  logger.info("Processing the best templates, trust me...");
  await processTemplates(projectDir, {
    projectName,
    useTypeScript,
    useRedux,
    useRouter,
    deployCommand,
  });

  try {
    getRandomMessage("installDependencies");
    execSync(`cd ${projectName} && npm install`, {
      stdio: "inherit",
    });
    logger.info(`All the dependencies were installed bigly, believe me!`);
  } catch (err) {
    getRandomMessage("error");
    return;
  }

  getRandomMessage("success");
  logger.info("Thankyou! for using our generator, you have a very big brain!");
  logger.info(renderText("RATE THE REPO", "doom"));
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
      logger.info(`Loading Bigly Assets`);
    }
  }
}

module.exports = { generateProject };
