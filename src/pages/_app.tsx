import Layout from '../components/Layout';

export default function SilvyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />

            <style jsx global>{`
                @font-face {
                    font-family: 'Whitney';
                    src: url('/fonts/whitney-2/whitneymedium.otf');
                    font-weight: 400;
                    font-style: normal;
                }

                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: 'Open Sans', sans-serif;
                    background: #2f3640;
                    color: #f492a5;
                }

                * {
                    box-sizing: border-box;
                }
                
                a {
                    color: inherit;
                    text-decoration: none;
                }
            `}</style>
        </Layout>
    );
}
