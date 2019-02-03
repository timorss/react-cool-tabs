import React, { Component } from 'react'
import { render } from 'react-dom'

import CoolTabs from '../../src'
const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 15,
  fontSize: 24
}
class Content1 extends Component {
  render() {
    return <div style={style}>
      this is Content1
    </div>
  }
}
class Content2 extends Component {
  render() {
    return <div style={style}>
      this is Content2
    </div>
  }
}

class Demo extends Component {
  render() {
    return <div>
      <CoolTabs
        tabKey={'1'}
        style={{ width: 550, height: 500, background: 'white' }}
        activeTabStyle={{ background: 'red', color: 'white' }}
        leftTabStyle={{ background: '#53b9ea' }}
        rightTabStyle={{ background: '#53b9ea' }}
        unActiveTabStyle={{ background: 'green', color: 'black' }}
        activeLeftTabBorderBottomStyle={{ background: 'blue', height: 4 }}
        activeRightTabBorderBottomStyle={{ background: 'yellow', height: 4 }}
        tabsBorderBottomStyle={{ background: 'orange', height: 4 }}
        leftContentStyle={{ background: 'lightgreen' }}
        rightContentStyle={{ background: 'lightblue' }}
        leftTabTitle={'Left title'}
        rightTabTitle={'Right title'}
        leftContent={<Content1 />}
        rightContent={<Content2 />}
        contentTransitionStyle={'transform 0.6s ease-in'}
        borderTransitionStyle={'all 0.6s ease-in'} />
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
