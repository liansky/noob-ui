import './styles/index.scss'

import NavBar from './packages/nav-bar'
import Button from './packages/button'
import Cell from './packages/cell'
import Layout from './packages/layout'
import List from './packages/list'
import Loading from './packages/loading'
import MessageBox from './packages/message-box'
import Toast from './packages/toast'
import Icon from './packages/icon'

const noobComponents = {
  NavBar,
  Cell,
  Layout,
  List,
  Loading,
  MessageBox,
  Toast,
  Icon,
  NButton: Button
}


const install = function (Vue, opt = {}) {
  if (install.installed) return

  Object.keys(noobComponents).forEach(key => {
    Vue.component(key, noobComponents[key])
  })
}


// 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const NoobUI = {
  version: process.env.VERSION,
  install,
  ...noobComponents
}


export default NoobUI
