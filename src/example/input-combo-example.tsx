import type { ChangeEvent } from 'react'
import React, { useEffect, useState } from 'react'

const DEFAULT_TEXT = 'apple'
export const Test2 = () => {
  const [inputValue, setInputValue] = useState('')
  const [combo, setCombo] = useState(0)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value.trim()
    setInputValue(userInput)
  }

  useEffect(() => {
    const isExactMatch = inputValue === DEFAULT_TEXT

    const matchCount = [...DEFAULT_TEXT].filter((char) => inputValue.includes(char)).length

    if (isExactMatch) {
      return setCombo(DEFAULT_TEXT.length)
    }
    return setCombo(matchCount)
  }, [inputValue])

  return (
    <div>
      DEFAULT_TEXT: {DEFAULT_TEXT}
      <div>
        <input value={inputValue} onChange={handleChange} />
      </div>
      Combo:{combo}
      {inputValue === DEFAULT_TEXT && <div>일치</div>}
    </div>
  )
}
