import { IVariable } from '@/interface'

export const variable: IVariable = {
  animation: {
    duration: '250ms',
    durationFast: '150ms',
    durationSlow: '750ms',
    timing: 'ease-in-out',
    timeout1s: '1000',
    timeout3s: '3000',
    timeout5s: '5000',
    transition: '150ms ease-in-out',
    transitionFast: '100ms ease-in-out',
    transitionFastCubic: '100ms cubic-bezier(0.55, 0.05, 0.55, 0.2)',
    transitionSlow: '450ms ease-in-out'
  },
  breakpoint: {
    xs: '540px',
    sm: '720px',
    md: '960px',
    lg: '1280px',
    xl: '1600px'
  },
  color: {
    alert: 'rgba(220, 70, 70, 1)',
    black: 'rgba(0, 0, 0, 1)',
    black2: 'rgba(20, 20, 20, 1)',
    blackTransparent1: 'rgba(0, 0, 0, 0.1)',
    blackTransparent2: 'rgba(0, 0, 0, 0.2)',
    blackTransparent3: 'rgba(0, 0, 0, 0.3)',
    blackTransparent5: 'rgba(0, 0, 0, 0.5)',
    blue: 'rgba(10, 108, 198, 1)',
    blueDark: 'rgba(0, 75, 115, 1)',
    brandPrimary: 'rgba(0, 164, 189, 1)',
    brandSecondary: 'rgba(0, 239, 247, 1)',
    brandTertiary: 'rgba(0, 122, 147, 1)',
    error: 'rgba(180, 10, 10, 1)',
    gray: 'rgba(161, 161, 161, 1)',
    gray2: 'rgba(120, 120, 120, 1)',
    gray3: 'rgba(85, 85, 85, 1)',
    gray4: 'rgba(75, 75, 75, 1)',
    grayDark: 'rgba(40, 40, 40, 1)',
    grayDark2: 'rgba(50, 50, 50, 1)',
    grayDark3: 'rgba(65, 65, 65, 1)',
    grayLight: 'rgba(190, 190, 190, 1)',
    grayLight2: 'rgba(215, 215, 215, 1)',
    grayLight3: 'rgba(230, 230, 230, 1)',
    grayLight4: 'rgba(245, 245, 245, 1)',
    green: 'rgba(30, 215, 96, 1)',
    info: 'rgba(0, 187, 238, 1)',
    orange: 'rgba(251, 153, 88, 1)',
    pink: 'rgba(225, 80, 120, 1)',
    primary: 'rgba(0, 164, 189, 1)',
    primaryHover: 'rgba(0, 144, 189, 1)',
    red: 'rgba(180, 10, 10, 1)',
    red2: 'rgba(217, 54, 54, 1)',
    secondary: 'rgba(0, 239, 247, 1)',
    secondaryHover: 'rgba(0, 219, 247, 1)',
    success: 'rgba(72, 235, 121, 1)',
    tertiary: 'rgba(0, 122, 147, 1)',
    tertiaryHover: 'rgba(0, 102, 147, 1)',
    textDarkPrimary: 'rgba(30, 30, 30, 1)',
    textDarkSecondary: 'rgba(128, 128, 128, 1)',
    textDarkTertiary: 'rgba(161, 161, 161, 1)',
    textLightPrimary: 'rgba(255, 255, 255, 1)',
    textLightSecondary: 'rgba(190, 190, 190, 1)',
    textLightTertiary: 'rgba(118, 118, 118, 1)',
    turquoise: 'rgba(0, 164, 189, 1)',
    turquoiseDark: 'rgba(0, 122, 147, 1)',
    turquoiseLight: 'rgba(0, 239, 247, 1)',
    warning: 'rgba(243, 156, 18, 1)',
    white: 'rgba(255, 255, 255, 1)',
    whiteTransparent1: 'rgba(255, 255, 255, 0.1)',
    whiteTransparent3: 'rgba(255, 255, 255, 0.3)',
    whiteTransparent5: 'rgba(255, 255, 255, 0.5)',
    whiteTransparent9: 'rgba(255, 255, 255, 0.9)',
    yellow: 'rgba(255, 198, 0, 1)'
  },
  colors: {
    chart: [
      'rgba(0, 164, 189, 1)',
      'rgba(30, 215, 96, 1)',
      'rgba(0, 75, 115, 1)',
      'rgba(243, 66, 53, 1)',
      'rgba(255, 142, 0, 1)',
      'rgba(28, 109, 208, 1)',
      'rgba(231, 48, 91, 1)',
      'rgba(109, 139, 116, 1)',
      'rgba(0, 161, 222, 1)',
      'rgba(17, 203, 215, 1)',
      'rgba(255, 123, 84, 1)',
      'rgba(255, 183, 43, 1)',
      'rgba(215, 139, 255, 1)',
      'rgba(255, 230, 27, 1)',
      'rgba(150, 205, 57, 1)',
      'rgba(157, 157, 157, 1)',
      'rgba(40, 223, 153, 1)',
      'rgba(249, 93, 106, 1)'
    ]
  },
  layout: {
    allButtons: 'button, input[type="button"], input[type="reset"], input[type="submit"]',
    allTextInputs: 'input[type="text"], input[type="password"], select[multiple="multiple"], textarea',
    borderRadiusPrimary: '4px',
    borderRadiusSecondary: '8px',
    boxShadowInsetPrimary: 'inset 0 -2px 8px 0 rgba(0, 0, 0, 0.1)',
    boxShadowInsetSecondary: 'inset 0 -1px 4px 0 rgba(0, 0, 0, 0.5)',
    boxShadowInsetTertiary: 'inset 0 -2px 6px 0 rgba(0, 0, 0, 0.4)',
    boxShadowPrimary: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
    boxShadowSecondary: '0 1px 4px 0 rgba(0, 0, 0, 0.5)',
    boxShadowTertiary: '0 2px 6px 0 rgba(0, 0, 0, 0.4)',
    buttonHeight: '42px',
    buttonPaddingX: '10px',
    buttonPaddingY: '11px',
    footerManagerHeight: '40px',
    formBoxShadow: 'inset 0 0 0 1px rgba(225, 225, 225, 1)',
    formBoxShadowFocus: 'inset 0 0 0 2px rgba(118, 118, 118, 1)',
    formBoxShadowError: 'inset 0 0 0 2px rgba(220, 70, 70, 1)',
    headerHeight: '40px',
    headerManagerHeight: '60px',
    inputHeight: '42px',
    inputMargin: '10px',
    inputPaddingX: '16px',
    inputPaddingY: '10px'
  },
  space: {
    spacingXXS: '4px',
    spacingXS: '8px',
    spacingSM: '16px',
    spacingMD: '24px',
    spacingLG: '32px',
    spacingXL: '40px',
    spacingXXL: '48px',
    spacingXXXL: '64px'
  },
  text: {
    fontPrimary: '"Merriweather Sans", "Helvetica"',
    fontSecondary: '"Anton", "Helvetica"',
    fontSize: '16px',
    fontWeightBold: '700',
    fontWeightNormal: '400',
    letterSpacing: '0',
    lineHeight: '1.4'
  }
}
