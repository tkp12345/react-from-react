<h1 align="center">VirtualDom</h1>

** ** 

**JSX가 가상 DOM 요소로 변환되는 과정은 React 내부에서 처리 되곤합니다**
```typescript
function App() {
  return <h1>Hello, World!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));

```
react 초기 설정시 우리가 마주 하게되는 코드입니다
<br/>

ReactDOM.render 함수가 호출될떄
<br/>

App 컴포넌트의 JSX가 가상 DOM 요소로 변환됩니다
<br/>

UI의 효율적이고 빠른 렌더링을 가능 하게하는
<br/>

이마법을 react 코드로 따라해 봅시다 

___


**React DOM**  : 웹 브라우저 환경에서 React 컴포넌트를 DOM 요소로 렌더링하는 역할 , 
React 자체는 UI 컴포넌트를 만드는 데 집중 
<br/>
<br/>
**Render a component to a DOM element** :
<br/>
<br/>
**Render** : React 컴포넌트를 실제 브라우저의 DOM 요소로 변환, 페이지에 표시하는 과정






