import React from 'react';
import renderer from 'react-test-renderer';
import LinkCard from './LinkCard';

test('LinkCard renders correctly', () => {
    const tree = renderer.create(
        <LinkCard />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});