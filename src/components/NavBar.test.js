import React from 'react';
import { MemoryRouter as Router, Link } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from './NavBar';

test('NavBar renders correctly', () => {
    const tree = renderer.create(
        <Router><NavBar /></Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});