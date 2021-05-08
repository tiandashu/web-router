import {ROUTELIST} from './routeList'
import {HashRouter} from './hash'
import {HistoryRouter} from './history'


export default class WebRouter {
  constructor({el = '#app', mode = 'hash', routeList = ROUTELIST }) {
    this.router = mode === 'hash' ? new HashRouter(el, routeList) : new HistoryRouter(el, routeList)
  }

  push(path) {
    this.router.push(path)
  }

  replace(path) {
    this.router.replace(path)
  }

  go(num) {
    this.router.go(num)
  }
}
