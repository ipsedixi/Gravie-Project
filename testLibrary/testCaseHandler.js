export function interpretResult(testCase, rawResult) {
    if (rawResult == 0) {
        return testCase + ": Test Case Passed"
    }
    else {
        return testCase + ": Test Case Failed\n" + "Result: " + rawResult;
    }
}