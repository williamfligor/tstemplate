import * as log4js from "log4js";

log4js.configure("config/log4js.json");
const logger = log4js.getLogger("index");

logger.info("Hello World");
