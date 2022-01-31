import React from 'react';
import { shallow } from 'enzyme';
import { Tag } from './Tag';

describe('Tag component', () => {
  it('should render Tag component', function () {
    const component = shallow(<Tag text="Tag text" />);
    expect(component).toMatchSnapshot();
  });
});
