import Head from "next/head";
import Router from "next/router";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Assignment</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-96">
        <div className=" text-gray-800 text-xl font-semibold ">
          <div className="flex justify-between px-80 py-10 mx-auto max-w-7xl">
            <div
              className="px-5 py-3 rounded-md bg-cyan-400 hover:bg-cyan-500 text-gray-700 transition-all duration-100 cursor-pointer "
              onClick={() => {
                Router.push("/item-info-create");
              }}
            >
              Item Create Page
            </div>
            <div
              className="px-5 py-3 rounded-md bg-yellow-400 hover:bg-yellow-500 text-gray-700 transition-all duration-100 cursor-pointer"
              onClick={() => {
                Router.push("/item-info-page");
              }}
            >
              Item Info Page
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
