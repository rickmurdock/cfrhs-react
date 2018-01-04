import React from 'react';
import renderer from 'react-test-renderer';
import Gallery from './Gallery';

test('Gallery renders correctly', () => {
    const tree = renderer.create(
        <Gallery />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});