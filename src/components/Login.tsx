import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './Login.module.scss';
import { Animations, Sizes } from '../constants/components';
import { Button } from './Button';
import Avatar from './Avatar';

export default function Login() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <Button
                    animation={Animations.SWAP}
                    className={styles.discord}
                    size={Sizes.MEDIUM}
                    onClick={() => signOut()}
                >
                    <Avatar src={session.user.image} />
                    {session.user.name}
                </Button>
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
            Sign in
        </Button>
    );
}