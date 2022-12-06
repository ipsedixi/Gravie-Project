import { getHeaderElements } from "../pages/header.js";

export async function openLoginMenu(driver) {
    const header = await getHeaderElements(driver);
    const loginMenu = header.primaryMenu.children.loginMenu;
    await driver.actions()
            .move({origin: loginMenu.node})
            .perform();
    return loginMenu;
}

export async function navigateToMemberLogin(driver) {
    const loginMenu = await openLoginMenu(driver);
    const memberLogin = loginMenu.children.memberLogin;
    await memberLogin.click();
    return await driver.getCurrentUrl();
}

export async function testNavigateToMemberLogin(driver) {
    const url = await navigateToMemberLogin(driver);
    console.log('url: ' + url);
    if (url == 'https://member.gravie.com/login') {
        return 0;
    } else return url;
}