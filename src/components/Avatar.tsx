import styles from './Avatar.module.scss';
import Image from 'next/image';

export type AvatarProps = {
    src: string;
}

export function Avatar({
    src
}: AvatarProps): JSX.Element {
    return (
        <Image
            className={styles.avatar}
            width={40}
            height={40}
            src={src}
        />
    )
}