import { Component, ErrorInfo } from 'react';
import ErrorScreen from '../screens/ErrorScreen';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../interface/common';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorScreen />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
