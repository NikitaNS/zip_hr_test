import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {fetchNews} from '../api/api';
import AsyncStorage from '@react-native-community/async-storage';

const defaultValue = {
  news: [],
  setNews: () => null,
  newsType: 'home',
  setNewsType: () => null,
  loading: false,
  setLoading: () => null,
  locations: [],
  setLocations: () => null,
  selectedLocation: '',
  setSelectedLocation: () => null,
};

export const NewsContext = createContext<NewsContextType>(defaultValue);

const NewsContextProvider: FC = ({children}) => {
  const [news, setNews] = useState<INewsItem[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [newsType, setNewsType] = useState<string>('home');
  const [loading, setLoading] = useState<boolean>(false);

  const getNews = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchNews(newsType);
      await AsyncStorage.setItem('news', JSON.stringify(data));
      return data.results;
    } catch (error) {
      console.log(error);
      return await AsyncStorage.getItem('news').then(res => {
        return JSON.parse(res).results;
      });
    } finally {
      setLoading(false);
    }
  }, [newsType]);

  const getNewsLocations = useCallback(() => {
    const newsLocations = news.map(newsItem => {
      return newsItem.geo_facet;
    });

    return [...new Set(newsLocations.flat(1))];
  }, [news]);

  const getStoredType = async () => {
    await AsyncStorage.getItem('newsType').then(res => setNewsType(res));
  };

  useEffect(() => {
    getStoredType();
  }, []);

  useEffect(() => {
    if (locations.length === 0) {
      setLocations(getNewsLocations());
    }
  }, [news]);

  useEffect(() => {
    getNews().then(res => {
      setNews(res);
    });
  }, [newsType]);

  return (
    <NewsContext.Provider
      value={{
        news,
        newsType,
        loading,
        setNews,
        setNewsType,
        setLoading,
        locations,
        setLocations,
        selectedLocation,
        setSelectedLocation,
      }}>
      {children}
    </NewsContext.Provider>
  );
};

type NewsContextType = {
  news: INewsItem[] | [];
  setNews: Dispatch<SetStateAction<INewsItem[]>>;
  newsType: string;
  setNewsType: Dispatch<SetStateAction<string>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  locations: string[];
  setLocations: Dispatch<SetStateAction<string[]>>;
  selectedLocation: string;
  setSelectedLocation: Dispatch<SetStateAction<string>>;
};

export interface IMultimedia {
  url: string;
  format: string;
}

export interface INewsItem {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  byline: string;
  item_type: string;
  published_date: string;
  multimedia: IMultimedia[];
  geo_facet: string[];
}

export default NewsContextProvider;
