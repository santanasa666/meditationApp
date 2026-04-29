const COLORS = {
  primary: "#DE25EC",
  primaryDark: "#B210BF",
  secondary: "#444262",
  tertiary: "#FF7754",

  lightMain: "#FFF6FF",

  backgroundColor: "#fafafa", 
  darkBackground: "#000000",

  text: "#1F0517",            
  mainText: "#1F0517",
  hintText: "#797575",

  gray1: "#FBFBFB",
  gray: "#83829A",
  gray2: "#D9D9D9",

  white: "#FFFFFF",
  lightWhite: "#FAFAFC",
};

const DARK_COLORS = {
  primary: "#DE25EC",
  primaryDark: "#B210BF",
  secondary: "#444262",
  tertiary: "#FF7754",

  lightMain: "#1F0517",

  backgroundColor: "#000000", 

  text: "#FFFFFF",            
  mainText: "#FAFAFC",
  hintText: "#D9D9D9",

  gray1: "#2B2B2B",
  gray: "#83829A",
  gray2: "#4A4A4A",

  white: "#1F0517",
  lightWhite: "#212121",
};
const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
  openRegular: "",
};

const SIZES = {
  xxxSmall: 2,
  xxSmall: 6,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, DARK_COLORS, FONT, SIZES, SHADOWS };
