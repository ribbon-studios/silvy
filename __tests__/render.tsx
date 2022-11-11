import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

export function createRenderComponent<P>(Component: React.ElementType, defaultProps?: P) {
    return <IP = P>(props?: Partial<IP>) => {
        const expectedProps = {
            ...defaultProps,
            ...props
        };

        return {
            ...render(<Component {...expectedProps} />),
            expectedProps,
            user: userEvent
        };
    };
}