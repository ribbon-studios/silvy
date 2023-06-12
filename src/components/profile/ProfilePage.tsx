import { Typography } from '../common/Typography';
import { ProfileCard } from './ProfileCard';
import styles from './ProfilePage.module.scss';

export function ProfilePage() {
    return (
        <>
            <Typography as='h2'>
                Profile
            </Typography>
            <div className={styles.profile}>
                <ProfileCard/>
            </div>
        </>
    );
}