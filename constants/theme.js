const COLORS = {
  primary: "#DE25EC",
  primaryDark: "#B210BF",
  secondary: "#444262",
  tertiary: "#FF7754",

  lightMain: "#fde2fd",
  

  backgroundColor: "#fafafa", 
  darkBackground: "#000000",

  text: "#1F0517",            
  mainText: "#1F0517",
  hintText: "#797575",

  gray1: "#ededed",
  gray: "#83829A",
  gray2: "#D9D9D9",
  gray3:"#f3f3f3",

  white: "#FFFFFF",
  lightWhite: "#FAFAFC",
  lightBG:"#ffffff",

  quote:"#000",
  error:"#f91818",
  errorIcoBg:"#ffc5c5",
  errorBg:"#ffeaea",
};

const DARK_COLORS = {
  primary: "#f674ff",
  primaryDark: "#B210BF",
  secondary: "#444262",
  tertiary: "#FF7754",

  lightMain: "#340437",
  backgroundColor: "#121212",
  text: "#FFFFFF",            
  mainText: "#FBFBFB",
  hintText: "#D9D9D9",

  gray1: "#2B2B2B",
  gray: "#161617",
  gray2: "#2d2d2d",
  gray3:"#1c1c1c",

  white: "#1F0517",
  lightWhite: "#212121",
  lightBG:"#000000",

  quote:"#fffff",
  error:"#9e0c0c",
  errorIcoBg:"#4a0404",
  errorBg:"#290202",
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
  xMedium:18,
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
