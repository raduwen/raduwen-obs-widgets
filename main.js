import TimeWidget from './widgets/time'

class Widgets {
  constructor() {
    this.el = document.createElement('div')
    this.el.id = 'widgets'
    this.widgets = []
  }

  add(widget) {
    this.widgets.push(widget)

    widget.el.classList.add('widget')
    this.el.append(widget.el)
  }
}

(() => {
  const widgets = new Widgets()
  document.body.append(widgets.el)

  const time = new TimeWidget()
  widgets.add(time)

  setInterval(() => { time.update() }, 1000)
})()

window.widget_debug = function () {
  document.getElementById('widgets').classList.toggle('debug')
}
