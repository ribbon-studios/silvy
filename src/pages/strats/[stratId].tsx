import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Strats() {
    const router = useRouter();
    const { stratId } = router.query;
    console.log(stratId);

    return (
        <div className="container">
            <Head>
                <title>Strats · Silvy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}