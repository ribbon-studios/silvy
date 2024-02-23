import { IconType } from 'react-icons';
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types';
import {Button} from './Button';
import styles from './IconButton.module.scss';
import { classnames } from '../utils/classnames';
import { Animations } from '../constants/components';

export interface IconButtonOwnProps {
    icon: IconType;
    hoverIcon: IconType;
    size?: number;
    className?: string;
    disabled?: boolean;
}

export type IconButtonProps<
    T extends React.ElementType
> = PolymorphicPropsWithoutRef<IconButtonOwnProps, T>;

export function IconButton<E extends React.ElementType>({
    as,
    icon: Icon,
    hoverIcon: HoverIcon,
    size = 30,
    className,
    disabled = false,
    ...extraProps
}: IconButtonProps<E>) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const Element: React.ElementType = as;
    const props = {
        ...extraProps,
        className: classnames(
            styles.iconButton,
            disabled && styles.disabled,
            className
        )
    };

    return (
        <Button as={Element} animation={Animations.NONE} {...props}>
            <Icon className={styles.icon} size={size} />
            <HoverIcon className={styles.hoverIcon} size={size} />
        </Button>
    );
}