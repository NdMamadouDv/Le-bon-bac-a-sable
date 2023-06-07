import { createClient, groq } from "next-sanity";

export async function getOwners() {
  const client = createClient({
    projectId: "cvjuutjf",
    dataset: "production",
  });

  return client.fetch(
    groq`*[_type == "ownerInfo"][]{
        ...,
        socials[]->
      }`
  );
}
