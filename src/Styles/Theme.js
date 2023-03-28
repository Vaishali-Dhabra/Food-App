import { createTheme } from "@mui/material";

const Theme=createTheme({
    palette: {
        primary: {
            main:'#ffffff'
        },
        secondary: {
            main: '#000000'
        }
    },
    
    typography: {
        h1:{
            fontfamily: 'Poppins',
            fontweight: 700,
            fontsize: 58,
            textalign: 'center',
            letterspacing: 0.2,
        },
        h2:{
            fontfamily: 'Montserrat',
            fontweight: 700,
            fontsize: 40,
            letterspacing: 0.2,
            color:'#252B42'
        },
        h3:{
            fontfamily: 'Montserrat',
            fontweight: 700,
            fontsize: 24,
            textalign: 'center',
            letterspacing: 0.1,
        },
        h4:{
            fontfamily: 'Montserrat',
            fontweight: 500,
            fontsize: 24,
            letterspacing: 0.2,
            color:'#737373'
        },
        subtitle : {
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: 21,
            letterSpacing: 0.1,
        },
        button:{
            textTransform:"capitalize",
        }
    }
})

export default Theme;