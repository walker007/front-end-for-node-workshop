"use client"

import {ReactNode} from "react";
import {ThemeProvider} from "styled-components";
import theme from "@/styles/theme";

const Providers = ({children}: {children: ReactNode}) =>{
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Providers;