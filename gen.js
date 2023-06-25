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

    delete packageJson.devDependencies["husky"];
    delete packageJson.devDependencies["@commitlint/cli"];
    delete packageJson.devDependencies["@commitlint/config-conventional"];

    fs.writeFileSync(
      "template.json",
      JSON.stringify({
        package: {
          ...packageJson,
        },
      }),
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
