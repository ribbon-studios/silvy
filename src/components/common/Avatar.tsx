import styles from './Avatar.module.scss';
import Image from 'next/image';

export type AvatarProps = {
    src: string;
}

export function Avatar({
    src
}: AvatarProps): JSX.Element {
    return (
        <div className={styles.avatar}>
            <Image
                alt='Avatar'
                layout='fill'
                src={src}
            />
        </div>
    )
}