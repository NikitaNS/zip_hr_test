import makeAPICall from '../../../api';

export const fetchNews = async (newsType: string) => {
  const {data} = await makeAPICall({
    url: `https://api.nytimes.com/svc/topstories/v2/${newsType}.json`,
  });
  return data;
};
