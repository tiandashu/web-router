import {BaseRouter} from './base'
export class HistoryRouter extends BaseRouter {
  constructor(routeList) {
    super(routeList)
    
    this.handler()
    window.addEventListener('popstate', () => {
      this.handler()
    })
  }

  handler() {
    super.render(this.getState())
  }

  getState() {
    let path = window.location.pathname
    path = path ? path : '/'

    return path
  }

  push(path) {
    // pushState() 不会造成 hashchange (en-US) 事件调用
    // pushState() 不会造成 popstate (en-US) 事件调用
    // 使用 pushState() 而不是使用 window.location.pathname = path, 是为了避免页面刷新
    window.history.pushState(null, null, path)

    // 手动出发
    this.handler()
  }

  replace(path) {
    // 同上
    history.replaceState(null, null, path);
    this.handler();
  }

  go(n) {
    window.history.go(n);
  }
}