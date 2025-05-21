import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import commonPlugin from "@minimaltech/eslint-common";
import nodePlugin from "eslint-plugin-n";

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const configs = [
  ...compat.extends("@loopback/eslint-config"),
  ...commonPlugin,
  {
    plugins: {
      n: nodePlugin,
    },
    rules: {
      "n/prefer-node-protocol": ["error"],

      // OFF
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
].filter((conf) => Object.keys(conf).length);

export = configs;
