// Scale
import { pxToRem } from 'utils/scale';

// Themes
const primaryTheme = {
    breakpoint: {
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px"
    },
    colors: {
        white: "#ffffff",
        none: "transparent",
        active: {
            blue2: "#004367",
        },

        // New Colors
        grey1: '#b4b4b4',
        grey2: '#cecece',
        grey3: '#f8f8f8', 
        blueGrey1: '#0C2833',
        blueGrey2: '#304E5C',
        blueGrey3: '#577584',
        blueGrey4: '#8BA4B1',
        blueGrey5: '#C3CFD6',
        blueGrey6: '#F2F2F2',
        
        blue1: '#004367',
        blue2: '#0087C8',
        blue3: '#2DBFF3',
        blue4: '#B9E6FB',
        blue5: '#E7F3FA',
        blue6: '#F4FBFF',
        
        red1: '#64001C',
        red2: '#89002B',
        red3: '#B51D42',
        red4: '#FAC8C7',
        red5: '#FFE0E0',
        red6: '#FFEBEB',
        
        orange1: '#985826',
        orange2: '#AF6A22',
        orange3: '#F1A539',
        orange4: '#FFE17F',
        orange5: '#FFF9DB',
        orange6: '#FFFCEB',
        
        green1: '#005742',
        green2: '#007864',
        green3: '#00967D',
        green4: '#A0D9DE',
        green5: '#C9F8F6',
        green6: '#E6FFFE',
        
        pink1: '#B926BF',
        pink2: '#B926BF',
        purple: '#561EA5',
        brown: '#765A50',
        orange: '#F36A2D',
        black: '#000000',
    },
    spacing: {
        px3: pxToRem(3),
        px5: pxToRem(5),
        px8: pxToRem(8),
        px10: pxToRem(10),
        px12: pxToRem(12),
        px15: pxToRem(15),
        px16: pxToRem(16),
        px20: pxToRem(20),
        px24: pxToRem(24),
        px25: pxToRem(25),
        px30: pxToRem(30),
        px32: pxToRem(32),
        px35: pxToRem(35),
        px40: pxToRem(40),
        px50: pxToRem(50),
        px60: pxToRem(60),
        px70: pxToRem(70),
        px90: pxToRem(90),
        
        none: "0",
        quarter: "25%",
        middle: "50%",
        full: "100%"
    },
    fontSize: {
        none: "0",
        px8: pxToRem(8),
        px10: pxToRem(10),
        px11: pxToRem(11),
        px12: pxToRem(12),
        px14: pxToRem(14),
        px16: pxToRem(16),
        px18: pxToRem(18),
        px20: pxToRem(20),
        px24: pxToRem(24),
        px25: pxToRem(25),
        px30: pxToRem(30),
        px32: pxToRem(32),
        px35: pxToRem(35),
        px40: pxToRem(40),
        px45: pxToRem(45),
        px60: pxToRem(60),
    },
    fontWeight: {
        light: 300,
        normal: 400,
        bold: 700
    },
    fontFamily: {
        default: `"Lato", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"`
    },
    rounded: {
        px3: "3px",
        px5: "5px",
        px10: "10px",

        none: "0",
        full: "100%"
    }
}

export {
    primaryTheme
}