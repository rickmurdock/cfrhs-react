import React from 'react';
import renderer from 'react-test-renderer';
import MuseumInfo from './MuseumInfo';

test('MuseumInfo renders correctly', () => {
    const tree = renderer.create(
        <MuseumInfo />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});