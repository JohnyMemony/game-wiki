import React from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme';

describe('Header component', () => {
  it('should render Header component', function () {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
