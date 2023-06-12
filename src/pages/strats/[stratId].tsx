import Head from 'next/head';
import { useRouter } from 'next/router';
import { StratPage } from '../../components/strats/StratPage';

export default function Strats() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Strats · Silvy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <StratPage id={router.query.stratId as string} />
        </>
    )
}