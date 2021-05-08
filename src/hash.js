import {BaseRouter} from './base'

export class HashRouter extends BaseRouter {
  constructor(el, routeList) {
    super(el, routeList)
    // 首次渲染
    this.handler()
    // hash 变更重新渲染
    window.addEventListener('hashchange', () => {
      this.handler()
    })
  }

  // 渲染
  handler() {
    super.render(this.getState())
  }

  getState() {
    const hash = window.location.hash
    return hash ? hash.slice(1) : '/'
  }

  getUrl(path) {
    const href = window.location.href
    const i = href.indexOf('#')
    const base = i >= 0 ? href.slice(0, i) : href
    return `${base}#${path}`
  }

  push(path) {
    window.location.hash = path;
  }

  replace(path) {
    // 如果base（#前面）发生变化会导致页面刷新，path（#后面）部分变化不会导致页面变化
    window.location.replace(this.getUrl(path));
  }

  go(n) {
    window.history.go(n);
  }
}