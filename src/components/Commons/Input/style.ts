import { makeResetStyles, makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const useInputBaseStyles = makeResetStyles({
  borderRadius: tokens.borderRadiusMedium,
  '& > input': {
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export const useInputStyles = makeStyles({
  inputSmall: {
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalS),
  },
  inputMedium: {
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalM),
  },
  inputLarge: {
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalL),
  },
  inputError: {
    ...shorthands.borderColor(`${tokens.colorPaletteRedBackground3} !important`),
    ':after': {
      borderBottomColor: `${tokens.colorPaletteRedBackground3} !important`,
    },
  },
});
