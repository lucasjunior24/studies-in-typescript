import 'styled-components'
import { deafaultTheme } from '../styles/themes/default'

type ThemeType = typeof deafaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} 
}