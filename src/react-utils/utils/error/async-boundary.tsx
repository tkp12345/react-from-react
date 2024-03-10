import React, {ReactElement, ReactNode, Suspense} from "react";
import {useQueryErrorResetBoundary} from "react-query";
import ErrorBoundary from "./error-boundary";
import {DefaultErrorFallBack} from "./components/default-error-fall-back";

interface AsyncBoundaryProps {
    children: ReactNode
    loadingFallback?: ReactElement
    errorFallback?: ReactElement
}

export const AsyncBoundary = ({
                                  children,
                                  loadingFallback,
                                  errorFallback
}: AsyncBoundaryProps) => {
    const { reset } = useQueryErrorResetBoundary()

    return(
        <ErrorBoundary fallback={errorFallback || <DefaultErrorFallBack/>}
            resetQuery={reset}
        >
            <Suspense fallback={loadingFallback || 'lodaing'}>
                {children}
            </Suspense>
        </ErrorBoundary>
    )
}