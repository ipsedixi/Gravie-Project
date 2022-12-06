import { By } from "selenium-webdriver";

export async function getMemberSignupElements(driver) {
        return {
                firstNameField: await driver.findElement(By.id('first-name')),
                lastNameField: await driver.findElement(By.id('last-name')),
                ssnField: await driver.findElement(By.id('ssn-last-four')),
                birthDateField: await driver.findElement(By.id('birth-date')),
                zipCodeField: await driver.findElement(By.id('zip-code')),
                hasGravieCardYes: await driver.findElement(By.css('.aft-member-number-container button[data-value="Yes"]')),
                hasGravieCardNo: await driver.findElement(By.css('.aft-member-number-container button[data-value="No"]')),
                emailAddressField: await driver.findElement(By.id('username')),
                passwordField: await driver.findElement(By.id('password')),
                termsCheckbox: await driver.findElement(By.id('agree-to-terms-of-use-control')),
                loginLink: await driver.findElement(By.css('.registration-checkout a[href="/login"]')),
                continueButton: await driver.findElement(By.css('button[type="submit"]'))
        } 
}