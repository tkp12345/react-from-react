import { useState } from 'react'

const EXAMPLE_TEXT = 'apple'
export const Example = () => {
  const [value, setValue] = useState('')
  const [combo, setCombo] = useState(0)

  const isValid = EXAMPLE_TEXT === value
  const isValidElement = isValid ? '같음' : '다름'

  console.log(countCharObj(EXAMPLE_TEXT))

  return (
    <>
      {EXAMPLE_TEXT}
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      {isValidElement}
      {combo}
    </>
  )
}

const countCharObj = (str: string) => {
  if (!str.length) return

  const strArr = Array.from(str)
  const charNumObj: { [key: string]: any } = {}

  for (const char of strArr) {
    if (charNumObj[char]) {
      charNumObj[char] += 1
    } else {
      charNumObj[char] = 1
    }
  }
  return charNumObj
}
