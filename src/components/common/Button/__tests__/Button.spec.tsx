import React from 'react';
import { createRenderComponent } from '@rain/test-utils/render';
import { chance } from '@rain/test-utils/chance';
import { Animations, Sizes } from '../../../../constants/components';
import { Button, ButtonProps } from '../Button';
import styles from '../Button.module.scss';

describe('Component(Button)', () => {
    const renderButton = createRenderComponent<ButtonProps<React.ElementType>>(Button, {
        children: 'UwU'
    });

    it('should display the Button', () => {
        const { baseElement } = renderButton()

        expect(baseElement).toMatchSnapshot()
    });

    it('should support overriding the animation', () => {
        const { getByTestId, expectedProps } = renderButton({
            animation: Animations.SWAP
        });

        expect(getByTestId('button')).toHaveClass(styles[`an-${expectedProps.animation}`]);
    });

    it('should support providing a class', () => {
        const { getByTestId, expectedProps } = renderButton({
            className: chance.string({ alpha: true })
        });

        expect(getByTestId('button')).toHaveClass(expectedProps.className);
    });
});
