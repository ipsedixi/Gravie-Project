import { Builder } from "selenium-webdriver";
import {setTimeout} from "timers/promises";

export async function startup(url) {
    //Wait for browser to build and launch properly
    const driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    await driver.get(url);
    await setTimeout(1000);
    return driver;
}