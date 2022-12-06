import { startup } from "../testLibrary/startup.js";
import { shutdown } from "../testLibrary/shutdown.js";
import { testSSNField } from "../testLibrary/signup.js";

async function run() {
    const driver = await startup("https://member.gravie.com/user/create");
    console.log("Tests on SSN Field:");
    await testSSNField(driver);
    await shutdown(driver);
}
run();