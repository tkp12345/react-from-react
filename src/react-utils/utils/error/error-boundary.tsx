import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    message?: string;
    fallback?: ReactNode;
    resetQuery?: () => void
}

interface State {
    hasError: boolean;
    error: Error | null
}

const initialState: State = { hasError: false, error: null }


export class ErrorBoundary extends Component<Props, State> {
    //erro상태 초기화
    state: State = {
        hasError: false,
        error:null,
    };

    // error 발생시 호출 - fallback을 나타내기위한 상태값을 변경 기능
    static getDerivedStateFromError(error:Error): State {
        return { hasError: true, error: error }
    }


    //errorboundary 하위 초기화 기능 ( resetQuery 에는 error를 초기화하는 함수가 들어감)
    resetBoundary = () => {
        const {resetQuery} = this.props

        resetQuery && resetQuery()
        this.setState(initialState)
    }


    //하위 컴포넌트에서 오류가 발생한 후 호출 - 에러 기록 기능
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { fallback, message } = this.props;

        if (hasError) {
            if (fallback) {
                return fallback;
            }

            return <span>{message ?? 'Load Failed'}</span>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
