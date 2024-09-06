import React, { useState } from 'react'

/*
즉시 실행 함수를 통한 값의 초기화 예제

- useState는 컴포넌트가 렌더링될 때마다 호출
- 즉시실행함수 를 사용하면 해당 계산이 한 번만 실행
(그 함수가 선언되자마자 바로 호출되기 때문)

=> 특정 조건에 따라 동적으로 결정될 필요가 있는 경우 IIFE가 유용
 */
export const IifeStateExample = () => {
  const [state, setState] = useState(
    //즉시실행 함수 - (컴포넌트가 렌더링될 때 한 번만 실행)
    () => {
      const initialState = complexCalculation()
      return initialState
    },
  )

  return <div></div>
}

function complexCalculation() {
  // 복잡한 계산 로직
  return 'Calculated Value'
}
