import styles from './Layout.module.scss';
import {Header} from './Header';
import {Footer} from './Footer';
import { Content } from './Content';

export default function Layout({children}) {
    return (
        <div className={styles.layout}>
            <Header />
            <Content className={styles.content}>
                {children}
            </Content>
            <Footer />
        </div>
    );
}