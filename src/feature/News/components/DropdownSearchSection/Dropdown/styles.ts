import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../constans';

export const styles = StyleSheet.create({
  rootContainer: {
    width: Dimensions.get('window').width / 2 - 30,
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingHorizontal: 20,
    zIndex: 100,
    elevation: 100,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  image: {
    width: 10,
    height: 10,
    tintColor: colors.gray,
  },
  mirroredImage: {
    transform: [{scaleX: -1}, {scaleY: -1}],
  },
  placeholderText: {
    fontWeight: '600',
    color: colors.gray,
  },
  overlay: {
    maxHeight: 250,
    backgroundColor: colors.white,
    position: 'absolute',
    top: 40,
    zIndex: 101,
    elevation: 101,
    width: Dimensions.get('window').width / 2 - 30,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    overflow: 'hidden',
  },
  locationItem: {
    width: Dimensions.get('window').width / 2 - 30,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.ghostWhite,
    zIndex: 100,
    elevation: 100,
  },
  modifiedDropdownButton: {
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    zIndex: 100,
    elevation: 100,
  },
});
