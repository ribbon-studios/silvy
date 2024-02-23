
import { BsPatchPlus, BsPatchPlusFill, BsPeopleFill, BsBookFill } from 'react-icons/bs';
import styles from './Header.module.scss';
import { Button } from '../common/Button/Button';
import { Direction, Sizes } from '../../constants/components';
import { Content } from '../common/Content';
import Link from 'next/link';
import Login from './Login';
import { IconButton } from '../common/Button/IconButton';
import { Popover, PopoverItem } from '../common/Popover';
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
                        />}
                    >
                        <PopoverItem icon={BsBookFill}>
                            Create a Strat
                        </PopoverItem>
                        <PopoverItem icon={BsPeopleFill}>
                            Create a Team
                        </PopoverItem>
                    </Popover>
                )}
                <Login />
            </Content>
        </div>
    );
}