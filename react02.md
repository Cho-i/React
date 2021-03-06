## 리액트 프로젝트 시작하기

리액트 프로젝트는 단순히 `<script src="..."</script>` 의 형태로 사용하지 않음. 할수는 있으나 제한적임.

리액트 프로젝트를 제대로 작업하려면 Node, yarn, Webpack, Babel등의 도구를 설치해 프로젝트 설정.

페이스북에서 제공해주는 도구를 통해 간단히 준비할 수 있음.

[create-react-app]: https://github.com/facebook/create-react-app

<br/>

### Webpack, Babel, JSX

컴포넌트를 여러가지 파일로 분리해서 저장, 일반 자바스크립트가 아닌 JSX라는 문법으로 작성하게 됨.

여러가지 파일을 한개로 결합하기 위해 Webpack 이라는 도구를 사용.

JSX를 비롯한 새로운 자바스크립트 문법들을 사용하기 위해 Babel 사용.

<br/>

- Node.js : Webpack과 Babel 같은 도구들이 자바스크립트 런타임인 Node.js 를 기반으로 만들어짐.
- Yarn : Yarn은 조금 개선된 버전의 npm. npm은 Node.js를 설치할 때 같이 딸려오는 패키지 매니저 도구. 프로젝트에서 사용되는 라이브러리를 설치하고 해당 라이브러리들의 버전 관리를 하게 될 때 사용. **더 나은 속도, 더 나은 캐싱 시스템**을 사용하기 위해.

<br/>

### create-react-app

리액트 앱을 만들어주는 도구 설치.

`npm install -g create-react-app`

`yarn global add create-react-app`

<br/>

hello-react 프로젝트 생성.

`create-react-app hello-react`

<br/>

리액트 프로젝트 시작.

`cd hello-react `

`yarn start`

