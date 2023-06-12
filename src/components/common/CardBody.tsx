import { Direction } from '../../constants/components';
import { Content } from './Content';
import styles from './CardBody.module.scss';
import classNames from 'classnames';

interface CardBodyProps {
    children: React.ReactNode;
    className?: string;
    direction?: Direction;
}

export function CardBody({
    children,
    className,
    direction = Direction.VERTICAL,
    ...extraProps
}: CardBodyProps) {
    return (
        <Content
            className={classNames(
                styles.body,
                className
            )}
            direction={direction}
            {...extraProps}
        >
            {children}
        </Content>
    );
}