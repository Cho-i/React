## props & state

리액트 컴포넌트에서 다루는 데이터는 두개임.

**props** : 부모 컴포넌트가 지식 컴포넌트에게 주는 값.

자식 컴포넌트에서는 props를 받아오기만하고 받아온 props를 직접 수정 할 수는 없음.

**state** : 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있음.

<br/>

### 컴포넌트 만들기

**src/MyName.js**

```jsx
import React, { Component } from 'react';

class MyName extends Component{
    render(){
        return(
        <div>안녕하세요! 제 이름은 <em>{this.props.name}</em>입니다.</div>
        );
    }
}

export default MyName;
```

받아온 props 값은 `this`키워드를 통해 조회 할 수 있음.

name 이라는 props를 보여주도록 설정.

<br/>

**src/App.js**

```jsx
import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
    render(){
        return(
            <MyName name="리액트" />
        );
    }
}

export default App;
```

import를 통해 컴포넌트를 불러옴. props 값은 `name="리액트"` 이렇게 태그의 속성을 설정.

<br/>

### defaultProps

props의 기본값을 설정할 수 있음.

```jsx
import React, { Component } from 'react';

class MyName extends Component{
    static defaultProps = {
        name: '기본이름'
    }
	render(){
        return (
        	<div>안녕하세요! 제 이름은 <em>{this.props.name}</em>입니다.</div>
        );
    }
}
export default MyName;
```

`<MyName />` 이렇게 name 값을 생략하면 '기본이름'이 나타남.

```jsx
import React, { Component } from 'react';

class MyName extends Component{
    render(){
        return(
        	<div>안녕하세요! 제 이름은 <em>{this.props.name}</em>입니다.</div>
        );
    }
}

MyName.defaultProps = {
    name:'기본이름'
};
export default MyName;
```

이렇게도 설정 할 수 있음.

함수형 컴포넌트에서 defaultProps를 설정할 땐 위 방식 처럼.

<br/>

### 함수형 컴포넌트

단순히 props만 받아와 보여주기만 하는 컴포넌트 경우엔 함수형태로 작성 가능.

```jsx
import React from 'react';

const MyName = ({ name }) => {
    return (
    	<div>안녕하세요! 제 이름은 {name}입니다</div>
    );
};

export default MyName;
```

함수형 컴포넌트는 state와 LifeCycle이 빠져있음. 그래서, 컴포넌트 초기 마운트가 미세하게 빠르고, 메모리 자원을 덜 사용함. 컴포넌트를 무수히 많이 렌더링 하게 되는게 아니라면 성능적으로 큰 차이는 없음.

<br/>

### State

동적인 데이터를 다룰 때!

**Counter.js**

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
```

<br/>

**App.js**

```jsx
import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <Counter />
    );
  }
}

export default App;
```

