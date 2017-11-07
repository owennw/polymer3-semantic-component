import { Element } from '@polymer/polymer/polymer-element'

import * as view from './home.html'

class Home extends Element {
  static get is() { return 'home-app'}

  static get template() { return view }
}

export default Home
