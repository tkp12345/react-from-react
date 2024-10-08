import { useEffect, useState } from 'react'

export const Mother = () => {
  const [language, setLanguage] = useState('안녕')
  const onClickHandler = () => {
    setLanguage('hello')
  }

  return (
    <>
      <button style={{ width: '100px', height: '100px' }} onClick={onClickHandler}>
        {language}
      </button>
      <TestRefactor value={''} />
    </>
  )
}

// useState 초기화 로직 수정
export const TestRefactor = ({ value }) => {
  const [KR, setKR] = useState('')

  useEffect(() => {
    if (value !== null) {
      setKR(value.toLocaleString)
    } else {
      // react 내부적으로 최적화 하기때문에 초기값을 ' ' 로 설정해도된다
      setKR('')
    }
  })

  return <div>TEST : {KR}</div>
}
