export const isIOS = () =>  /iphone/i.test(navigator.userAgent)

export const isAppEnv = () => /jfwallet/i.test(navigator.userAgent)

export const isIphoneX = () => /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)

