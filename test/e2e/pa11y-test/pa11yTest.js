const puppeteer = require("puppeteer-core");
const pa11y = require("pa11y");
const fs = require("fs");

const webpage = "https://ryan-c-moses.github.io/Contact-Form-App/";

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/chromium",
    headless: true, // Run in headless mode
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--headless"], // Add the no-sandbox flag
  });

  const page = await browser.newPage();
  await page.goto(webpage);

  // Passing correct options for Pa11y test
  await test(webpage, { browser });

  await browser.close();
})();

const test = async (webpage, browser) => {
  try {
    const results = await pa11y(webpage, { browser });

    // Save the results to a JSON file
    fs.writeFileSync(
      "reports/pa11y-accessibility-report.json",
      JSON.stringify(results, null, 2)
    );
    console.log(results.issues); // Log issues to the console
    console.log("\n\n\n\nReport saved to accessibility-report.json");
  } catch (error) {
    console.error("Error during accessibility test:", error);
  }
};
