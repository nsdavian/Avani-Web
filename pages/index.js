import Head from 'next/head'
import Image from 'next/image'
import styles from './src/styles/Home.module.css'

import App from './src/App'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Avani-RS</title>
        <meta name="description" content="Avani-Rs " />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>

      <main className={styles.main}>
        <App />
      </main>

    </div>
  )
}
