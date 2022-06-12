// 页面路径：store/index.js
import { createStore } from 'vuex'
const store = createStore({
  state: {
    //存放状态
    loading: 0,
    listLoading: new Map()
  }
})

export default store
