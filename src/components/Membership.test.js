import React from 'react';
import renderer from 'react-test-renderer';
import Membership from './Membership';

test('Membership renders correctly', () => {
    const tree = renderer.create(
        <Membership />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});