import classnames from 'classnames';
import { PolymorphicPropsWithoutRef } from 'react-polymorphic-types';
import { useReadOnlyCachedState } from '../hooks/use-cached-state';
import styles from './Typography.module.scss';

type TypographyValidAsTypes = 'h1' | 'h2' | 'h3';

interface TypographyOwnProps {
    as: TypographyValidAsTypes;
    children: React.ReactNode;
    className?: string;
}

export type TypographyProps<
    T extends React.ElementType
> = PolymorphicPropsWithoutRef<TypographyOwnProps, T>;

export function Typography<E extends React.ElementType>({
    as,
    children,
    className: externalClassName,
    ...extraProps
}: TypographyProps<E>) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const Element: TypographyValidAsTypes = as;
    const className = useReadOnlyCachedState(() => {
        return classnames(
            styles.typography,
            styles[as],
            externalClassName
        );
    }, [as, externalClassName]);

    return (
        <Element
            {...extraProps}
            className={className}
        >
            {children}
        </Element>
    );
}