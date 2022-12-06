import { getMemberLoginElements } from "../pages/memberLogin.js";

export async function navigateToMemberSignup(driver) {
    const loginPage = await getMemberLoginElements(driver);
    const createAccountButton = loginPage.createAccountButton;
    await driver.actions()
            .move({origin: createAccountButton})
            .perform();
    await createAccountButton.click();
    return driver.getCurrentUrl();
}

export async function testNavigateToMemberSignup(driver) {
    const url = await navigateToMemberSignup(driver);
    if (url == 'https://member.gravie.com/user/create') {
        return 0;
    } else return url;
}