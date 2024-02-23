import Link from 'next/link';
import React from 'react';
import { createRenderComponent } from '@rain/test-utils/render';
import { Animations, Sizes } from '../../../constants/components';
import { Button, ButtonProps } from '../Button';

describe('Component(Button)', () => {
    const renderButton = createRenderComponent<ButtonProps<React.ElementType>>(Button, {
        children: 'children'
    });

    it('should display the Button', () => {
        const { baseElement } = renderButton()

        expect(baseElement).toMatchSnapshot()
    });

    it('should support overriding the tag type', () => {
        const { baseElement } = renderButton<ButtonProps<'a'>>({
            as: 'a'
        });

        expect(baseElement).toMatchSnapshot()
    });

    it('should support NextJS Links', () => {
        const { baseElement } = renderButton<ButtonProps<typeof Link>>({
            as: Link,
            href: 'https://silvy.rains.cafe'
        });

        expect(baseElement).toMatchSnapshot()
    });

    it('should support changing the size', () => {
        const { baseElement } = renderButton({
            size: Sizes.MEDIUM
        });

        expect(baseElement).toMatchSnapshot()
    });

    it('should support changing the animation', () => {
        const { baseElement } = renderButton({
            animation: Animations.NONE
        });

        expect(baseElement).toMatchSnapshot()
    });

    it('should support being disabled', () => {
        const { baseElement } = renderButton({
            disabled: true
        });

        expect(baseElement).toMatchSnapshot()
    });
});
