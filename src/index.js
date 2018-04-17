import NavBar from './packages/nav-bar'
import Button from './packages/button'
import Cell from './packages/cell'
import Layout from './packages/layout'
import List from './packages/list'
import Loading from './packages/loading'
import MessageBox from './packages/message-box'
import Toast from './packages/toast'

const noobComponents = {
  NavBar,
  Button,
  Cell,
  Layout,
  List,
  Loading,
  MessageBox,
  Toast
}

const install = function (Vue, opt) {
  if (install.installed) return

  Object.keys(noobComponents).forEach(key => {
    Vue.component(key, noobComponents[key])
  })
}

const Noob = {
  version: process.env.VERSION,
  install,
  ...noobComponents
}

export default Noob
