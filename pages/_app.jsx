import "../styles.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* 728x90 Banner configuration */}
      <Script
        id="adsterra-banner-config"
        strategy="afterInteractive"
      >
        {`
          window.atOptions = {
            key: '1380db8cd6e4f5dd724f692b8f632c60',
            format: 'iframe',
            height: 90,
            width: 728,
            params: {}
          };
        `}
      </Script>

      <Script
        id="adsterra-banner"
        src="https://bellnewyork.org/22/1380db8cd6e4f5dd724f692b8f632c60"
        strategy="afterInteractive"
      />

      {/* Adsterra script 14 */}
      <Script
        id="adsterra-unit-14"
        src="https://bellnewyork.org/14/9bece014370da51cb3f1814ce1cc7290"
        data-cfasync="false"
        strategy="afterInteractive"
      />

      {/* Adsterra unit 21 */}
      <div
        id="container-03865a62b14337cce24da44c5b25ccd7"
      />

      <Script
        id="adsterra-unit-21"
        src="https://bellnewyork.org/21/03865a62b14337cce24da44c5b25ccd7"
        data-cfasync="false"
        strategy="afterInteractive"
      />

      <Component {...pageProps} />
    </>
  );
}
