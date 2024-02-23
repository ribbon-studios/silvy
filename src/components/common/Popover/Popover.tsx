import React from 'react';
import { useRef } from 'react';
import { Alignment, Actions } from '../../../constants/components';
import classnames from 'classnames';
import styles from './Popover.module.scss';
import { useOpened } from '../../hooks/use-opened';

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
    const ref = useRef<HTMLDivElement>();
    const [opened, eventProps] = useOpened({
        opened: externallyOpened,
        action,
        autoClose: true,
        ref
    });

    return (
        <div
            className={classnames(
                styles.popover,
                opened && styles.opened,
                styles[`al-${alignment}`]
            )}
            data-testid='popover'
            ref={ref}
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