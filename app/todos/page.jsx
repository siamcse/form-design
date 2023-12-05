import React from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient()

const TodosPage = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <h1 className='text-3xl font-bold text-center'>Todos</h1>
        </QueryClientProvider>
    );
};

export default TodosPage;