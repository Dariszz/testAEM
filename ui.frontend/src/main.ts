import './map-components'
import {
  AuthoringUtils,
  ModelManager
} from '@adobe/aem-spa-page-model-manager'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { Constants } from '@mavice/aem-vue-editable-components'

Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  ModelManager.initialize().then((pageModel) => {
    new Vue({
      router: new VueRouter({
        mode: 'history',
        routes: [
          {
            path: '/content/vue/vue.html?wcmmode=disabled',
            name: 'Vue'
          },
          {
            path: '/content/vue/SecondTab.html?wcmmode=disabled',
            name: 'SecondTab'
          },
          {
            path: '/content/vue/ThirdTab.html?wcmmode=disabled',
            name: 'ThirdTab'
          },
          {
            path: '/content/vue/SuccessTab.html?wcmmode=disabled',
            name: 'SuccessTab'
          }
        ]
      }),
      render (createElement: Function) {
        return createElement(App, {
          props: {
            cqChildren: pageModel[Constants.CHILDREN_PROP],
            cqItems: pageModel[Constants.ITEMS_PROP],
            cqItemsOrder: pageModel[Constants.ITEMS_ORDER_PROP],
            cqPath: pageModel[Constants.PATH_PROP],
            isInEditor: AuthoringUtils.isInEditor(),
            locationPathname: window.location.pathname,
            injectPropsOnInit: true
          }
        })
      }
    }).$mount('#spa-root')
  })
})
