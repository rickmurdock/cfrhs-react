import React from 'react';
import renderer from 'react-test-renderer';
import History from './History';

test('History renders correctly', () => {
    const tree = renderer.create(
        <History />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});