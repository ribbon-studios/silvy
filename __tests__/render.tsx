import { render } from '@testing-library/react';

export function createRenderComponent<P>(Component: React.ElementType, defaultProps?: P) {
    return (props?: P) => {
        return render(<Component {...defaultProps} {...props} />);
    }
}