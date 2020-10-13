# rc-textarea demo

这个项目主要学习基本的 TS 组件化功能

Pretty Textarea react component used in [ant.design](https://ant.design).

## Live Demo

https://react-component.github.io/textarea/

## Install

[![rc-textarea](https://nodei.co/npm/rc-textarea.png)](https://npmjs.org/package/rc-textarea)

## Usage

```js
import Textarea from 'rc-textarea';
import { render } from 'react-dom';

render(<Textarea />, mountNode);
```

## API

| Property     | Type                        | Default     | Description                                                                                    |
| ------------ | --------------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| prefixCls    | string                      | rc-textarea |                                                                                                |
| className    | string                      | ''          | additional class name of textarea                                                              |
| style        | React.CSSProperties         | -           | style properties of textarea                                                                   |
| autoSize     | boolean \| object           | -           | Height autosize feature, can be set to `true\|false` or an object `{ minRows: 2, maxRows: 6 }` |
| onPressEnter | function(e)                 | -           | The callback function that is triggered when Enter key is pressed                              |
| onResize     | function({ width, height }) | -           | The callback function that is triggered when resize                                            |

## Development

```
npm install
npm start
```