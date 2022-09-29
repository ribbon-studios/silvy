
import styles from './Header.module.scss';
import { Button } from './Button';
import { Direction, Sizes } from '../constants/components';
import { Content } from './Content';
import Link from 'next/link';
import Login from './Login';

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
                {/* <Button
                    as={Link}
                    className={styles.strats}
                    size={Sizes.MEDIUM}
                    href='/strats'
                >
                    Strats
                </Button> */}
                <div style={{
                    flex: 1
                }}></div>
                <Login />
            </Content>
        </div>
    );
}