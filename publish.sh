TARGET=../scaffold/cra-template-ts-eslint-prettier

node gen.js

cp -rf public ${TARGET}/template
cp -rf src ${TARGET}/template
cp -rf .husky ${TARGET}/template
cp -f .commitlintrc ${TARGET}/template/.commitlintrc
cp -f .eslintignore ${TARGET}/template/.eslintignore
cp -f .eslintrc ${TARGET}/template/.eslintrc
cp -f .prettierrc ${TARGET}/template/.prettierrc
cp -f .gitignore ${TARGET}/template/gitignore
cp -f tsconfig.json ${TARGET}/template/tsconfig.json
cp -f template.json ${TARGET}/template.json

cd ${TARGET}
npm publish
