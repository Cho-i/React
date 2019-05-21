## JSX

<!--React 라이브러리에서 UI를 구성할 때 사용하는 구문으로 Javascript의 extension이라고 할 수 있음.-->

리액트를 사용하면 웹 애플리케이션에서 사용하는 유저 인터페이스를 재사용 가능한 컴포넌트로 분리하여 작성함으로서, 프로젝트의 유지보수성을 우수하게 해줌.

**App.js (컴포넌트에 해당하는 코드)**

```jsx
//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
```

import 한다는건 무엇을 불러온다는 것.

파일에서 JSX를 사용하려면,  꼭 React를 import 해줘야함.

import를 하는것은 webpack을 사용하기에 가능한 작업. 이렇게 불러오고나면 나중에 프로젝트를 빌드하게 됐을 때 웹팩에서 파일의 확장자에 따라 다른 작업을 하게 됨.

컴포넌트를 만드는 방법은 두가지 [클래스 or 함수]

**함수**

```jsx
function App(){
    return(
    	...
    )
}
```

**클래스**

```jsx
class App extends Component{
    render(){
        return(
        	...
        );
    }
}
```

클래스 형태로 만들어진 컴포넌트에는 꼭, render 함수가 있어야 함.

그리고 그 내부에서는 JSX를 return 해주어야 함.



작성한 컴포넌트를 다른 곳에서 불러와서 사용 할 수 있도록 내보내기를 해줌.

```jsx
export default App;
```



**index.js**

만든 컴포넌트를 불러올 때는 import를 사용해서 불러옴.

```jsx
import App from './App';
```



브라우저 상에 리액트 컴포넌트를 보여주기 위해서 `ReactDOM.render` 함수를 사용. 

첫번째 파라미터는 렌더링 할 결과물, 두번째 파라미터는 컴포넌트를 어떤 DOM에 그릴지 정해줌.

```jsx
ReactDOM.render(<App />, document.getElementById('root'));
```

id가 root인 DOM을 찾아서 그리도록 설정. 



**public/index.html**

```html
<div id="root"></div>
```

이 부분을 찾아서 렌더링 해줌.



![img](https://i.imgur.com/SZshYmi.png)

리액트 개발을 쉽게 하기 위해, HTML과 비슷한 문법으로 작성을 하면 이를 React.createElement를 사용하는 자바스크립트 형태로 변환시켜줌.

XML 형태의 코드를 자바스크립트로 변환해야 하기 때문에 JSX를 제대로 사용하기 위해 몇가지 규칙을 준수해야함.



**태그를 꼭 닫아야함**

`<div></div>`

`<input/>`

`<br/>`

태그를 안 닫으면 오류남.



**감싸져 있는 엘리먼트**

두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져야함.