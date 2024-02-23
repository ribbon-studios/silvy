import { PolymorphicPropsWithoutRef } from 'react-polymorphic-types';
import styles from './PopoverItem.module.scss';

const DEFAULT_ELEMENT = 'button';

export interface PopoverItemOwnProps {
    children: React.ReactNode;
}

export type PopoverItemProps<
    T extends React.ElementType = typeof DEFAULT_ELEMENT
> = PolymorphicPropsWithoutRef<PopoverItemOwnProps, T>;

export function PopoverItem<E extends React.ElementType = typeof DEFAULT_ELEMENT>({
    as,
    children,
    ...extraProps
}: PopoverItemProps<E>) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const Element: React.ElementType = as || DEFAULT_ELEMENT;

    return (
        <Element className={styles.popoverItem} {...extraProps}>
            {children}
        </Element>
    );
}