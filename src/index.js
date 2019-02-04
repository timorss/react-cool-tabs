import React, { Component } from 'react';
import Row from './Row'
import { _tabStyle, _contentContainerStyle, _contentStyle, _activeBorderBottomStyle, _tabsBorderBottomStyle, buttonStyle } from './styles'

class CoolTabs extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tabKey: this.props.tabKey
    }
    this.onPressTab = this.onPressTab.bind(this)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.tabKey !== prevProps.tabKey) {
      this.setState({ tabKey: this.props.tabKey })
    }
  }

  onPressTab(key) {
    this.setState({ tabKey: key }, () => {
      this.props.onTabChanged && this.props.onTabChanged(key)
    })
  }


  renderBorderUnderTabs() {
    const {
      tabsBorderBottomStyle // if you want to have a border under the tabs
    } = this.props
    return <div style={{ ..._tabsBorderBottomStyle, ...tabsBorderBottomStyle }}></div>
  }

  renderActiveTabBorder() {
    const { tabKey } = this.state
    const { activeLeftTabBorderBottomClassName,
      activeRightTabBorderBottomClassName,
      activeLeftTabBorderBottomStyle, // border under the left tab if active
      activeRightTabBorderBottomStyle, // border under the right tab if active
      borderTransitionStyle // the border transition style, has to start with all, example : 'all 0.6s ease'
    } = this.props
    const _transformBorder1 = tabKey === '1' && { transform: 'translateX(0px)' }
    const _transformBorder2 = tabKey === '2' && { transform: 'translateX(100%)' }
    switch (tabKey) {
      case '1':
        return <div
          style={{
            ..._activeBorderBottomStyle,
            ..._transformBorder1,
            transition: borderTransitionStyle,
            ...activeLeftTabBorderBottomStyle
          }}
          className={activeLeftTabBorderBottomClassName}></div>
      case '2':
        return <div
          style={{
            ..._activeBorderBottomStyle,
            ..._transformBorder2,
            transition: borderTransitionStyle,
            ...activeRightTabBorderBottomStyle
          }}
          className={activeRightTabBorderBottomClassName}></div>
      default:
        break;
    }
  }

  render() {
    const { tabKey } = this.state
    const { className,
      style, // style of the Container the default is width:400, height:400
      tabsHeaderStyle, // the tabs part default here is height: 40
      tabsHeaderClassName, // the tabs part default here
      activeTabStyle, // the active tab style, u can also give style to the title font
      unActiveTabStyle, // the Unactive tab style, u can also give style to the title font
      leftTabStyle, // the left tab style only if you want different style for each tab. activeTabStyle and unActiveTabStyle is stronger than this
      rightTabStyle, // the right tab style, if you want different style to each tab, activeTabStyle and unActiveTabStyle is stronger than this
      activeTabClassName,
      leftTabClassName,
      rightTabClassName,
      unActiveClassName,
      leftTabTitleStyle, // if you want to give each title different style
      rightTabTitleStyle, // if you want to give each title different style
      leftTabTitleClassName,
      rightTabTitleClassName,
      leftTabTitle, // left title
      rightTabTitle, // right title
      contentContainerStyle, // contentContainerStyle, recommended just if you want to make the backgroundColor a gradient on the both tabs , else you can use leftContentStyle, and rightContentStyle
      leftContentStyle, // left content style
      rightContentStyle, // right content style
      leftContent, // content: component / text / img
      rightContent, // content: component / text / img
      leftContentClassName,
      rightContentClassName,
      contentTransitionStyle, // the content transition style, has to start with transform, example : 'transform 0.6s ease-in'
    } = this.props

    const _activeTab1 = tabKey === '1' ? activeTabStyle : unActiveTabStyle
    const _activeTab2 = tabKey === '2' ? activeTabStyle : unActiveTabStyle
    const _transformContent1 = tabKey === '1' ? null : { transform: 'translateX(100%)' }
    const _transformContent2 = tabKey === '2' ? null : { transform: 'translateX(-100%)' }

    return (
      <div className={className} style={{ height: 400, width: 400, ...style }}>
        <Row style={{ height: 40, position: 'relative', ...tabsHeaderStyle }} className={tabsHeaderClassName}>
          <button style={{ ...buttonStyle, ..._tabStyle, ...leftTabStyle, ..._activeTab1 }} className={`button-clean ${leftTabClassName} ${tabKey === '1' ? `${activeTabClassName}` : unActiveClassName}`}
            onClick={() => this.onPressTab('1')}>
            <div style={leftTabTitleStyle} className={leftTabTitleClassName}>
              {leftTabTitle}
            </div>
          </button>
          <button style={{ ...buttonStyle, ..._tabStyle, ...rightTabStyle, ..._activeTab2 }} className={`button-clean ${rightTabClassName} ${tabKey === '2' ? `${activeTabClassName}` : unActiveClassName}`}
            onClick={() => this.onPressTab('2')}>
            <div style={rightTabTitleStyle} className={rightTabTitleClassName}>
              {rightTabTitle}
            </div>
          </button>
          {this.renderBorderUnderTabs()}
          {this.renderActiveTabBorder()}
        </Row>
        <div style={{ ..._contentContainerStyle, ...contentContainerStyle }} className='contentContainer'>
          <div style={{
            ..._contentStyle,
            ..._transformContent1,
            ...leftContentStyle,
            transition: contentTransitionStyle
          }} className={`${leftContentClassName}`}>
            {/* first content */}
            <div>
              {leftContent}
            </div>
          </div>
          <div style={{
            ..._contentStyle,
            ..._transformContent2,
            ...rightContentStyle,
            transition: contentTransitionStyle
          }} className={`${rightContentClassName}`}>
            {/*  second content*/}
            {rightContent}
          </div>
        </div >
      </div >
    )
  }
}

export default CoolTabs;

CoolTabs.defaultProps = {
  leftTabTitle: 'Tab 1',
  rightTabTitle: 'Tab 2',
  leftContent: 'Content 1',
  rightContent: 'Content 2',
  tabKey: '1',
  // contentTransitionStyle: 'transform 1s ease',
  // borderTransitionStyle: 'all 1s ease',
};

// eslint-disable-next-line no-lone-blocks
{ /* <CoolTabs
  style={{ marginTop: 43, width: 550, height: 600 }}
  className={'cool-tabs'}
  firstTabTitle={(<IntlMessages id={'trade.deposit'} />)}
  secondTabTitle={(<IntlMessages id={'trade.withdraw'} />)}
  titleUpperCase
  firstTabClassName={'firstTab'}
  secondTabClassName={'secondTab'}
  unActiveClassName={'tabOff'}
  firstTabBorderClassName={'deposit-border'}
  secondTabBorderClassName={'withdraw-border'}
  firstContent={<TradeForm method={'buy'} />}
  secondContent={<TradeForm method={'sell'} />}
  transitionTypeClassName={'transition'}
/> */ }
