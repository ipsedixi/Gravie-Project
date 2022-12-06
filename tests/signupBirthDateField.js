import { startup } from "../testLibrary/startup.js";
import { shutdown } from "../testLibrary/shutdown.js";
import { testBirthDateField } from "../testLibrary/signup.js";

async function run() {
    const driver = await startup("https://member.gravie.com/user/create");
    console.log("Tests on Birth Date Field:");
    await testBirthDateField(driver);
    await shutdown(driver);
}
run();