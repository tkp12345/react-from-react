interface DefaultErrorFallBackProps {
    reset?: () => void
}
export const DefaultErrorFallBack = ({reset}:DefaultErrorFallBackProps) => {
    return (
        <div>
            <div>데이터를 불러오는데 실패하였습니다.</div>
            <button onClick={reset}>다시 시도</button>
        </div>
    )
}