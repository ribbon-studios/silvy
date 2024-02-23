import React from 'react';
import { Alignment, Actions } from '../../constants/components';
import { classnames } from '../../utils/classnames';
import { useOpened } from '../../utils/element';
import styles from './Popover.module.scss';

export interface PopoverProps {
    children: React.ReactNode;
    toggle: React.ReactNode;
    opened?: boolean;
    alignment?: Alignment;
    action?: Actions;
}

export function Popover({
    children,
    toggle,
    opened: externallyOpened = false,
    alignment = Alignment.CENTER,
    action = Actions.HOVER
}: PopoverProps) {
    const [opened, eventProps] = useOpened(externallyOpened, action, true);

    return (
        <div
            className={classnames(
                styles.popover,
                opened && styles.opened,
                styles[`al-${alignment}`]
            )}
            data-testid='popover'
            {...eventProps}
        >
            <div className={styles.toggle}>
                {toggle}
            </div>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
}