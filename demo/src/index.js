import React, { Component } from 'react'
import { render } from 'react-dom'

import CoolTabs from '../../src/CoolTabs'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-cool-tabs Demo</h1>
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
            leftContentStyle={{ background: 'lightgreen', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            rightContentStyle={{ background: 'lightblue', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            leftTabTitle={'Left title'}
            rightTabTitle={'Right title'}
            leftContent={'component 1'}
            rightContent={'component 2'}
            contentTransitionStyle={'transform 0.6s ease-in'}
            borderTransitionStyle={'all 0.6s ease-in'}
          // leftTabTitleStyle={{ color: 'yellow' }}
          // rightTabTitleStyle={{ color: 'lightgreen' }}
          />
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
