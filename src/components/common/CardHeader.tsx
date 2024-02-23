import { Direction } from '../../constants/components';
import { Content } from './Content';
import styles from './CardHeader.module.scss';
import { Typography } from './Typography';

interface CardHeaderProps {
    children: React.ReactNode;
}

export function CardHeader({
    children,
    ...extraProps
}: CardHeaderProps) {
    return (
        <Content
            className={styles.header}
            direction={Direction.HORIZONTAL}
            {...extraProps}
        >
            <Typography as='h2'>
                {children}
            </Typography>
        </Content>
    );
}