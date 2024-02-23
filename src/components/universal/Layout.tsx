import styles from './Layout.module.scss';
import {Header} from './Header';
import {Footer} from './Footer';
import { Content } from '../common/Content';
import { Pride } from './Pride';

export default function Layout({children}) {
    return (
        <div className={styles.layout}>
            <div className={styles.sticky}>
                <Pride />
                <Header />
            </div>
            <Content className={styles.content} main>
                {children}
            </Content>
            <Footer />
        </div>
    );
}