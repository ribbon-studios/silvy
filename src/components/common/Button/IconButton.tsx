import { IconType } from 'react-icons';
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types';
import classNames from 'classnames';
import {Button, ButtonOwnProps} from './Button';
import styles from './IconButton.module.scss';
import { Animations, Sizes } from '../../../constants/components';
import { useReadOnlyCachedState } from '../../hooks/use-cached-state';

export interface IconButtonOwnProps extends Omit<ButtonOwnProps, 'children'> {
    icon: IconType;
    hoverIcon?: IconType;
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
};

export type IconButtonProps<
    T extends React.ElementType
> = PolymorphicPropsWithoutRef<IconButtonOwnProps, T>;

const iconSizes: Record<Sizes, number> = {
    [Sizes.SMALL]: 20,
    [Sizes.MEDIUM]: 30,
    [Sizes.LARGE]: 40
};

export function IconButton<E extends React.ElementType>({
    as,
    icon: Icon,
    hoverIcon: HoverIcon,
    children,
    className: externalClassName,
    size = Sizes.MEDIUM,
    ...extraProps
}: IconButtonProps<E>) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const Element: React.ElementType = as;
    const className = useReadOnlyCachedState(() => {
        return classNames(
            styles.iconButton,
            externalClassName,
            {
                [styles.hasHoverIcon]: HoverIcon
            }
        );
    }, [HoverIcon, externalClassName]);

    const iconSize = useReadOnlyCachedState(() => iconSizes[size], [size]);

    return (
        <Button
            data-testid='icon-button'
            {...extraProps}
            as={Element}
            animation={HoverIcon ? Animations.NONE : Animations.DARKEN}
            className={className}
        >
            <Icon className={styles.icon} size={iconSize} />
            {HoverIcon && (
                <HoverIcon className={styles.hoverIcon} size={iconSize} />
            )}
            {children}
        </Button>
    );
}