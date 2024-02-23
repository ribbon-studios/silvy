
import styles from './Header.module.scss';
import { Button } from '../common/Button/Button';
import { Direction, Sizes } from '../../constants/components';
import { Content } from '../common/Content';
import Link from 'next/link';
import Login from './Login/Login';

export function Header() {
    return (
        <div className={styles.header}>
            <Content className={styles.content} direction={Direction.HORIZONTAL} main>
                <Button
                    as={Link}
                    className={styles.name}
                    size={Sizes.LARGE}
                    href='/'
                >
                    Silvy
                </Button>
                <div style={{
                    flex: 1
                }}></div>
                <Login />
            </Content>
        </div>
    );
}