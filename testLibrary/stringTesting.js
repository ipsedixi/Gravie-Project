import { Key } from "selenium-webdriver";
import { interpretResult } from "./testCaseHandler.js";

export async function testStringArrayInField(field, stringArray) {
    for (let i = 0; i < stringArray.length; i++){
        const string = stringArray[i][0];
        const expectedResult = stringArray[i][1];
        const testCase = "String: " + string;
        const rawResult = await testStringInField(field, string, expectedResult);
        console.log(interpretResult(testCase, rawResult));
        await field.click();
        await field.clear();
        await field.sendKeys(Key.UP, Key.TAB, Key.NULL);
    } 
}

export async function testStringInField(field, string, expectedResult) {
    await field.click();
    await field.sendKeys(string);
    await field.sendKeys(Key.UP, Key.TAB, Key.NULL);
    if (expectedResult == "INVALID") {
        return fieldIsInvalid(field);
    }
    if (expectedResult == "VALID") {
        return fieldIsValid(field);
    }
    if (expectedResult == "EMPTY") {
        return fieldIsEmpty(field);
    }
    if (expectedResult == "MASKED") {
        return fieldIsMasked(field);
    }
}

export async function fieldIsInvalid(field) {
    const isInvalid = await field.getAttribute('ariaInvalid');
    if (isInvalid == "true"){
        return 0
    }
    else return "Field appears valid with invalid data."
}

export async function fieldIsValid(field) {
    const isInvalid = await field.getAttribute('ariaInvalid');
    if (!isInvalid){
        return 0
    }
    else return "Field appears invalid with valid data."
}

export async function fieldIsEmpty(field) {
    const value = await field.getAttribute('value')
    if (value.length === 0){
        return 0
    }
    else return "Field shows characters that should not be enterable."
}

export async function fieldIsMasked(field) {
    const type = await field.getAttribute('type')
    if (type === 'password'){
        return 0
    }
    else return "Field should mask input but type is not password."
}

export const TYPES = {
    DATE: "DATE",
    EMAIL: "EMAIL",
    NUMBER: "NUMBER",
    PASSWORD: "PASSWORD",
    STRING: "STRING"
}

export async function buildTestStringArray(type) {
    if (type == "DATE") {
        return [
            ["letters", "EMPTY"],
            ["12345689", "INVALID"],
            ["!@#$", "EMPTY"],
            ["01/02/1990", "VALID"]
        ];
    }
    if (type == "EMAIL") {
        return [
            ["letters", "INVALID"],
            ["12345689", "INVALID"],
            ["!@#$", "INVALID"],
            ["01/02/1990", "INVALID"],
            ["username@example.com", "VALID"]
        ];
    }
    if (type == "NUMBER") {
        return [
            ["letters", "EMPTY"],
            ["1234", "VALID"],
            ["!@#$", "EMPTY"]
        ];
    }
    if (type == "PASSWORD") {
        return [
            ["letters", "MASKED"],
            ["1234", "MASKED"],
            ["!@#$", "MASKED"],
            ["01/02/1990", "MASKED"]
        ];
    }
    if (type == "STRING") {
        return [
            ["letters", "VALID"],
            ["1234", "VALID"],
            ["!@#$", "VALID"],
            ["VeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongStringVeryLongString", "INVALID"]
        ];
    }
    else return "ERROR: field type not supported."
}