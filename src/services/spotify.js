import axios from "axios";
const baseUrl = "/api";

export const getProfile = async () => {
  const profile = await axios.get(`${baseUrl}/profile/me`);
  return profile;
};

export const search = async (searchType, keyword, market) => {
  //change this code later
  if (keyword.length >= 3) {
    const searchResult = await axios.post(`${baseUrl}/search`, {
      type: searchType,
      q: keyword,
      market,
    });
    return searchResult.data;
  }
};
