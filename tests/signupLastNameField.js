import { startup } from "../testLibrary/startup.js";
import { shutdown } from "../testLibrary/shutdown.js";
import { testLastNameField } from "../testLibrary/signup.js";

async function run() {
    const driver = await startup("https://member.gravie.com/user/create");
    console.log("Tests on Last Name Field:");
    await testLastNameField(driver);
    await shutdown(driver);
}
run();