import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import React from 'react'
import Routes from './routing/Routes';
import ErrorBoundary from './components/ErrorBoundary';
import { SafeAreaView } from 'react-native';
import { store } from './store/index';

const queryClient = new QueryClient();

export default function App() {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <Routes />
                    </SafeAreaView>
                </QueryClientProvider>
            </Provider>
        </ErrorBoundary>
    )
}