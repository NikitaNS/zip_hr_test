import makeAPICall from '../../../api';
import Reactotron from "reactotron-react-native";

export const fetchNews = async (newsType: string) => {
  const {data} = await makeAPICall({
    url: `https://api.nytimes.com/svc/topstories/v2/${newsType}.json`,
  });

  return data;
};
