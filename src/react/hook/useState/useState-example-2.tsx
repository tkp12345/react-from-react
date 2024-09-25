export const UseStateExample2 = () => {
  const [counter, setCounter] = _React.useState(0)

  console.log(counter) //0
  setCounter(1)
  console.log(counter) //0

  return <></>
}

/*
  state 를 useState 의 외부에 선언 함으로 state 값 바꿀수 있음 

 문제 : 새로운 값을 참조안됨 초기 값 또는 이전에 반환된 값을 계속 참조
 해결방법 : 상태 업데이트시 , 컴포넌트 다시 렌더링 하여 상태를 재평가하여 클로저에 반영되도도록 해야함
 => 상태 변경 후 컴포넌트 다시 렌더링
 */
const _React = (function () {
  let state

  return {
    render(Component) {
      const Comp = Component()
      Comp.render()
      return Comp
    },

    useState(initialValue) {
      state ??= initialValue

      const setState = (newValue) => {
        state = newValue
      }

      return [state, setState]
    },
  }
})()
