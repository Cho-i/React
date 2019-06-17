## JSX

### 컴포넌트 파일

![img](https://i.imgur.com/v4xX4Tr.png)

hello-react 프로젝트가 다음과 같이 구성되어 있을것.

리액트를 사용하면 웹 애플리케이션에서 사용하는 유저 인터페이스를 재사용 가능한 컴포넌트로 분리하여 작성함으로서, 프로젝트의 유지보수성을 우수하게 해줌.

<br/>

**App.js (컴포넌트에 해당하는 코드를 확인해 볼 수 있음)**

```jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

<br/>

> **ES2015(ES6)**
>
> <u>기본이 ES6라 많이 공부해야 할듯.</u>
>
> 모듈 import/export : <https://poiemaweb.com/es6-module>
>
> Class : <https://poiemaweb.com/es6-class>
>
> 쥬팀 ES6 정리 : [https://github.com/jewdri-kim/javascriptStudy/blob/master/ES6/1%EC%9E%A5%20%EB%AC%B8%EB%B2%95%EB%A7%9B%EB%B3%B4%EA%B8%B0_v2.md](https://github.com/jewdri-kim/javascriptStudy/blob/master/ES6/1장 문법맛보기_v2.md)
>
> 전에 Vue에서 정리한거 : <https://cho-i.github.io/Vue-Quick-Start/07/>
>

<br/>

import 한다는건 무엇을 불러온다는 것.

```jsx
//리액트와 그 내부의 Component를 불러옴
import React, { Component } from 'react';
//같은 디렉토리에 있는 파일 logo.svg 과 App.css 파일을 불러옴
import logo from './logo.svg';
import './App.css';
```

<br/>

컴포넌트를 만드는 방법은 두가지 (클래스 or 함수)

**클래스**

```jsx
import React, { Component } from 'react';

class App extends Component{
    render(){
        return(
        	...
        );
    }
}
```

리액트에서 컴포넌트를 정의 할 때 보통 class 문법 사용. 컴포넌트에서 라이프사이클 API를 사용해야 하거나, state를 사용하는 경우에는 이렇게 정의.

클래스 형태로 만들어진 컴포넌트에는 꼭, render 함수가 있어야 함.

그리고 그 내부에서는 JSX를 return 해주어야 함.

**함수**

```jsx
import React from 'react';

function App(){
    return(
    	...
    )
}
```

컴포넌트가 라이프사이클 API & state 사용 안하고, 그냥 props만 전달해 뷰를 렌더링만 해주는 역할이라면 함수형 컴포넌트 형식으로 정의 할 수 있음.

<br/>

작성한 컴포넌트를 다른 곳에서 불러와서 사용 할 수 있도록 내보내기를 해줌.

```jsx
export default App;
```

<br/>

**index.js**

만든 컴포넌트를 불러올 때는 import를 사용해서 불러옴.

```jsx
import App from './App';
```

<br/>

브라우저 상에 리액트 컴포넌트를 보여주기 위해서 `ReactDOM.render` 함수를 사용. 

첫번째 파라미터는 렌더링 할 결과물, 두번째 파라미터는 컴포넌트를 어떤 DOM에 그릴지 정해줌.

```jsx
ReactDOM.render(<App />, document.getElementById('root'));
```

id가 root인 DOM을 찾아서 그리도록 설정. 

<br/>

**public/index.html**

```html
<div id="root"></div>
```

이 부분을 찾아서 렌더링 해줌.

<br/>

### JSX



![img](https://i.imgur.com/SZshYmi.png)

**JSX : React 라이브러리에서 UI를 구성할 때 사용하는 구문으로 Javascript의 extension이라고 할 수 있음.**

<https://babeljs.io/repl>

리액트 개발을 쉽게 하기 위해, HTML과 비슷한 문법으로 작성을 하면 이를 React.createElement를 사용하는 자바스크립트 형태로 변환시켜줌.

XML 형태의 코드를 자바스크립트로 변환해야 하기 때문에 JSX를 제대로 사용하기 위해 몇가지 규칙을 준수해야함.

<br/>

#### 태그를 꼭 닫아야함

`<div></div>`

`<input/>`

`<br/>`

태그를 안 닫으면 <u>오류</u>남.

<br/>

#### 감싸져 있는 엘리먼트

두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져야함.

1.div로 감싸기.

```jsx
import React, { Component } from 'react';

class App extends Component{
    render(){
        return(
        	<div>
            	<div>Hello</div>
                <div>Bye</div>
            </div>
        );
    }
}
export default App;
```

단순히 감싸기 위해 새로운 div를 사용하는게 스타일 관련 , table 관련 태그를 작성 할 때 번거로워 질 수 있음.

<br/>

2.Fragment 사용(v16.2)

```jsx
//Fragment를 React를 import 하는 라인에서 같이 import함
import React, { Component, Fragment } from 'react';

class App extends Component{
    render(){
        reutrn(
        	<Fragment>
            	<div>Hello</div>
                <div>Bye</div>
            </Fragment>
        );
    }
}
export default App;
```

Fragment : <https://ko.reactjs.org/docs/fragments.html>

Fragment 태그는 React에서 div를 추가해 감싸고 싶지는 않지만 다른 태그를 감쌀 필요성이 있을 때 사용할 수 있도록 React에서 제공하는 태그.

Fragment를 사용하는 3가지 방법 : <https://stackoverflow.com/questions/52330679/whats-the-difference-between-importing-reacts-fragment-from-react-and-react>

아직 많은 툴에서 지원을 하지 않아 `React.Fragment` 라고 사용하는 것이 좋음.

<br/>

#### JSX 안에 자바스크립트 값 사용하기

```jsx
import React, { Component } from 'react';

class App extends Component{
    render(){
        const name = 'react';
        return(
        	<div>
            	hello {name}!
            </div>
        );
    }
}
export default App;
```

JSX 안에서 JavaScript 값을 사용할 땐 중괄호를 사용함.

중괄호 안에 변수명을 입력하거나 JavaScript 계산식, 값 등을 넣을 수 있음.

<br/>

> **ES2015(ES6)**
>
> const : 한번 선언하고 바뀌지 않는 값
>
> let : 바뀌게 될 수 있는 값

<br/>

**var 와 작동 방식에 있어서 scope가 다름**

var 는 scope가 함수 단위

```js
function foo(){
    var a = 'hello';
    if(true){
        var a= 'bye';
        console.log(a); //bye
    }
    console.log(a); //bye
}
```

const 와 let 은 scope가 블록 단위

```js
function foo(){
    let a = 'hello';
    if(true){
    	let a = 'bye';
        console.log(a); //bye
    }
    console.log(a); //hello
}
```

<br/>

#### 조건부 렌더링

JSX 내부에서 조건부 렌더링을 할 때 삼항 연산자를 사용하거나 AND 연산자 사용.

**if문을 사용하려면 **IIFE(즉시 실행 함수 표현)을 사용해야함.

즉시 실행 함수 표현(IIFE, Immediately Invoked Function Expression) : <https://developer.mozilla.org/ko/docs/Glossary/IIFE>

IIFE은 정의되자마자 즉시 실행되는 Javascript Function.

```javascript
(function () {
    statements
})();
```

<br/>

**삼항연산자**

```jsx
import React, { Component } from 'react';

class App extends Component{
    render(){
        return(
        	<div>
            	{
                    1 + 1 === 2
                      ? (<div>맞음</div>)
                      : (<div>아님</div>)
                }
            </div>
        );
    }
}
export default App;
```

<br/>

**AND 연산자**

```jsx
import React, { Component } from 'react';

class App extends Component{
    render(){
        return(
        	<div>
            	{
                    1 + 1 === 2 && (<div>맞음</div>)
                }
            </div>
        );
    }
}
export default App;
```

삼항연산자는 true/false 일 때 다른것들을 보이게, AND 연산자는 단순히 조건이 ture 일 때만 보이게 하고 flase 일때는 아무것도 보이지 않게함.

<br/>

**IIFE(즉시 실행 함수 표현)**

```jsx
import React, { Component } from 'react';

class App extends Component{
    render(){
        const value = 1;
        return(
            <div>
            	{
                    (function(){
                        if (value === 1) return (<div>일</div>);
                        if (value === 2) return (<div>이</div>);
                        if (value === 3) return (<div>삼</div>);
                    })()
                }
            </div>        
        );
    }
}
export default App;
```

대부분 삼항, AND 연산자로 해결 할 수 있지만, 복잡한 조건을 작성해야 할때는 웬만하면 JSX 밖에서 로직을 작성하는것이 좋음. 꼭 JSX 내부에 작성해야 한다면, IIFE를 사용.

<br/>

**화살표함수**

```jsx
(() => {
    if(value === 1) return (<div>일</div>);
    if(value === 2) return (<div>이</div>);
    if(value === 3) return (<div>삼</div>);
})()
```

> 화살표 함수 : <https://poiemaweb.com/es6-arrow-function>
>
> 화살표 함수 표현(arrow function exprssion)은 function 표현에 비해 구문이 짧고 자신의 this, arguments, super, new.target을 바인딩 하지 않음. 
>
> 화살표 함수는 항상 익명, 메소드 함수가 아닌 곳에 가장 적합. 
>
> 생성자로 사용할 수 없음.

<br/>

#### style & className

**style**

```jsx
import React, { Component } from 'react';

class App extends Component{
    render(){
        const style = {
            backgroundColor:'black',
            padding:'16px',
            color:'white',
            fontSize:'12px'
        };
        return(
            <div>
                <div style={style}>
                    hi there
                </div>
                <div style={{backgroundColor:'black',color:'white'}}>
                    hi there
                </div>
            </div>
        );
    }
}
export default App;
```

html 에서는 `"backgroundColor:black;padding:16px;..."` ,

리액트에서 스타일 속성은 중괄호({}) 안에 객체 형태로 표시하며 단어 사이의 ‘-‘를 없애는 대신 카멜케이스(Camel Case)를 사용해 CSS 프로퍼티를 나타냄.

<br/>

**className**

App.css

```css
.App{
    background:#000;
    color:pink;
    font-size:36px;
    padding:1rem;
    font-weight:600;
}
```

<br/>

App.js

```jsx
import React, { Component } from 'react';
import './App.css';

class App extends Component{
    render(){
        return(
        	<div className="App">리액트</div>
        );
    }
}
export default App;
```

html 에서는 `<div class="App"></div>` ,

리액트 컴포넌트에서는 class 대신에 className을 사용.

<br/>

#### 주석

```jsx
import React, { Component } from 'react';

class App extends Component{
    render(){
        return(
        	<div>
                {/* 주석 달기 */}
                <h1 //태그사이에 달기
                    >리액트</h1>            
            </div>
        );
    }
}
export default App;
```

`{/* ... */}` or `//...` 태그 사이에 넣을 수도 있음.

