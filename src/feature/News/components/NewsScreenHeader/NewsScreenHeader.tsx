import React, {FC, memo} from 'react';
import {FlatList, ScrollView, View, Text} from 'react-native';
import {newsTypes} from '../../constans';
import {styles} from './styles';
import NewsHeaderItem from '../NewsHeaderItem';
import DropdownSearchSection from '../DropdownSearchSection/DropdownSearchSection';

const NewsScreenHeader: FC = () => {
  const renderItem = ({item}: {item: string}) => {
    return <NewsHeaderItem itemName={item} />;
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.newsHeaderTitle}>Section</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          data={newsTypes}
          renderItem={renderItem}
          numColumns={Math.ceil(newsTypes.length / 2)}
          contentContainerStyle={{
            alignSelf: 'flex-start',
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
      <DropdownSearchSection />
    </View>
  );
};

export default memo(NewsScreenHeader);
