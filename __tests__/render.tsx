import { render } from '@testing-library/react';
import React from 'react';

export function createRenderComponent<P>(Component: React.ElementType, defaultProps?: P) {
    return <IP = P>(props?: Partial<IP>) => {
        return render(<Component {...defaultProps} {...props} />);
    };
}