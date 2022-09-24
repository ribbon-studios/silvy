import { Direction } from '../constants/components';
import { classnames } from '../utils/classnames';
import styles from './Content.module.scss';

interface ContentProps {
    children: React.ReactNode;
    className?: string;
    direction?: Direction
}

export function Content({
    children,
    className,
    direction = Direction.VERTICAL
}: ContentProps) {
    return (
        <div className={classnames(
            styles.content,
            styles[`dir-${direction}`],
            className
        )}>
            {children}
        </div>
    );
}