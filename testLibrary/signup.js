import { getMemberSignupElements } from "../pages/memberSignup.js";
import { buildTestStringArray, testStringArrayInField, TYPES } from "./stringTesting.js";

export async function testFirstNameField(driver) {
    const signupPage = await getMemberSignupElements(driver);
    const firstNameField = signupPage.firstNameField;
    const testStringArray = await buildTestStringArray(TYPES.STRING);
    await testStringArrayInField(firstNameField, testStringArray)
}

export async function testLastNameField(driver) {
    const signupPage = await getMemberSignupElements(driver);
    const lastNameField = signupPage.lastNameField;
    const testStringArray = await buildTestStringArray(TYPES.STRING);
    await testStringArrayInField(lastNameField, testStringArray)
}

export async function testSSNField(driver) {
    const signupPage = await getMemberSignupElements(driver);
    const ssnField = signupPage.ssnField;
    const testStringArray = await buildTestStringArray(TYPES.NUMBER);
    await testStringArrayInField(ssnField, testStringArray)
}

export async function testBirthDateField(driver) {
    const signupPage = await getMemberSignupElements(driver);
    const birthDateField = signupPage.birthDateField;
    const testStringArray = await buildTestStringArray(TYPES.DATE);
    await testStringArrayInField(birthDateField, testStringArray)
}

export async function testZipCodeField(driver) {
    const signupPage = await getMemberSignupElements(driver);
    const zipCodeField = signupPage.zipCodeField;
    const testStringArray = await buildTestStringArray(TYPES.NUMBER);
    await testStringArrayInField(zipCodeField, testStringArray)
}

export async function testEmailAddressField(driver) {
    const signupPage = await getMemberSignupElements(driver);
    const emailAddressField = signupPage.emailAddressField;
    const testStringArray = await buildTestStringArray(TYPES.EMAIL);
    await testStringArrayInField(emailAddressField, testStringArray)
}

export async function testPasswordField(driver) {
    const signupPage = await getMemberSignupElements(driver);
    const passwordField = signupPage.passwordField;
    const testStringArray = await buildTestStringArray(TYPES.PASSWORD);
    await testStringArrayInField(passwordField, testStringArray)
}