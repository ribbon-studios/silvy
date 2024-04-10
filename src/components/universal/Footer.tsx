import styles from './Footer.module.scss';
import Image from 'next/image';
import { Content } from '../common/Content';
import { Direction } from '../../constants/components';
import { IconButton } from '../common/Button/IconButton';
import { BsGithub } from 'react-icons/bs';
import { Button } from '../common/Button/Button';

export function Footer() {
    return (
        <Content className={styles.footer} direction={Direction.HORIZONTAL} main>
            <div/>
            <Button
                as='a'
                className={styles.poweredBy}
                href="https://www.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by
                <Image
                    src="/netlify.svg"
                    height={30}
                    width={110}
                    alt="Netlify"
                    priority
                />
            </Button>
            <div className={styles.externalLinks}>
                <IconButton
                    as='a'
                    icon={BsGithub}
                    href='https://github.com/ribbon-studios/silvy'
                    target="_blank"
                    rel="noopener noreferrer"
                />
            </div>
        </Content>
    );
}