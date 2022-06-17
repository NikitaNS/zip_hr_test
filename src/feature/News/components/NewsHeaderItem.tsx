import React, {FC, useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './NewsScreenHeader/styles';
import {NewsContext} from '../context/NewsContext';
import AsyncStorage from '@react-native-community/async-storage';

const NewsHeaderItem: FC<INewsHeaderItem> = ({itemName}) => {
  const {setNewsType, newsType} = useContext(NewsContext);

  const onPressHandler = async () => {
    await AsyncStorage.setItem('newsType', itemName);
    setNewsType(itemName);
  };

  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        itemName === newsType && styles.selectedNewTypeItem,
      ]}
      onPress={onPressHandler}>
      <Text style={itemName === newsType && styles.selectedNewTypeItemTitle}>
        {itemName.charAt(0).toLocaleUpperCase() + itemName.slice(1)}
      </Text>
    </TouchableOpacity>
  );
};

interface INewsHeaderItem {
  itemName: string;
}

export default NewsHeaderItem;
