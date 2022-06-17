import {Image, ImageSourcePropType, Text, View} from 'react-native';
import React, {FC, useCallback} from 'react';
import {styles} from './styles';
import dayjs from 'dayjs';

const NewsItem: FC<INewsItem> = ({
  title,
  byline,
  published_date,
  imageSource = require('../../../../../assets/placeholder.png'),
}) => {
  const getPublishedPeriod = useCallback(() => {
    const currentDate = dayjs(new Date());

    if (currentDate.diff(published_date, 'd') > 0) {
      return `${currentDate.diff(published_date, 'd')} days ago`;
    } else if (currentDate.diff(published_date, 'h') > 0) {
      return `${currentDate.diff(published_date, 'h')} hours ago`;
    } else if (currentDate.diff(published_date, 'm') > 0) {
      return `${currentDate.diff(published_date, 'm')} minutes ago`;
    }
  }, [published_date]);

  return (
    <View style={styles.rootContainer}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.newsItemInfoContainer}>
        <Text
          numberOfLines={2}
          ellipsizeMode={'tail'}
          style={styles.newsItemContentTitle}>
          {title}
        </Text>
        <View>
          <Text ellipsizeMode={'tail'} style={styles.newsItemContentAuthor}>
            By: {byline}
          </Text>
          <Text ellipsizeMode={'tail'} style={styles.newsItemContentDate}>
            Published: {getPublishedPeriod()}
          </Text>
        </View>
      </View>
    </View>
  );
};

interface INewsItem {
  title: string;
  byline: string;
  published_date: string;
  imageSource?: ImageSourcePropType;
}

export default NewsItem;
