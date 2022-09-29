import { Direction } from '../constants/components';
import { classnames } from '../utils/classnames';
import styles from './Content.module.scss';

interface ContentProps {
    children: React.ReactNode;
    className?: string;
    direction?: Direction
    main?: boolean;
}

export function Content({
    children,
    className,
    direction = Direction.VERTICAL,
    main = false
}: ContentProps) {
    return (
        <div className={classnames(
            styles.content,
            styles[`dir-${direction}`],
            main && styles.main,
            className
        )}>
            {children}
        </div>
    );
}