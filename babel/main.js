let array = [1,2,3,4,5,6];
array.includes(2);

class Robot {
  constructor (msg) {
    this.message = msg
  }
  say() {
    alertMe(this.message)
  }
}

Object.assign({}, {
  a: 1,
  b: 2
});

const fn = () => 1;

new Promise(function(resolve, reject) {
  resolve(1)
});

fn();

import(
  /* webpackPrefetch: true */
  /* webpackChunkName: "name" */
  "./name").then(({
  default: _
}) => {
  console.log(_)
});

import { name } from './name';
console.log(name);
