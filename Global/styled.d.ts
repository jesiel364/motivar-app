import 'styled-components'
import Dark from './dark'

declare module 'styled-components' {
    type ThemeType = typeof Dark;

    export interface DefaultTheme extends ThemeType { }
}