import React, {FC, memo} from 'react';
import {FlatList, ScrollView, StyleProp, ViewStyle} from 'react-native';
import {newsTypes} from '../../constans';
import {NewsScreenHeaderView, NewsHeaderTitle} from './styles';
import NewsSectionsItem from '../NewsSectionsItem/NewsSectionsItem';
import DropdownSearchSection from '../DropdownSearchSection/DropdownSearchSection';

const flatListContentContainerStyle: StyleProp<ViewStyle> = {
  alignSelf: 'flex-start',
  justifyContent: 'space-between',
};

const numColumns = Math.ceil(newsTypes.length / 2)

const NewsScreenHeader: FC = () => {
  const renderItem = ({item}: {item: string}) => {
    return <NewsSectionsItem itemName={item} />;
  };

  return (
    <NewsScreenHeaderView>
      <NewsHeaderTitle>Section</NewsHeaderTitle>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          data={newsTypes}
          renderItem={renderItem}
          numColumns={numColumns}
          contentContainerStyle={flatListContentContainerStyle}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
      <DropdownSearchSection />
    </NewsScreenHeaderView>
  );
};

export default memo(NewsScreenHeader);
