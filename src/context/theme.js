import { createContext,useContext } from "react";


export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {
        
    },
    lightTheme: () => {}    ,
    // const [themeMode, setThemeMode] = useState('light')
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
};