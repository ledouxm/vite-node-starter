import { configDotenv } from "dotenv";
configDotenv();

const main = async () => {
  console.log(process.env.ENV_VARIABLE);
};

main();
