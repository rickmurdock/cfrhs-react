import React from 'react';
import renderer from 'react-test-renderer';
import Links from './Links';

test('Links renders correctly', () => {
    const tree = renderer.create(
        <Links />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});