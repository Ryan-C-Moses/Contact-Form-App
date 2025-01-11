const puppeteer = require("puppeteer");
const pa11y = require("pa11y");
const fs = require("fs");

const webpage = "https://ryan-c-moses.github.io/Contact-Form-App/";

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome-stable",
    headless: true, // Run in headless mode
    args: ["--no-sandbox", "--disable-setuid-sandbox"], // Add the no-sandbox flag
  });

  const page = await browser.newPage();
  await page.goto(webpage);
  await test(webpage, browser);

  await browser.close();
})();

const test = async (webpage, opts) => {
  const results = await pa11y(webpage, { opts });
  fs.writeFileSync(
    "reports/pa11y-accessibility-report.json",
    JSON.stringify(results, null, 2)
  );
  console.log(results.issues);
  console.log("\n\n\n\nReport saved to accessibility-report.json");
};
