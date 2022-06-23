import React, {FC, useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NewsContext} from '../../context/NewsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './styles';

const NewsSectionsItem: FC<INewsHeaderItem> = ({itemName}) => {
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
      testID={`${itemName}.button`}
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

export default NewsSectionsItem;
