import React from 'react';
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>

        </QueryClientProvider>

    )
}
export default App;