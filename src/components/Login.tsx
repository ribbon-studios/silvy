import { useSession, signIn, signOut } from 'next-auth/react';
import {IoMdLogOut, IoMdLogIn} from 'react-icons/io';
import styles from './Login.module.scss';
import { Alignment, Animations, Sizes } from '../constants/components';
import { Button } from './Button';
import { Avatar } from './Avatar';
import { Popover, PopoverItem } from './Popover';

export default function Login() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <Popover
                    alignment={Alignment.RIGHT}
                    toggle={<Button
                        animation={Animations.SWAP}
                        className={styles.discord}
                        size={Sizes.MEDIUM}
                    >
                        <Avatar src={session.user.image} />
                        {session.user.name}
                    </Button>}
                >
                    <PopoverItem>
                        Profile
                    </PopoverItem>
                    <PopoverItem onClick={() => signOut()}>
                        <IoMdLogOut size={20} />
                        Sign out
                    </PopoverItem>
                </Popover>
            </>
        )
    }

    return (
        <Button
            animation={Animations.SWAP}
            className={styles.discord}
            size={Sizes.MEDIUM}
            onClick={() => signIn('discord')}
        >
            <IoMdLogIn size={20} />
            Sign in
        </Button>
    );
}