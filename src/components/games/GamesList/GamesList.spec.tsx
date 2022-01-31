import React from 'react';
import { shallow } from 'enzyme';
import { GamesList } from './GamesList';

describe('GamesList component', () => {
  it('should render GamesList component', function () {
    const component = shallow(<GamesList page={1} total={10} onPageChange={() => {}} items={[]} />);

    expect(component).toMatchSnapshot();
  });
});
