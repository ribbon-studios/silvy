import styles from './Avatar.module.scss';
import Image from 'next/image';

export type AvatarProps = {
    src: string;
    size?: number;
}

export function Avatar({
    src,
    size = 40
}: AvatarProps): JSX.Element {
    return (
        <Image
            alt='Avatar'
            width={size}
            height={size}
            className={styles.avatar}
            src={src}
            priority
        />
    )
}