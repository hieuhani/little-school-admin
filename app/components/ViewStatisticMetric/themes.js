const colorPairGenerator = (rgb = '0, 0, 0') => ({
  dark: `rgba(${rgb}, 1)`,
  light: `rgba(${rgb}, 0.7)`,
});

const themes = {
  cyan: colorPairGenerator('0, 188, 212'),
  green: colorPairGenerator('139, 195, 74'),
  orange: colorPairGenerator('255, 152, 0'),
  grey: colorPairGenerator('96, 125, 139'),
};

export default themes;
