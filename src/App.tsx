import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import React from 'react'
import Routes from './routing/Routes';
import ErrorBoundary from './components/ErrorBoundary';
import { SafeAreaView } from 'react-native';
import { store, persistor } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

export default function App() {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <QueryClientProvider client={queryClient}>
                        <SafeAreaView style={{ flex: 1 }}>
                            <Routes />
                        </SafeAreaView>
                    </QueryClientProvider>
                </PersistGate>
            </Provider>
        </ErrorBoundary>
    )
}