// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

// Generate template.json
(function gen() {
  try {
    const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

    delete packageJson.name;
    delete packageJson.version;
    delete packageJson.private;
    delete packageJson.browserslist;

    fs.writeFileSync(
      "template.json",
      JSON.stringify(packageJson),
      function (err) {
        if (err) {
          console.log("Write failed: " + err);
        } else {
          console.log("gen success.");
        }
      }
    );
  } catch (error) {
    //
  }
})();
