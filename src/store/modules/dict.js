import { defineStore } from 'pinia'
import commonApi from '@/api/common'
import axios from 'axios'

const useDictStore = defineStore('dict', {
  state: () => ({ data: undefined }),

  getters: {
    getState() {
      return { ...this.$state }
    }
  },

  actions: {
    setInfo(data) {
      this.$patch(data)
    },

    async initData() {
      const { data } = await axios.get('/core/system/dictAll')
      this.data = data.data
    }
  }
})

export default useDictStore
