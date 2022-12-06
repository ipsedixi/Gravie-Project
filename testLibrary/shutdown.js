export async function shutdown(driver) {
    await driver.quit();
}