import styles from './Header.module.scss';
import { Button } from './Button';
import { Animations, Direction, Sizes } from '../constants/components';
import { Content } from './Content';
import Link from 'next/link';

export function Header() {
    return (
        <div className={styles.header}>
            <Content className={styles.content} direction={Direction.HORIZONTAL}>
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
                <Button
                    animation={Animations.SWAP}
                    className={styles.discord}
                    size={Sizes.MEDIUM}
                >
                    Login
                </Button>
            </Content>
        </div>
    );
}