import { ChangeEvent } from 'react';
import { useCachedState } from '../hooks/use-cached-state';
import styles from './Input.module.scss';

interface InputProps {
    label?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void
}

export function Input({
    label,
    value: externalValue,
    onChange,
    ...extraProps
}: InputProps) {
    const [value, setValue] = useCachedState(() => externalValue, [externalValue]);

    return (
        <label className={styles.container}>
            {label}
            <input
                className={styles.input}
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                    onChange?.(event, event.target.value);
                }}
                {...extraProps}
            />
        </label>
    );
}