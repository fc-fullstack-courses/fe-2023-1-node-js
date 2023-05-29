const {MyMath} = require('./MyMath.js');
class Component {
  render() {
    return `rendered some component with data`;
  }
}

console.log('hello from component');

exports.Component = Component;