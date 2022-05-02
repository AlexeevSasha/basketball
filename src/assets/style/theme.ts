import { DefaultTheme } from 'styled-components'
export const theme: DefaultTheme = {
    colors: {
        darkGrey: "#303030",
        grey: "#707070",
        lightGrey: "#9C9C9C",
        lightestGrey: "#D1D1D1",
        lightestGrey1: "#F6F6F6",
        darkRed: "#C60E2E",
        red: "#E4163A",
        lightRed: "#FF5761",
        lightestRed: "#FF768E",
        lightBlue: "#F5FBFF",
        blue: "#344472",
    },
    media: {
        _480: "(max-width: 480px)",
        _768: "(max-width: 768px)",
        _980: "(max-width: 980px)",
    }
};

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            darkGrey: string;
            grey: string;
            lightGrey: string;
            lightestGrey: string;
            lightestGrey1: string;
            darkRed: string;
            red: string;
            lightRed: string;
            lightestRed: string;
            lightBlue: string;
            blue: string;
        },  media: {
            _480: "(max-width: 480px)",
            _768: "(max-width: 768px)",
            _980: "(max-width: 980px)"
        }
    }
}
