import Header from "../components/Header";

export default function MyApp({ Component, pageProps }) {
    return (
        <div className="page">
            <Header/>
            <Component {...pageProps} />
        </div>
    )
}