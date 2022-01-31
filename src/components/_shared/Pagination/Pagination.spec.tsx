import { shallow } from 'enzyme';
import React from 'react';
import { Pagination } from './Pagination';

describe('Pagination component', () => {
  it('should render Pagination component', function () {
    const component = shallow(<Pagination page={1} total={10} onChange={() => {}} />);

    expect(component).toMatchSnapshot();
  });
});