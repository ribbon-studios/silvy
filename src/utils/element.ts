import { useCallback, useEffect, useState } from 'react';
import { Actions } from '../constants/components';

export type EventProps = {
    [key: string]: Function;
}

export function useOpened(externallyOpened: boolean, event: Actions, closeOnClick: boolean): [boolean, EventProps] {
    const [opened, setOpened] = useState(externallyOpened);

    useEffect(() => {
        if (opened && closeOnClick) {
            // Wait a frame before adding the click listener to prevent immediately closing
            requestAnimationFrame(() => {
                document.addEventListener('click', close, {
                    passive: true
                });
            });
        } else {
            document.removeEventListener('click', close);
        }
    }, [opened, closeOnClick]);

    const open = useCallback(() => {
        console.log('open');
        setOpened(true);
    }, []);
    const close = useCallback(() => {
        console.log('close');
        setOpened(false);
    }, []);

    let eventProps: EventProps = {};

    if (event === Actions.CLICK) {
        eventProps.onClick = open;
    } else if (event === Actions.HOVER) {
        eventProps.onMouseEnter = open;
        eventProps.onMouseLeave = close;
    }

    return [opened, eventProps];
}