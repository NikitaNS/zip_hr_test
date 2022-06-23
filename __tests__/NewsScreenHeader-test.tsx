import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import NewsScreenHeader from '../src/feature/News/components/NewsScreenHeader/NewsScreenHeader';
import {newsTypes} from '../src/feature/News/constans';

it('render  news screen elements', () => {
  const {getByText} = render(<NewsScreenHeader />);

  newsTypes.forEach(type => {
    expect(getByText(type.charAt(0).toLocaleUpperCase() + type.slice(1)));
  });
});
