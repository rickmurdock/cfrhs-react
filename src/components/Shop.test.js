import React from 'react';
import renderer from 'react-test-renderer';
import Shop from './Shop';

test('Shop renders correctly', () => {
    const tree = renderer.create(
        <Shop />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});