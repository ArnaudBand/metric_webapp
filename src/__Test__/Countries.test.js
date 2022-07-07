import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Countries from '../components/Countries/Countries';

describe('Render components', () => {
  it('render HomePage', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Countries /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
