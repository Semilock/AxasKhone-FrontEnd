#!/bin/bash
find . -not \( -path ./node_modules -prune \) -name '*.js' | xargs node_modules/eslint/bin/eslint.js -c .eslintrc.json
