import '../styles/globals.css'
import 'antd/dist/antd.css';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { ConfigProvider } from 'antd';
import koKR from 'antd/lib/locale/ko_KR';
import 'moment/locale/ko';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Next.js를 이용한 Todolist</title>

            </Head>
            <RecoilRoot>
                <ConfigProvider locale={koKR}>
                    <Component {...pageProps} />
                </ConfigProvider>
            </RecoilRoot>
        </>

    )
}

export default MyApp
