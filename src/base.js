// hash 和 history 公用的逻辑
// 两种模式都需要调用一个方法来实现不同路由内容的刷新
const view = document.querySelector('#app')

export class BaseRouter {
  constructor(routeList) {
    this.routeList = routeList
  }
  render(state) {
    let ele = this.routeList.find(ele => ele.path === state)
    ele = ele ? ele : this.routeList.find(ele => ele.path === '*')
    view.innerHTML = ele.component
  }
}