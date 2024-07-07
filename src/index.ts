import type { App, Component } from 'vue'
import * as components from './components'

type ComponentList = {
  [key: string]: Component
}

const componentList: ComponentList = components?.default

const DComponents = {
  install(app: App) {
    Object.keys(componentList).forEach((name) => {
      app.component(name, componentList[name])
    })
  }
}
export default DComponents
