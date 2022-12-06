import { By } from "selenium-webdriver";

export async function getMemberLoginElements(driver) {
        return {
                homeLink: await driver.findElement(By.css('a[href="/"]')),
                contactLink: await driver.findElement(By.css('a[href="/contact"]')),
                helpMenu: await getHelpMenu(driver),
                headerLogInButton: await driver.findElement(By.css('a[href="/login"]')),
                needAnAccountLink: await driver.findElement(By.xpath("//a[normalize-space()='Need an account?']")),
                emailField: await driver.findElement(By.css('input[type="email"]')),
                passwordField: await driver.findElement(By.css('input[type="password"]')),
                forgotYourPasswordLink: await driver.findElement(By.xpath("//a[normalize-space()='Forgot your password?']")),
                loginButton: await driver.findElement(By.css('button[type="submit"]')),
                createAccountButton: await driver.findElement(By.css('.login-sign-up a[href="/user/create"]'))
        } 
}

async function getHelpMenu(driver) {
        const helpMenu = await driver.findElement(By.id("help-menu"));
        return {
                node: helpMenu,
                children: {
                        FAQ: await helpMenu.findElement(By.xpath("//a[normalize-space()='FAQ']")),
                        glossary: await helpMenu.findElement(By.xpath("//a[normalize-space()='Glossary']")),
                        screenShare: await helpMenu.findElement(By.xpath("//a[normalize-space()='Screen Share']"))
                }
        };
}