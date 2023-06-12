import Head from 'next/head';
import { ProfilePage } from '../components/profile/ProfilePage';

export default function Profile() {
    return (
        <>
            <Head>
                <title>Profile · Silvy</title>
            </Head>
            <ProfilePage />
        </>
    )
}