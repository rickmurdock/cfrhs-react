import React from 'react';
import renderer from 'react-test-renderer';
import TitleBar from './TitleBar';

test('TitleBar renders correctly', () => {
    const tree = renderer.create(
        <TitleBar />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
