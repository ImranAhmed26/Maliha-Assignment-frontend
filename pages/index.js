import Head from "next/head";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Assignment</title>
        <meta
          name="description"
          content="Avenir IP Ltd. | One of the promising and fastest growing IT company in Bangladesh with the vision to develop cutting edge web and smartphone applications."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100 text-gray-800">Hello World</div>
    </div>
  );
}
