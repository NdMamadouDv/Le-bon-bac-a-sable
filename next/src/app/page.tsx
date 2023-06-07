import { getOwnerInfoData } from "@/lib/fetchOwnerInfo";

export default async function Home() {
  // const adminData = await getOwnerInfoData();
  // console.log(adminData[0]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Bienvenue chez Netoryeti</h1>
      {/* <h2>
        {" "}
        {adminData[0].name} <strong>{adminData[0].name}</strong>{" "}
      </h2> */}
    </main>
  );
}
