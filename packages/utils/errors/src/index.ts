import Logger from "@kcmono/utils-loggers";

export default class {
  constructor() {
    const logger = new Logger();
    logger.hello();

    console.log("start new logger instance");
  }

  hello() {
    return "hello, world";
  }
}
