import {ROUTELIST} from './routeList'
import {HashRouter} from './hash'
import {HistoryRouter} from './history'


export default class WebRouter {
  constructor({mode = 'hash', routeList = ROUTELIST }) {
    this.mode = mode
    this.router = mode === 'hash' ? new HashRouter(routeList) : new HistoryRouter(routeList)
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
