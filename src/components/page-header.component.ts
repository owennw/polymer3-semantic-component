import { Element } from '@polymer/polymer/polymer-element'

import * as view from './page-header.component.html'
import * as css from './page-header.component.postcss'

import { createTemplate } from '../util'

class PageHeader extends Element {
  static get is() { return 'page-header' }

  static get template() { return createTemplate(view)(css) }

  static get properties() {
    return {
      title: {
        type: String
      }
    }
  }
}

export default PageHeader
