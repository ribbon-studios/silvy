import React from 'react';
import { BsPatchCheck, BsPatchCheckFill } from 'react-icons/bs';
import { createRenderComponent } from '@rain/test-utils/render';
import { chance } from '@rain/test-utils/chance';
import { IconButton, IconButtonProps } from '../IconButton';
import styles from '../IconButton.module.scss';

describe('Component(Button)', () => {
    const renderButton = createRenderComponent<IconButtonProps<React.ElementType>>(IconButton, {
        icon: BsPatchCheck
    });

    it('should display the Button', () => {
        const { baseElement } = renderButton()

        expect(baseElement).toMatchSnapshot()
    });

    it('should support providing a HoverIcon', () => {
        const { getByTestId } = renderButton({
            hoverIcon: BsPatchCheckFill
        });

        expect(getByTestId('icon-button')).toHaveClass(styles.hasHoverIcon);
    });

    it('should support providing a HoverIcon', () => {
        const { getByTestId } = renderButton();

        expect(getByTestId('icon-button')).not.toHaveClass(styles.hasHoverIcon);
    });

    it('should support providing a class', () => {
        const { getByTestId, expectedProps } = renderButton({
            className: chance.string({ alpha: true })
        });

        expect(getByTestId('icon-button')).toHaveClass(expectedProps.className);
    });
});
