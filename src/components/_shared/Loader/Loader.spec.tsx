import React from 'react';
import { shallow } from 'enzyme';
import { Loader } from './Loader';

describe('Loader component', () => {
  it('should render Loader component', function () {
    const component = shallow(<Loader centered={false} />);
    
    expect(component).toMatchSnapshot();
  });

  it('should render centered Loader component', function () {
    const component = shallow(<Loader centered />);

    expect(component).toMatchSnapshot();
  });
});
