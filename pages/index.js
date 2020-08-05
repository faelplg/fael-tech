import Head from 'next/head'

import utilStyles from '../styles/global.module.scss';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>fael.tech | Experience for Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>Hero</div>
        <div>Content</div>
      </main>
        <style jsx>{`
          .container {
            padding: 1.6rem;
          }
        `}</style>
    </div>
  )
}
