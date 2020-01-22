import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('App has the 3 main layout lements, they have content', () => {

  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<App />);
  });

  test('App has header', () => {   
    const app_header = wrapper.find('[data-test="app-header"]');
    expect(app_header.text()).not.toBe("");
  });

  test('App has main', () => {   
    const app_main = wrapper.find('[data-test="app-main"]');
    expect(app_main.text()).not.toBe("");
  });

  test('App has footer', () => {    
    const app_footer = wrapper.find('[data-test="app-footer"]');
    expect(app_footer.text()).not.toBe("");
  });
});
