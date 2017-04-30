Object.defineProperty(exports, '__esModule', {
  value: true,
});

const COLORS = require('material-ui/styles/colors');

const COLOR_MANIPULATOR = require('material-ui/utils/colorManipulator');

const SPACING = require('material-ui/styles/spacing');

exports.default = {
  spacing: SPACING.default,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: COLORS.green500,
    primary2Color: COLORS.green700,
    primary3Color: COLORS.grey400,
    accent1Color: COLORS.pinkA200,
    accent2Color: COLORS.grey100,
    accent3Color: COLORS.grey500,
    textColor: COLORS.darkBlack,
    secondaryTextColor: (0, COLOR_MANIPULATOR.fade)(COLORS.darkBlack, 0.54),
    alternateTextColor: COLORS.white,
    canvasColor: COLORS.white,
    borderColor: COLORS.grey300,
    disabledColor: (0, COLOR_MANIPULATOR.fade)(COLORS.darkBlack, 0.3),
    pickerHeaderColor: COLORS.green500,
    clockCircleColor: (0, COLOR_MANIPULATOR.fade)(COLORS.darkBlack, 0.07),
    shadowColor: COLORS.fullBlack,
  },
};
