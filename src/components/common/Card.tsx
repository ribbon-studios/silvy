import classnames from 'classnames';
import { Direction } from '../../constants/components';
import { Content } from './Content';
import styles from './Card.module.scss';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    direction?: Direction
}

export function Card({
    children,
    className,
    direction = Direction.VERTICAL,
    ...extraProps
}: CardProps) {
    return (
        <Content
            className={classnames(
                styles.card,
                className
            )}
            direction={direction} {...extraProps}
        >
            {children}
        </Content>
    );
}