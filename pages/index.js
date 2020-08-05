import Head from 'next/head'

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
    </div>
  )
}
