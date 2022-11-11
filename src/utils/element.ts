import { useCallback, useEffect, useState } from 'react';
import { Actions } from '../constants/components';
import { isMobile } from './mobile';

export function isInPath(event: Event, element: HTMLElement) {
    return element && event.composedPath().includes(element);
}

export function isNotInPath(event: Event, element: HTMLElement) {
    return !isInPath(event, element);
}

export type EventProps = {
    [key: string]: Function;
}

export function useOpened<E extends HTMLElement>(options: Options<E>): [boolean, EventProps] {
    const [opened, setOpened] = useState(options.opened);

    useEffect(() => {
        if (opened && options.autoClose) {
            // Wait a frame before adding the click listener to prevent immediately closing
            requestAnimationFrame(() => {
                document.addEventListener('click', close, {
                    passive: true
                });
            });
        } else {
            document.removeEventListener('click', close);
        }

        return () => {
            document.removeEventListener('click', close);
        };
    }, [options.opened, options.autoClose]);

    const open = useCallback(() => setOpened(true), []);
    const close = useCallback((event) => {
        if (isNotInPath(event, options.ref.current)) {
            setOpened(false);
        }
    }, []);

    const eventProps: EventProps = {};
    if (isMobile || options.action === Actions.CLICK) {
        eventProps.onClick = open;
    } else if (options.action === Actions.HOVER) {
        eventProps.onMouseEnter = open;
        eventProps.onMouseLeave = close;
    }

    return [opened, eventProps];
}

export type Options<E extends HTMLElement> = {
    opened: boolean;
    action: Actions;
    autoClose: boolean;
    ref: React.MutableRefObject<E>;
}