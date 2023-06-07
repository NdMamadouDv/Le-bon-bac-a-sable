export const getOwnerInfo = `*[_type == "ownerInfo"][] {
  ...,
   socials[]->
}`;

export const getSocials = `*[_type == "social"][]{
    ...,
  
  }`;
