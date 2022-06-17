import React, {FC, useCallback, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const Dropdown: FC<IDropdown> = ({
  placeholder,
  items,
  selectedItem,
  setSelectedItem,
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const onDropdownPressHandler = () => {
    setIsOpened(!isOpened);
  };

  const onDropdownListItemPressHandler = (item: string) => {
    setSelectedItem(item);
    setIsOpened(false);
  };

  const renderItem = useCallback(({item}: {item: string}) => {
    return (
      <TouchableOpacity
        style={styles.locationItem}
        onPress={() => onDropdownListItemPressHandler(item)}>
        <Text ellipsizeMode={'tail'}>{item}</Text>
      </TouchableOpacity>
    );
  }, []);

  const renderDropdown = () => {
    return (
      <TouchableOpacity onPress={onDropdownPressHandler} style={styles.overlay}>
        <FlatList
          data={items}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 30}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[styles.rootContainer, isOpened && styles.modifiedDropdownButton]}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={onDropdownPressHandler}>
        <Text style={styles.placeholderText}>
          {selectedItem ? selectedItem : placeholder}
        </Text>
        <Image
          source={require('../../../../../assets/down-chevron2.png')}
          style={[styles.image, isOpened && styles.mirroredImage]}
        />
      </TouchableOpacity>
      {isOpened && renderDropdown()}
    </View>
  );
};

interface IDropdown {
  placeholder: string;
  items: string[];
  selectedItem: string;
  setSelectedItem: (item: string) => void | null;
}

export default Dropdown;
