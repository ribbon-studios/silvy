import classnames from 'classnames';
import { PolymorphicPropsWithoutRef } from 'react-polymorphic-types';
import styles from './Button.module.scss';
import { ButtonBase, ButtonBaseOwnProps } from './ButtonBase';
import { useReadOnlyCachedState } from '../../hooks/use-cached-state';
import { Animations } from '../../../constants/components';

export interface ButtonOwnProps extends ButtonBaseOwnProps {
    animation?: Animations;
}

export type ButtonProps<
    T extends React.ElementType
> = PolymorphicPropsWithoutRef<ButtonOwnProps, T>;

export function Button<E extends React.ElementType>({
    as,
    className: externalClassName,
    animation = Animations.DARKEN,
    ...extraProps
}: ButtonProps<E>) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const Element: React.ElementType = as;
    const className = useReadOnlyCachedState(() => {
        return classnames(
            styles.button,
            styles[`an-${animation}`],
            externalClassName
        );
    }, [animation, externalClassName]);

    return (
        <ButtonBase
            as={Element}
            className={className}
            data-testid='button'
            {...extraProps}
        />
    );
}