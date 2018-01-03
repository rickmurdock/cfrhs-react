import React from 'react';
import { MemoryRouter as Router, Link } from 'react-router-dom';
import renderer from 'react-test-renderer';
import FooterUpper from './FooterUpper';

test('FooterUpper renders correctly', () => {
    const tree = renderer.create(
        <Router><FooterUpper /></Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});