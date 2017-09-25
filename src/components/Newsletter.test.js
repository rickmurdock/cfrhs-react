import React from 'react';
import renderer from 'react-test-renderer';
import Newsletter from './Newsletter';

test('Newsletter renders correctly', () => {
    const tree = renderer.create(
        <Newsletter />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});