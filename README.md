# TP ESLint – Fichier index.js

## Log 
(base) ➜  tp-eslint-git git:(main) ✗ npx eslint index.js

/Users/davidvucong/Tp git/tp-eslint-git/index.js
7:7   error  'unusedVar' is assigned a value but never used  no-unused-vars
19:7   error  'message' is assigned a value but never used    no-unused-vars
21:5   error  Unexpected constant condition                   no-constant-condition
25:7   error  'tableau' is assigned a value but never used    no-unused-vars
36:10  error  'toutFaire' is defined but never used           no-unused-vars
56:7   error  'd' is assigned a value but never used          no-unused-vars
58:10  error  'fetchData' is defined but never used           no-unused-vars
63:7   error  'nombres' is assigned a value but never used    no-unused-vars
67:1   error  Unexpected 'debugger' statement                 no-debugger

✖ 9 problems (9 errors, 0 warnings)

## Fichier index.js corrigé

```javascript
function additionner(a, b) {
  const result = a + b;
  console.log('Le résultat est', result);
  return result;
}

function division(x, y) {
  if (y === 0) {
    console.log('Division par zéro !');
    return;
  }
  return x / y;
}

console.log(additionner(5, 3));

const nombre = '10';
if (parseInt(nombre, 10) === 10) {
  console.log('Nombre égal à 10');
}

setTimeout(() => {
  console.log('Timeout');
}, 1000);

module.exports = {
  additionner,
  division,
};
```
#Husky
## Remplacement du contenu du fichier .husky/pre-commit par :

#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx eslint .

Ca marche avec le fichier index.js corrigé: 

(base) ➜  tp-eslint-git git:(main) ✗ git commit -m "Vérification hook ESLint"
[main (root-commit) de0813d] Vérification hook ESLint
5 files changed, 57 insertions(+)
create mode 100755 .husky/pre-commit
create mode 100644 .idea/.gitignore
create mode 100644 .idea/easycode.ignore
create mode 100644 README.md
create mode 100644 index.js
(base) ➜  tp-eslint-git git:(main) ✗ 

## eslintrc.json

```javascript
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    extends: ['airbnb-base'],
    rules: {
      'no-console': 'warn',
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
    },
  },
]);
```
ça ne marche pas avec le fichier de configuration original .eslintrc.mjs je l'ai remplacé par .eslintrc.json : 
```javascript
{
  "extends": "airbnb-base",
  "rules": {
    "no-console": "warn",
    "indent": ["error", 2],
    "quotes": ["error", "single"]
  },
  "env": {
    "browser": true,
    "node": true
  }
}
```
# Maitenant ça amrche avec le fichier de configuration .eslintrc.json : 
(base) ➜  tp-eslint-git git:(main) ✗ npm run lint


> tp-eslint-git@1.0.0 lint
> eslint .


/Users/davidvucong/Tp git/tp-eslint-git/index.js
2:1  error    Expected indentation of 2 spaces but found 4   indent
3:1  error    Expected indentation of 2 spaces but found 4   indent
3:5  warning  Unexpected console statement                   no-console
4:1  error    Expected indentation of 2 spaces but found 4   indent
8:1  error    Expected indentation of 2 spaces but found 4   indent
9:1  error    Expected indentation of 4 spaces but found 8   indent
9:9  warning  Unexpected console statement                   no-console
10:1  error    Expected indentation of 4 spaces but found 8   indent
11:1  error    Expected indentation of 2 spaces but found 4   indent
12:1  error    Expected indentation of 2 spaces but found 4   indent
12:5  error    Function 'division' expected no return value   consistent-return
15:1  warning  Unexpected console statement                   no-console
19:1  error    Expected indentation of 2 spaces but found 4   indent
19:5  warning  Unexpected console statement                   no-console
23:1  error    Expected indentation of 2 spaces but found 4   indent
23:5  warning  Unexpected console statement                   no-console
27:1  error    Expected indentation of 2 spaces but found 4   indent
28:1  error    Expected indentation of 2 spaces but found 4   indent
29:3  error    Newline required at end of file but not found  eol-last

✖ 19 problems (14 errors, 5 warnings)


## Link Git fait

![Capture d’écran 2025-06-11 à 16.59.58.png](../../Documents/Captures/Capture%20d%E2%80%99%C3%A9cran%202025-06-11%20%C3%A0%2016.59.58.png)

