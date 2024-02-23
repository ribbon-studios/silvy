import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types';
import classNames from 'classnames';
import Link from 'next/link';
import { useReadOnlyCachedState } from '../../hooks/use-cached-state';
import styles from './ButtonBase.module.scss';
import React from 'react';
import { Sizes } from '../../../constants/components';

export const DEFAULT_ELEMENT = 'button';

export interface ButtonBaseOwnProps {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    size?: Sizes;
}

export type ButtonBaseProps<
    T extends React.ElementType = typeof DEFAULT_ELEMENT
> = PolymorphicPropsWithoutRef<ButtonBaseOwnProps, T>;

export function ButtonBase<E extends React.ElementType = typeof DEFAULT_ELEMENT>({
    as,
    className: externalClassName,
    children,
    disabled = false,
    size = Sizes.SMALL,
    ...extraProps
}: ButtonBaseProps<E>) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const Element: React.ElementType = as || DEFAULT_ELEMENT;
    const className = useReadOnlyCachedState(() => {
        return classNames(
            styles.buttonBase,
            styles[`sz-${size}`],
            externalClassName,
            {
                [styles.disabled]: disabled
            }
        );
    }, [disabled, externalClassName]);

    if (Element === Link) {
        return (
            <Element
                {...extraProps}
                className={className}
                disabled={disabled}
                draggable={false}
            >
                <a
                    data-testid='button-base'
                    className={className}
                >
                    {children}
                </a>
            </Element>
        );
    }

    return (
        <Element
            data-testid='button-base'
            {...extraProps}
            className={className}
            disabled={disabled}
            draggable={false}
        >
            {children}
        </Element>
    );
}