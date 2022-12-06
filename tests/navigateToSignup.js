import { testNavigateToMemberSignup } from "../testLibrary/login.js";
import { shutdown } from "../testLibrary/shutdown.js";
import { startup } from "../testLibrary/startup.js";
import { interpretResult } from "../testLibrary/testCaseHandler.js";

async function run() {
    const driver = await startup("https://member.gravie.com/login");
    const testCase = "Navigate to Member Sign Up";
    const result = await testNavigateToMemberSignup(driver);
    console.log(interpretResult(testCase, result));
    await shutdown(driver);
}
run();