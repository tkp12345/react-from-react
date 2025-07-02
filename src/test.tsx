import React, {useCallback, useRef, useState} from 'react'

const CHECKED_DATA = [
  { id: 'a', label: '항목 1' },
  { id: 'b', label: '항목 2' },
  { id: 'c', label: '항목 3' },
]



const Test = () => {
  const [checked, setChecked] = useState(['a', 'b'])

  const historyRef = useRef<string[][]>([[]]);
  const currentIndexRef = useRef<number>(0) //현재 위치

  const updateChecked = (next: string[]) =>{
    const history = historyRef.current.slice(0, currentIndexRef.current + 1)

    history.push(next);
    historyRef.current = history
    currentIndexRef.current = history.length -1
    setChecked(next)
  }

  // const [checkedRadio, setCheckedRadio] = useState(false)
  const allChecked = CHECKED_DATA.length === checked.length

  const handleCheck = useCallback((id: string) => {
    console.log('id:',id)
    setChecked((prev) => {

      const next = prev.includes(id) ? prev.filter(v=>v !== id ): [...prev,id]

      updateChecked(next)
      return next
    })
  }, [])

  const handleAllCheck = () => {
    // setAllCheckedRadio()



    if (!allChecked) {
      setChecked(CHECKED_DATA.map((item) => item.id))
    } else {
      setChecked([])
    }
  }

  // const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setCheckedRadio(e.target.checked)
  // }

  return (
    <div>
      <CheckBox checked={allChecked} label={'전체 선택'} handleChange={handleAllCheck} />
      {CHECKED_DATA.map((item) => {
        return (
          <CheckBox
            key={item.id}
            checked={checked.includes(item.id)}
            label={item.label}
            handleChange={() => handleCheck(item.id)}
          />
        )
      })}

      {/*<label>*/}
      {/*  <input type="radio" checked={checkedRadio} onChange={handleChangeRadio} />*/}
      {/*  동의*/}
      {/*</label>*/}
      {/*<p>현재 상태 : {checkedRadio ? '체크' : '체크 안됨'}</p>*/}
    </div>
  )
}

export default Test

const CheckBox = React.memo(({ checked, label, handleChange }) => {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      {label}
      <p>현재 상태 : {checked ? '체크됨' : '체크 안됨'}</p>
    </label>
  )
})
