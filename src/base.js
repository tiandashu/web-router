// hash 和 history 公用的逻辑
// 两种模式都需要调用一个方法来实现不同路由内容的刷新
export class BaseRouter {
  constructor(el, routeList) {
    this.view = document.querySelector(el)
    this.routeList = routeList
  }
  render(state) {
    let ele = this.routeList.find(ele => ele.path === state)
    ele = ele ? ele : this.routeList.find(ele => ele.path === '*')
    this.view.innerHTML = ele.component
  }
}