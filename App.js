import "expo-router/entry";
import { ThemeProvider } from "./app/context/ThemeContext";
import { Settings } from "react-native";



export default function App() {
  return (
    <ThemeProvider>
     
      <MainNavigation /> 
      <Settings />
    </ThemeProvider>
  );
}