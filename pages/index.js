import Head from "next/head";

import ItemPage from "../components/category-list";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Assignment</title>
        <meta
          name="description"
          content=""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" text-gray-800">
        <ItemPage />
      </div>
    </div>
  );
}
