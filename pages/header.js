import { By } from "selenium-webdriver";

export async function getHeaderElements(driver) {
        return {
                homeLink: await driver.findElement(By.css("[rel = 'home']")),
                primaryMenu: await getPrimaryMenu(driver),
        } 
}

async function getPrimaryMenu(driver) {
        const primaryMenu = await driver.findElement(By.id('primary-menu'))
        return {
                node: primaryMenu,
                children: {
                        brokersMenu: await getBrokersMenu(primaryMenu),
                        employersMenu: await getEmployersMenu(primaryMenu),
                        membersMenu: await getMembersMenu(primaryMenu),
                        aboutUsMenu: await getAboutUsMenu(primaryMenu),
                        loginMenu: await getLoginMenu(primaryMenu)
                }
        };
}

async function getBrokersMenu(primaryMenu) {
        const brokersMenu = await primaryMenu.findElement(By.xpath("//span[contains(text(),'Brokers')]/ancestor::li"));
        return {
                node: brokersMenu,
                children: {
                        overview: await brokersMenu.findElement(By.xpath("//a[normalize-space()='Overview']")),
                        comfort: await brokersMenu.findElement(By.xpath("//a[normalize-space()='Comfort']")),
                        ICHRA: await brokersMenu.findElement(By.xpath("//a[normalize-space()='ICHRA']"))
                }
        };
}

async function getEmployersMenu(primaryMenu) {
        const employersMenu = await primaryMenu.findElement(By.xpath("//span[contains(text(),'Employers')]/ancestor::li"));
        return {
                node: employersMenu,
                children: {
                        overview: await employersMenu.findElement(By.xpath("//a[normalize-space()='Overview']")),
                        comfort: await employersMenu.findElement(By.xpath("//a[normalize-space()='Comfort']")),
                        ICHRA: await employersMenu.findElement(By.xpath("//a[normalize-space()='ICHRA']"))
                }
        };
}

async function getMembersMenu(primaryMenu) {
        const membersMenu = await primaryMenu.findElement(By.xpath("//span[contains(text(),'Members')]/ancestor::li"));
        return {
                node: membersMenu,
                children: {
                        overview: await membersMenu.findElement(By.xpath("//a[normalize-space()='Overview']")),
                        gravieCare: await membersMenu.findElement(By.xpath("//a[normalize-space()='Gravie Care']"))
                }
        };
}

async function getAboutUsMenu(primaryMenu) {
        const aboutUsMenu = await primaryMenu.findElement(By.xpath("//span[contains(text(),'About Us')]/ancestor::li"));
        return {
                node: aboutUsMenu,
                children: {
                        whoWeAre: await aboutUsMenu.findElement(By.xpath("//a[normalize-space()='Overview']")),
                        careers: await aboutUsMenu.findElement(By.xpath("//a[normalize-space()='Careers']")),
                        news: await aboutUsMenu.findElement(By.xpath("//a[normalize-space()='News']")),
                        blog: await aboutUsMenu.findElement(By.xpath("//a[normalize-space()='Blog']"))
                }
        };
}

async function getLoginMenu(primaryMenu) {
        const loginMenu = await primaryMenu.findElement(By.xpath("//span[contains(text(),'Log In')]/ancestor::li"));
        console.log(loginMenu);
        return {
                node: loginMenu,
                children: {
                        employerPortal: await loginMenu.findElement(By.xpath("//a[normalize-space()='Employer Portal']")),
                        memberLogin: await loginMenu.findElement(By.xpath("//a[normalize-space()='Member Login']"))
                }
        };
}