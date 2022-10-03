import React, { useCallback, useEffect, useState } from 'react';
import { classnames } from '../../utils/classnames';
import styles from './Popover.module.scss';

export interface PopoverProps {
    children: React.ReactNode;
    toggle: React.ReactNode;
    opened?: boolean;
}

export function Popover({
    children,
    toggle,
    opened: externallyOpened = false
}: PopoverProps) {
    const [opened, setOpened] = useState(externallyOpened);
    const close = useCallback(() => {
        setOpened(false);
    }, []);

    useEffect(() => {
        setOpened(externallyOpened);
    }, [externallyOpened]);

    useEffect(() => {
        if (opened) {
            // Wait a frame before adding the click listener to prevent immediately closing
            requestAnimationFrame(() => {
                document.addEventListener('click', close, {
                    passive: true
                });
            });
        } else {
            document.removeEventListener('click', close);
        }
    }, [opened]);

    return (
        <div className={classnames(
            styles.popover,
            opened && styles.opened
        )}>
            <div className={styles.toggle} onClick={() => setOpened(!opened)}>
                {toggle}
            </div>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
}