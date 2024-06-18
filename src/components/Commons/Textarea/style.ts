import { makeResetStyles, makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const useTextareaBaseStyles = makeResetStyles({
  borderRadius: tokens.borderRadiusMedium,
  '& > textarea': {
    ...shorthands.padding('0px'),
  },
});

export const useTextareaStyles = makeStyles({
  textareaSmall: {
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalS),
  },
  textareaMedium: {
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalM),
  },
  textareaLarge: {
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalL),
  },
  textareaError: {
    ...shorthands.borderColor(`${tokens.colorPaletteRedBackground3} !important`),
    ':after': {
      borderBottomColor: `${tokens.colorPaletteRedBackground3} !important`,
    },
  },
});
