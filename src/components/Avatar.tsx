import styles from './Avatar.module.scss';
import Image from 'next/image';

type AvatarProps = {
    src: string;
}

export default function Avatar({
    src
}: AvatarProps) {
    return (
        <Image
            className={styles.avatar}
            width={40}
            height={40}
            src={src}
        />
    )
}