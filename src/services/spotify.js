import axios from 'axios';
const baseUrl = '/api';

export const getProfile = async () => {
  const profile = await axios.get(`${baseUrl}/profile/me`);
  return profile;
};

export const search = (searchType, keyword, profile) => {
  conditionalGetProfile(profile);
  console.log(searchType, keyword);
  // axios.get(`${baseUrl}/search`, {
  //   start,
  //   end,
  //   duration,
  //   category,
  // });
};
