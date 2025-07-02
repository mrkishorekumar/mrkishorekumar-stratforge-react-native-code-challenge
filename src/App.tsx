import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react'
import Routes from './routing/Routes';
import ErrorBoundary from './components/ErrorBoundary';
import { SafeAreaView } from 'react-native';

const queryClient = new QueryClient();

export default function App() {
    return (
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <SafeAreaView style={{flex : 1}}>
                    <Routes />
                </SafeAreaView>
            </QueryClientProvider>
        </ErrorBoundary>
    )
}