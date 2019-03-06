let TestRailScript = require("./test-rail-script");

(new TestRailScript(process.argv.slice(2))).generateCases();

