import React from 'react';
import { shallow  } from 'enzyme';
import ListContainer from './Statuelist';
import StatueListContainer from './StatueListContainer';

it('renders without crashing', () => {
  shallow (<ListContainer/>)
})