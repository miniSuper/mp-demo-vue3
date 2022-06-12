import App from './App'
import store from './store'
import MyUI from './my-ui'

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)

  return {
    app
  }
}
// #endif
