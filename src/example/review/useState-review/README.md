## useState 올바른 초기화 

----


```typescript
  const [KR, setKR] = useState('')

  useEffect(() => {
    if (value !== null) {
      setKR(value.toLocaleString)
    } else {
      setKR('')
    }
  })
```

Q : KR의 초기화가 두번되고 있는것같다 
A : 아니다 

현재 초기 렌더링시 
```typescript
  const [KR, setKR] = useState('')
```

useEffect 내부 
```typescript
      setKR('')
```

KR값을 초기화 하고 있지만 
이는 문제가 되지않습니다 <br/>
왜냐하면  `react`는 상태가 변경되지 않았음을 인지하고 불필요한 재렌더링을 방지하기 떄문입니다 
<br/><br/>

조금더 자세히 설명하면 `react` 내부적으로 상태관리를  `불변성`을 기반으로 이루어지기 때문입니다 <br/>
상태가 `불변 객체`로 관리 즉, 상태가 변경될때 기존상태를 변경하지않고 새로운 상태를 만들어내는 방식입니다 

```typescript
function setState(newState) {
    if (newState === previousState) {
        // 새로 설정된 상태와 이전 상태가 동일하다면 재렌더링을 하지 않음
        return;
    }

    // 상태가 다를 때만 컴포넌트를 재렌더링함
    scheduleRender();
}
```

`ReactFiberWorkLoop.js` 참조  