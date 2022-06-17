import React, {FC} from 'react';
import NewsScreenHeader from '../../components/NewsScreenHeader/NewsScreenHeader';
import NewsList from '../../components/NewsList/NewsList';
import NewsContextProvider from '../../context/NewsContext';

const NewsScreen: FC = () => {
  return (
    <NewsContextProvider>
      <NewsScreenHeader />
      <NewsList />
    </NewsContextProvider>
  );
};

export default NewsScreen;
