import commonPlugin from "@minimaltech/eslint-common";
import nodePlugin from "eslint-plugin-n";
import { defineConfig } from "eslint/config";
import { lbRules } from "./lb-eslint";

const configs = defineConfig([
  ...lbRules,
  ...commonPlugin,
  {
    plugins: { n: nodePlugin },
    rules: {
      "n/prefer-node-protocol": ["error"],

      // OFF
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
]);

export = configs;
