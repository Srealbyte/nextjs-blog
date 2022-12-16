import Header from "../components/Header";

//Used this to create the defualt page layout of each page
export default function MyApp({ Component, pageProps }) {
    return (
        <div className="page">
            <Header/>
            <Component {...pageProps} />
        </div>
    )
}