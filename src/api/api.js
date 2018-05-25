'use strict';

const router = require('../lib/router.js');
const Note = require('../models/note.js');

let sendJSON = (res, obj) => {
  res.statusCode = 200;
  res.statusMessagae = 'ok';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(obj));
  res.end();
};

router.get('/api/v1/notes', (req, res) => {
  let id = req.url.query.id || null;
    if(id) {
      let note = new Note();
       note.fetchOne(id)
          .then(data => sendJSON(res, data))
          .catch(console.error);
    }
    else {
      let note = new Note();
        note.fetchAll()
          .then(data => sendJSON(res, data))
          .catch(console.err);
    }
});

router.delete('/api/v1/notes', (req, res) => {
  let id = req.url.query.id || null;
    if(!id) {throw 'id not provided';}

  let content = {
        deleted: id,
    };
    sendJSON(res, content);
});

router.post('/api/v1/notes', (req, res) => {
  let record = new Note(req.body);
  record.save()
    .then(data => sendJSON(res, data))
    .catch(console.error);
});

module.exports = {};
