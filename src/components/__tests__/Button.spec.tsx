import Link from 'next/link';
import React from 'react';
import { createRenderComponent } from '../../../__tests__/render';
import { Animations, Sizes } from '../../constants/components';
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
        const { baseElement } = renderButton({
            as: 'a'
        });

        expect(baseElement).toMatchSnapshot()
    });

    // TODO: Figure out how to get proper type checking working with Poly Components
    it('should support NextJS Links', () => {
        const { baseElement } = renderButton({
            as: Link,
            href: 'https://google.com'
        } as any);

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
