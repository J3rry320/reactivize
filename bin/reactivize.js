const { generateProject } = require("../src");
const program = require("commander");

program
  .version("1.0.0")
  .description("Generate a new React project using the modern webpack way!🧑🏽‍💻")
  .arguments("<projectName>")
  .option("-nt, --no-typescript", "Do not use TypeScript")
  .option("-nrd, --no-redux", "Do not use Redux")
  .option("-nro, --no-router", "Do not use React Router")
  .option(
    "-d <service>, --deploy <service>",
    "Choose a deploy service (heroku|netlify|github-pages|firebase)"
  )
  .action((projectName, options) => {
    const projectConfig = {
      useTypeScript: options.typescript,
      useRedux: options.redux,
      useRouter: options.router,
      deployService: options.deploy,
    };

    generateProject(projectName, projectConfig).catch((error) => {
      console.error(error);
      process.exit(1);
    });
  })
  .parse(process.argv);
