import { definePreset } from "@pandacss/dev";

import { colorTokenList } from "../config/colorTokenList.ts";
import {
  breakpoints,
  semanticTokens,
  textStyles,
  tokens,
} from "../tokens/index.ts";

export const pandaPreset = definePreset({
  theme: {
    tokens,
    textStyles,
    semanticTokens,
    breakpoints,
  },
  staticCss: {
    css: [
      {
        properties: {
          color: colorTokenList,
          textStyle: Object.keys(textStyles),
        },
      },
    ],
  },
});
