import Head from 'next/head';
import { Card } from '../components/Card';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Dashboard · Silvy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Card>
                Dashboard
            </Card>
        </div>
    )
}