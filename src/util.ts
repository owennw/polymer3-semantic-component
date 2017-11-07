import WindowService from './window-service'

const window = new WindowService().window

export const register = (components: object) => {
  Object.keys(components).forEach(c => {
    if (components.hasOwnProperty(c)) {
      const value = components[c]
      window.customElements.define(value.is, value)
    }
  })
}

export const createTemplate = view => css => `<style>${css}</style> ${view}`