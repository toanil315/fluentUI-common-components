import { makeResetStyles, makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const useDatePickerBaseStyles = makeResetStyles({
  borderRadius: tokens.borderRadiusMedium,
  '& > input': {
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export const useDatePickerStyles = makeStyles({
  datePickerSmall: {
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalS),
  },
  datePickerMedium: {
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalM),
  },
  datePickerLarge: {
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalL),
  },
  datePickerError: {
    ...shorthands.borderColor(`${tokens.colorPaletteRedBackground3} !important`),
    ':after': {
      borderBottomColor: `${tokens.colorPaletteRedBackground3} !important`,
    },
  },
});
