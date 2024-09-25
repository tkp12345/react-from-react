export const UseStateExample3 = () => {
  const [counter, setCounter] = _React.useState(0)
  const [alpha, setAlpha] = _React.useState('Abc')

  console.log(counter) //0
  console.log(alpha) //0

  return <></>
}

/*
_React.render 함수가 호출될 때마다 componentToRender에 현재 렌더링할 컴포넌트를 추적

 문제 :  counter alpha 상태 모두 같은 state 변수를 참조 (useState 호출이 모두 같은 state 값을 참조)
 해결방법 : useState도 내부적으로 각 컴포넌트와 그 컴포넌트의 상태를 따로 관리
 */
const _React = (function () {
  let state
  let componentToRender

  return {
    // 컴포넌트 렌더 , 현재 렌더 중인 컴포넌트 저장
    render(Component) {
      componentToRender = Component //렌더링할 컴포넌트 추적
      const Comp = Component() // 컴포넌트 함수 호출
      Comp.render()
    },

    useState(initialValue) {
      state ??= initialValue

      const setState = (newValue) => {
        state = newValue
        _React.render(componentToRender) // 현재 렌더중 컴포넌트 재랜더
      }

      return [state, setState]
    },
  }
})()
