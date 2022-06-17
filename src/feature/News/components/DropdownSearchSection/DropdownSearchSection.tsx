import React, {useContext} from 'react';
import {View} from 'react-native';
import Dropdown from './Dropdown/Dropdown';
import {styles} from './styles';
import {NewsContext} from '../../context/NewsContext';

const DropdownSearchSection = () => {
  const {setSelectedLocation, selectedLocation, locations} =
    useContext(NewsContext);

  return (
    <View style={styles.rootContainer}>
      <Dropdown
        placeholder={'Location'}
        items={locations}
        selectedItem={selectedLocation}
        setSelectedItem={setSelectedLocation}
      />
      <Dropdown
        placeholder={'Keywords'}
        items={[]}
        selectedItem={''}
        setSelectedItem={() => null}
      />
    </View>
  );
};

export default DropdownSearchSection;
