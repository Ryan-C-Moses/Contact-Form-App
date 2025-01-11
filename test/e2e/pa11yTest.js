const pa11y = require('pa11y');
const fs = require('fs');

(async () => {
    const results = await pa11y('https://ryan-c-moses.github.io/Contact-Form-App/');
    fs.writeFileSync('reports/pa11y-accessibility-report.json', JSON.stringify(results, null, 2));
    console.log(results.issues);
    console.log('\n\n\n\nReport saved to accessibility-report.json');
})();