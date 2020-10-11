export const colors = {
  orange: '#FFCA27',
  accent: '#FFE185',
  blueSemantic: '#2D9CDB',
  redSemantic: '#EB5757',
  greenSemantic: '#27AE60',
  white: '#FFF',
  black: '#000',
  dark: '#0B0B0B',
  darkLighter: '#636363',
  grey: '#B0B0B0',
  greyLight: '#DBDBDB',
  transparent: 'transparent',
};

export const theme = {
  primary: colors.orange,
  bottomNavigation: {
    backgroundColor: colors.white,
    active: colors.orange,
    inactive: colors.grey,
  },
  ...colors,
};

export const sizes = {
  text: {
    h1: 25,
    xl: 21,
    lg: 18,
    md: 16,
    sm: 14,
    xs: 12,
  },
  padding: 24,
  margin: 24,
  radius: 12,
};
