export const isIOS = /iphone/i.test(navigator.userAgent)


export const isIphoneX = /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)

/**
 * 钱包环境判断
 * @type {boolean}
 */
export const isAppEnv = /jfwallet/i.test(navigator.userAgent)


/**
 * 判断属性是否包含
 * @param value
 * @param validList
 * @returns {boolean}
 */
export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

