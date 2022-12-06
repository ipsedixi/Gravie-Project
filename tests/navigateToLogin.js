import { startup } from "../testLibrary/startup.js";
import { testNavigateToMemberLogin } from "../testLibrary/header.js";
import { interpretResult } from "../testLibrary/testCaseHandler.js";
import { shutdown } from "../testLibrary/shutdown.js";

async function run() {
    const driver = await startup("https://www.gravie.com");
    const testCase = "Navigate to Member Login";
    const result = await testNavigateToMemberLogin(driver);
    console.log(interpretResult(testCase, result));
    await shutdown(driver);
}
run();