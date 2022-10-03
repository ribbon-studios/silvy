import styles from './PopoverItem.module.scss';

export interface PopoverItemProps {
    children: React.ReactNode;
}

export function PopoverItem({
    children
}: PopoverItemProps) {
    return (
        <div className={styles.popoverItem}>
            {children}
        </div>
    );
}