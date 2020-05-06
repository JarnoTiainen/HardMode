const express = require('express');
const Datastore = require('nedb');
const app = express();
app.listen(4000, () => {
  console.log('Server listening at port 4000.');
});
app.use(express.static('./public'));
app.use(express.json({
  limit: '1mb'
}));
const db = new Datastore('database.db');
const dbUsers = new Datastore('users.db');
db.loadDatabase();
dbUsers.loadDatabase();

dbUsers.ensureIndex({ fieldName: 'username', unique: true }, function (err) {
});
app.get('/api', (req, res) => {
  db.find({}, (err, data) => {
    if(err) {
      res.end();
      return;
    }
    res.json(data);
  });
});
app.get('/user', (req, res) => {
  dbUsers.find({}, (err, data) => {
    if(err) {
      res.end();
      return;
    }
    res.json(data);
  });
});
app.post('/user', (req, res) => {
  dbUsers.insert(req.body);
  res.json(req.body);
});
app.post('/api', (req, res) => {
  db.insert(req.body);
  res.json(req.body);
});
app.post('/champ', (req, res) => {
  db.find({champion: req.body.champion}, (err, data) => {
    if(err) {
      res.end();
      return;
    }
    res.json(data);
  });
});
app.post('/userCheck', (req, res) => {
  dbUsers.find({username: req.body.username}, (err, data) => {
    if(err) {
      res.end();
      return;
    }
    res.json(data);
  });
});
app.post('/loginCheck', (req, res) => {
  dbUsers.find({username: req.body.username, password: req.body.password}, (err, data) => {
    if(err) {
      res.end();
      return;
    }
    res.json(data);
  });
});
app.post('/championList', (req, res) => {
  dbUsers.find({username: req.body.username}, (err, data) => {
    if(err) {
      res.end();
      return;
    }
    res.json(data);
  });
});
app.post('/updateChampionList', (req, res) => {
  dbUsers.update({username: req.body.username}, {$set:{championList: req.body.championList}}, (err, data) => {
    if(err) {
      res.end();
      return;
    }
    dbUsers.persistence.compactDatafile();
    res.json(data);
  });
});