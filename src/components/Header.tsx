
import { BsPatchPlus, BsPatchPlusFill, BsPeopleFill, BsBookFill } from 'react-icons/bs';
import styles from './Header.module.scss';
import { Button } from './Button';
import { Alignment, Direction, Sizes } from '../constants/components';
import { Content } from './Content';
import Link from 'next/link';
import Login from './Login';
import { IconButton } from './IconButton';
import { Popover, PopoverItem } from './Popover';
import { useSession } from 'next-auth/react';

export function Header() {
    const { data: session } = useSession();

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
                {session && (
                    <Popover
                        toggle={<IconButton
                            icon={BsPatchPlus}
                            hoverIcon={BsPatchPlusFill}
                            size={30}
                        />}
                    >
                        <PopoverItem>
                            <BsBookFill size={20} />
                            Create a Strat
                        </PopoverItem>
                        <PopoverItem>
                            <BsPeopleFill size={20} />
                            Create a Team
                        </PopoverItem>
                    </Popover>
                )}
                <Login />
            </Content>
        </div>
    );
}