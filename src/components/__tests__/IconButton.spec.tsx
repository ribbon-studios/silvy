import Link from 'next/link';
import React from 'react';
import { BsPatchCheck, BsPatchCheckFill } from 'react-icons/bs';
import { createRenderComponent } from '@rain/test-utils/render';
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
        const { baseElement } = renderButton<IconButtonProps<'a'>>({
            as: 'a'
        });

        expect(baseElement).toMatchSnapshot()
    });

    it('should support NextJS Links', () => {
        const { baseElement } = renderButton<IconButtonProps<typeof Link>>({
            as: Link,
            href: 'https://silvy.rains.cafe'
        });

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
