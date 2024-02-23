import Link from 'next/link';
import React from 'react';
import { BsPatchCheck, BsPatchCheckFill } from 'react-icons/bs';
import { createRenderComponent } from '../../../__tests__/render';
import { IconButton, IconButtonProps } from '../IconButton';

describe('Component(Button)', () => {
    const renderButton = createRenderComponent<IconButtonProps<React.ElementType>>(IconButton, {
        icon: BsPatchCheck,
        hoverIcon: BsPatchCheckFill
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
            size: 30
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
