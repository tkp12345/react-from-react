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
      <Test value={''} />
    </>
  )
}

const Test = ({ value }) => {
  const [KR, setKR] = useState(() => value.toLocaleString())

  useEffect(() => {
    if (value == null) {
      setKR(null)
    } else {
      setKR(value.toLocaleString())
    }
  }, [value])

  return <div>TEST : {KR}</div>
}
