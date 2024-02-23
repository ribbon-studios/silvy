export const COLORS = {
    primary: '#f492a5',
    secondary: '#2f3640',
    tertiary: '#f7e8d8',
    darken: 'rgba(0, 0, 0, 0.25)',
    lighten: 'rgba(255, 255, 255, 0.25)'
}

export type Theme = {
    color: string;
    backgroundColor: string;
}

export enum Themes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export const THEMES: {
    [key in Themes]: Theme;
} = {
    primary: {
        color: COLORS.primary,
        backgroundColor: COLORS.secondary
    },
    secondary: {
        color: COLORS.secondary,
        backgroundColor: COLORS.primary
    }
}