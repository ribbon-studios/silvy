import classnames from 'classnames';
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types';
import styles from './Button.module.scss';
import { Animations, Sizes } from '../../constants/components';
import Link from 'next/link';

export const DEFAULT_ELEMENT = 'button';

export interface ButtonOwnProps {
    children: React.ReactNode;
    className?: string;
    size?: Sizes;
    animation?: Animations;
    disabled?: boolean;
}

export type ButtonProps<
    T extends React.ElementType = typeof DEFAULT_ELEMENT
> = PolymorphicPropsWithoutRef<ButtonOwnProps, T>;

export function Button<E extends React.ElementType = typeof DEFAULT_ELEMENT>({
    as,
    children,
    className,
    size = Sizes.SMALL,
    animation = Animations.DARKEN,
    disabled = false,
    ...extraProps
}: ButtonProps<E>) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const Element: React.ElementType = as || DEFAULT_ELEMENT;
    const props = {
        ...extraProps,
        className: classnames(
            styles.button,
            styles[`sz-${size}`],
            styles[`an-${animation}`],
            disabled && styles.disabled,
            className
        )
    };

    if (Element === Link) {
        return (
            <Element {...props}>
                <a {...props}>
                    {children}
                </a>
            </Element>
        );
    }

    return (
        <Element {...props}>
            {children}
        </Element>
    );
}