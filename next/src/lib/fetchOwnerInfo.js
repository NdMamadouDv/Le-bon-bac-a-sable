import { getOwnerInfo } from "@/lib/queries";
import { sanity } from "@/utils/sanityClient";

const sanityClient = sanity;

export async function getOwnerInfoData() {
  const res = await sanityClient.fetch(getOwnerInfo);

  if (!res) {
    console.log("error");
  }
  return res;
}
