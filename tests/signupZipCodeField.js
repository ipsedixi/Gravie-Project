import { startup } from "../testLibrary/startup.js";
import { shutdown } from "../testLibrary/shutdown.js";
import { testZipCodeField } from "../testLibrary/signup.js";

async function run() {
    const driver = await startup("https://member.gravie.com/user/create");
    console.log("Tests on Zip Code Field:");
    await testZipCodeField(driver);
    await shutdown(driver);
}
run();