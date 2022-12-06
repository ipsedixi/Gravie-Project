import { startup } from "../testLibrary/startup.js";
import { shutdown } from "../testLibrary/shutdown.js";
import { testEmailAddressField } from "../testLibrary/signup.js";

async function run() {
    const driver = await startup("https://member.gravie.com/user/create");
    console.log("Tests on Email Address Field:");
    await testEmailAddressField(driver);
    await shutdown(driver);
}
run();