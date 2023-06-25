# Husky integration bash

yarn add -D husky @commitlint/cli @commitlint/config-conventional # workspace need to add flag `-W`

npx husky install

echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
npx husky add .husky/pre-commit  'yarn lint'


