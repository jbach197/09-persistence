'use strict';

const fs = require('fs');
const storage = module.exports = {};
const dataDirectory = `${__dirname}/../../data`;

storage.fetchAll = () => {
  return new Promise( (resolve,reject) => {
    let file = `${dataDirectory}/.json`;
    fs.readFile(file, (err,data) => {
      if(err) { reject(err); }
      if ( data ) {
        let record = JSON.parse(data.toString());
        resolve(record);
      }
      else {
        reject('Not found');
      }
    });
  });
};

storage.fetchOne = (id) => {
  return new Promise( (resolve,reject) => {
    let file = `${dataDirectory}/${id}.json`;
    fs.readFile(file, (err,data) => {
      if(err) { reject(err); }
      if ( data ) {
        let record = JSON.parse(data.toString());
        resolve(record);
      }
      else {reject('Not found');}
    });
  });
};

storage.updateOne = (record) => {}
  return new Promise( (resolve, reject) => {
    let file = `${dataDirectory}/${record.id}.json`
    let text = JSON.stringify(record);
    fs.writeFile(file, text, (err) => {
          if(err) { reject(err); }
          else { resolve(record); }
       });
   });

storage.deleteOne = (id) => {
  return new Promise( (resolve, reject) => {
    let file = `${dataDirectory}/${id}.json`
    fs.unlink(file, (err) => {
      if(err) {reject(err);}
      else {resolve(record);}
    });
  });
};

storage.save = (record) => {
  return new Promise( (resolve,reject) => {
    let file = `${dataDirectory}/${record.id}.json`;
    let text = JSON.stringify(record);
    fs.writeFile(file, text, (err) => {
      if(err) { reject(err); }
      else { resolve(record); }
    });
  });
};