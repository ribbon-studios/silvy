import styles from './Footer.module.scss';
import Image from 'next/image';
import { Content } from '../common/Content';
import { Direction } from '../../constants/components';

export function Footer() {
    return (
        <Content className={styles.footer} direction={Direction.HORIZONTAL} main>
            <a
                className={styles.poweredBy}
                href="https://vercel.com/?utm_source=rainbow-cafe&utm_campaign=oss"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by
                <Image src="/vercel-logo.svg" height={20} width={88} alt="Vercel" className='icon' />
            </a>
        </Content>
    );
}