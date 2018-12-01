var faker = require('faker');

function generate(type){
  if(this.regExp.test(type)){
    let text = faker.lorem.text();
    return text;
  }
  return false;
}

module.exports = {
  generate: generate,
  regExp: /^text$/
};
