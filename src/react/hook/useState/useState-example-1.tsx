export const UseStateExample1 = () => {
  const [counter, setCounter] = useState(0)

  console.log(counter) //0
  setCounter(1)
  console.log(counter) //0

  return <></>
}

/*
 문제 : useState 사용할때  반환 하게되면 state 는 변경 할수 없는 상태가된다
 해결방법 => useState-example-2
 */
const useState = (initialValue) => {
  let state = initialValue

  const setState = (newValue) => {
    state = newValue
  }

  return [state, setState]
}
