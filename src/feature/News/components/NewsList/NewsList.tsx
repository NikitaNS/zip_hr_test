import React, {useContext} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {styles} from './styles';
import {INewsItem, NewsContext} from '../../context/NewsContext';
import NewsItem from './NewsItem/NewsItem';
import {colors} from '../../constans';
import ListEmptyComponent from './ListEmptyComponent/ListEmptyComponent';

const NewsList = () => {
  const {news, loading, selectedLocation} = useContext(NewsContext);

  const getImageSource = (item: INewsItem) => {
    if (!item.multimedia) {
      return;
    }
    return {uri: item.multimedia[2].url};
  };

  const getData = () => {
    if (selectedLocation) {
      return news.filter(newsItem => {
        return newsItem.geo_facet.find(
          location => location === selectedLocation,
        );
      });
    }
    return news;
  };

  const renderItem = ({item}: {item: INewsItem}) => {
    return (
      <NewsItem
        imageSource={getImageSource(item)}
        title={item.title}
        byline={item.byline}
        published_date={item.published_date}
      />
    );
  };

  return (
    <View style={styles.rootContainer}>
      {loading || getData().length < 0 ? (
        <ActivityIndicator size={'large'} color={colors.gainsboro} />
      ) : (
        <FlatList
          data={getData()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={ListEmptyComponent}
        />
      )}
    </View>
  );
};

export default NewsList;
