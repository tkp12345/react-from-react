
<h1 align="center">React Error Boundary</h1>

**react-error-boundary 를 구현하고 개선해 봅시다** 

>**[ 개선 ]**</br>
> - 선언형 컴포넌트 방식을 사용하기위해, 각 에러에대해 무엇을 보여줄지 내부적으로 처리할수있도록  개선

```typescript
 - async-boundary.tsx 
 - error-boundary.tsx 
```


</br>

- **React Query 에서 제공하는 Suspense와 Error Boundary를 활용 ( Fallback UI 처리 )**
```
  const { data } = useQuery(queryKey, queryFn, {
    suspense: true, //Suspense를 활성화하는 옵션
    
    useErrorBoundary: true, //ErrorBoundary로 에러를 바로 던져줌 (suspense : true 시 default true)
  });
```

- **비동기 요청 Waterfall 해결하기**