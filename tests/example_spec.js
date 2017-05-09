// node
import path from 'path';
// vendors
import React from 'react';
// project
import Menu from 'components/Menu';

import jasmineEnzyme from 'jasmine-enzyme';

import {mount} from 'enzyme'

let wrapper

let root = document.createElement("div")
root.id = 'root'
document.body.appendChild(root)

beforeEach(() => {
  jasmineEnzyme();

  wrapper = mount(<Menu />, {
    attachTo: root
  })
});

describe('Testing', () => {


  it('node import should work', () => {
    expect(path).not.toBe(null);
  });
  it('vendors import should work', () => {
    expect(React).not.toBe(null);
  });
  it('local import should exist', () => {
    console.log(wrapper.html())
    expect(Menu).not.toBe(null);
  });
  it('should be 2', () => {
    let sum = 1 + 1;
    expect(2).toBe(2);
  });
});
