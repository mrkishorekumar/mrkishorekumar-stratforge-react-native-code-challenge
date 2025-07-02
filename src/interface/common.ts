import { ReactNode } from 'react';

export type ErrorBoundaryProps = {
    children: ReactNode;
};

export type ErrorBoundaryState = {
    hasError: boolean;
};

export interface Children {
    children: ReactNode;
}
