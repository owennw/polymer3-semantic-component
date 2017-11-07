import { Element } from '@polymer/polymer/polymer-element'

import * as view from './page.component.html'
import * as css from './page.component.postcss'

import { createTemplate } from '../util'

class Page extends Element {
  static get is() { return 'my-page' }

  static get template() { return createTemplate(view)(css) }
}

export default Page