(base) ➜  tp-eslint-git git:(feature/ajout-fonction) ✗ git add utils.js
(base) ➜  tp-eslint-git git:(feature/ajout-fonction) ✗ git commit -m "Utils.js non conforme"

## Comme prévu le push d'utils.js ne passe pas le hook ESLint :

/Users/davidvucong/Tp git/tp-eslint-git/index.js
2:1  error    Expected indentation of 2 spaces but found 4   indent
3:1  error    Expected indentation of 2 spaces but found 4   indent
3:5  warning  Unexpected console statement                   no-console
4:1  error    Expected indentation of 2 spaces but found 4   indent
8:1  error    Expected indentation of 2 spaces but found 4   indent
9:1  error    Expected indentation of 4 spaces but found 8   indent
9:9  warning  Unexpected console statement                   no-console
10:1  error    Expected indentation of 4 spaces but found 8   indent
11:1  error    Expected indentation of 2 spaces but found 4   indent
12:1  error    Expected indentation of 2 spaces but found 4   indent
12:5  error    Function 'division' expected no return value   consistent-return
15:1  warning  Unexpected console statement                   no-console
19:1  error    Expected indentation of 2 spaces but found 4   indent
19:5  warning  Unexpected console statement                   no-console
23:1  error    Expected indentation of 2 spaces but found 4   indent
23:5  warning  Unexpected console statement                   no-console
27:1  error    Expected indentation of 2 spaces but found 4   indent
28:1  error    Expected indentation of 2 spaces but found 4   indent
29:3  error    Newline required at end of file but not found  eol-last

/Users/davidvucong/Tp git/tp-eslint-git/utils.js
1:10  error    'addition' is defined but never used          no-unused-vars
1:20  error    A space is required after ','                 comma-spacing
1:23  error    Missing space before opening brace            space-before-blocks
2:1   error    Expected indentation of 2 spaces but found 4  indent
2:5   warning  Unexpected console statement                  no-console
2:17  error    Strings must use singlequote                  quotes
2:35  error    Missing semicolon                             semi

✖ 26 problems (20 errors, 6 warnings)
18 errors and 0 warnings potentially fixable with the `--fix` option.

husky - pre-commit hook exited with code 1 (error)
(base) ➜  tp-eslint-git git:(feature/ajout-fonction) ✗ 


## Je corrige utils.js à la main comme le Eslint fix ne marche pas pr tout corriger :
```javascript
function addition(a, b) {
  return a + b;
}

// Utilisation de la fonction (corrige l'erreur no-unused-vars)
// console.log(addition(2, 3));
addition(2, 3);
```
# Tentative d'ajout d'un workflow GitHub Actions pour ESLint : 

(base) ➜  tp-eslint-git git:(feature/ajout-fonction) ✗ mkdir -p .github/workflows

(base) ➜  tp-eslint-git git:(feature/ajout-fonction) ✗ nano .github/workflows/lint.yml

(base) ➜  tp-eslint-git git:(feature/ajout-fonction) ✗ git add .github/workflows/lint.yml
(base) ➜  tp-eslint-git git:(feature/ajout-fonction) ✗ git commit -m "Ajout du workflow GitHub Actions pour ESLint"

/Users/davidvucong/Tp git/tp-eslint-git/index.js
3:3  warning  Unexpected console statement  no-console
9:5  warning  Unexpected console statement  no-console
15:1  warning  Unexpected console statement  no-console
19:3  warning  Unexpected console statement  no-console
23:3  warning  Unexpected console statement  no-console

✖ 5 problems (0 errors, 5 warnings)

[feature/ajout-fonction 8fcc291] Ajout du workflow GitHub Actions pour ESLint
1 file changed, 18 insertions(+)
create mode 100644 .github/workflows/lint.yml
(base) ➜  tp-eslint-git git:(feature/ajout-fonction) ✗ git push
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (5/5), 560 bytes | 560.00 KiB/s, done.
Total 5 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Drtenma34/tp-eslint-git.git
! [remote rejected] feature/ajout-fonction -> feature/ajout-fonction (refusing to allow a Personal Access Token to create or update workflow `.github/workflows/lint.yml` without `workflow` scope)
error: failed to push some refs to 'https://github.com/Drtenma34/tp-eslint-git.git'
(base) ➜  tp-eslint-git git:(feature/ajout-fonction) ✗ 


