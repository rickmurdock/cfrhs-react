import React from 'react';
import renderer from 'react-test-renderer';
import FooterLower from './FooterLower';

test('FooterLower renders correctly', () => {
    const tree = renderer.create(
        <FooterLower />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});