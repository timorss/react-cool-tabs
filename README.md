# react-cool-tabs

Very comftable package to use tabs.

## Installation

 Install react-common-admin
	```
npm i react-cool-tabs --save
	```



## Usage

```jsx
import  React  from  'react';
import CoolTabs from 'react-cool-tabs';


export  default  class  Example  extends  React.Component {
render() {
   return (
     <div>
	<CoolTabs
	tabKey={'1'}
	style={{ width:  550, height:  500, background:  'white' }}
	activeTabStyle={{ background:  'red', color:  'white' }}
	leftTabStyle={{ background:  '#53b9ea' }}
	rightTabStyle={{ background:  '#53b9ea' }}
	unActiveTabStyle={{ background:  'green', color:  'black' }}
	activeLeftTabBorderBottomStyle={{ background:  'blue', height:  4 }}
	activeRightTabBorderBottomStyle={{ background:  'yellow', height:  4 }}
	tabsBorderBottomStyle={{ background:  'orange', height:  4 }}
	leftContentStyle={{ background:  'lightgreen' }}
	rightContentStyle={{ background:  'lightblue' }}
	leftTabTitle={'Left title'}
	rightTabTitle={'Right title'}
	leftContent={<Content1>}
	rightContent={<Content2/>}
	contentTransitionStyle={'transform 0.6s ease-in'}
	borderTransitionStyle={'all 0.6s ease-in'}/>
     </div>
);
}}
```

## Props
| key | type | Description|
|-----|--|--|
|style|object|The style of the Container. <br />the default is width: 400, height: 400|
|tabsHeaderStyle|object|The style of the tabs part default here is height: 40|
|activeTabStyle|object|The active tab style, u can also give style to the title font|
unActiveTabStyle|object| The Unactive tab style, u can also give style to the title font
leftTabStyle|object| The left tab style only if you want different style for each tab.<br /> **<small>activeTabStyle and unActiveTabStyle is stronger than this!</small>**| 
rightTabStyle|object| The right tab style only if you want different style for each tab.<br /> **<small>activeTabStyle and unActiveTabStyle is stronger than this!</small>**| 
leftTabTitleStyle|object|The left title style if you want to give each title different style
rightTabTitleStyle|object|The right title style if you want to give each title different style
leftTabTitle|string|Left title name
rightTabTitle|string|Right title name
tabsBorderBottomStyle|object|the border under the tabs|
activeLeftTabBorderBottomStyle|object|border under the **left** tab if active|
activeRightTabBorderBottomStyle|object|border under the **right** tab if active|
contentContainerStyle|object| Recommended just if you want to make the backgroundColor a gradient on both tabs **content** , else you can use leftContentStyle, and rightContentStyle
leftContentStyle|object|The left content style|
rightContentStyle|object|the right content style|
leftContent|component/text/img|The content you want to have when you on the left tab|
rightContent|component/text/img|The content you want to have when you on the right tab|
contentTransitionStyle|string|the speed and type of transition.<br />**example:** 'transform 0.6s ease-in' <br />**has to start with the word 'transition'!**|
borderTransitionStyle|string|The border transition style.<br /> **example:**  'all 0.6s ease'<br />**has to start with the word 'all'!**|

