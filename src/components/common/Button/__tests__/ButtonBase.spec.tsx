import Link from 'next/link';
import React from 'react';
import { createRenderComponent } from '@rain/test-utils/render';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase';
import { Sizes } from '../../../../constants/components';
import styles from '../ButtonBase.module.scss';

describe('Component(Button)', () => {
    const renderButton = createRenderComponent<ButtonBaseProps<React.ElementType>>(ButtonBase, {
        children: 'UwU'
    });

    it('should display the Button', () => {
        const { baseElement } = renderButton()

        expect(baseElement).toMatchSnapshot()
    });

    it('should support overriding the tag type', () => {
        const { baseElement } = renderButton<ButtonBaseProps<'a'>>({
            as: 'a'
        });

        expect(baseElement.querySelector('a')).toBeTruthy();
    });

    it('should support overriding the size', () => {
        const { getByTestId, expectedProps } = renderButton({
            size: Sizes.MEDIUM
        });

        expect(getByTestId('button-base')).toHaveClass(styles[`sz-${expectedProps.size}`]);
    });

    it('should support NextJS Links', () => {
        const { baseElement, getByTestId } = renderButton<ButtonBaseProps<typeof Link>>({
            as: Link,
            href: 'https://silvy.rains.cafe'
        });

        expect(baseElement.querySelector('a')).toBeTruthy();
        expect(getByTestId('button-base')).toHaveAttribute('href');
    });

    it('should support being enabled', async () => {
        const { getByTestId, user, expectedProps } = renderButton({
            onClick: jest.fn()
        });

        await user.click(getByTestId('button-base'));

        expect(expectedProps.onClick).toHaveBeenCalledTimes(1);
    });

    it('should support being disabled', async () => {
        const { getByTestId, user, expectedProps } = renderButton({
            disabled: true,
            onClick: jest.fn()
        });

        await user.click(getByTestId('button-base'));

        expect(expectedProps.onClick).toHaveBeenCalledTimes(0);
    });
});
