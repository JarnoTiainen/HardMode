/*
* Calling Node.js-modules "Express" and "NeDB".
*/
const express = require('express');
const Datastore = require('nedb');

/*
* Initiating constant "app" using Express.
*/
const app = express();

/*
* Initiating a server connection at port 4000.
*/
app.listen(4000, () => {
  console.log('Server listening at port 4000.');
});

/*
* Telling the server to use files in the "public"-folder and to only accept
* packages sent to it if their size is less than or equal to 1 MB.
*/
app.use(express.static('./public'));
app.use(express.json({
  limit: '1mb'
}));

/*
* Assigning files to be used as databases for Champion data and User data.
*/
const db = new Datastore('database.db');
const dbUsers = new Datastore('users.db');

/*
* Loading database information on startup.
*/
db.loadDatabase();
dbUsers.loadDatabase();

/*
* Defining a unique index for "usernames" to avoid duplication.
*/
dbUsers.ensureIndex({fieldName: 'username', unique: true}, function (err) {
});

/*
* Receives a request from a client and returns the data of every champion in
* the database. Uses the /api -route.
*/
app.get('/api', (req, res) => {
  db.find({}, (err, data) => {
    if(err) {
      res.end();
      return;
    }
    res.json(data);
  });
});

/*
* Receives a request from a client and returns the data of every user in
* the database. Uses the /user -route.
*/
app.get('/user', (req, res) => {
  dbUsers.find({}, (err, data) => {
    if(err) {
      res.end();
      return;
    }
    res.json(data);
  });
});

/*
* Receives a request from a client and inserts the data of a new user into the
* database. Uses the /user -route.
*/
app.post('/user', (req, res) => {
  dbUsers.insert(req.body);
  res.json(req.body);
});

/*
* Receives a request from a client and returns the data of a champion in the
* database that matches the given name. Uses the /champ -route.
*/
app.post('/champ', (req, res) => {
  db.find({champion: req.body.champion}, (err, data) => {
    if(err) {
      res.end();
      return;
    }
    res.json(data);
  });
});

/*
* Receives a request from a client and returns the data of a user in the
* database that matches the given name. Uses the /userCheck -route.
*/
app.post('/userCheck', (req, res) => {
  dbUsers.find({username: req.body.username}, (err, data) => {
    if(err) {
      res.end();
      return;
    }
    res.json(data);
  });
});

/*
* Receives a request from a client and returns the data of a user in the
* database that matches the given name-username-combination. Uses the
* /loginCheck -route.
*/
app.post('/loginCheck', (req, res) => {
  dbUsers.find({username: req.body.username, password: req.body.password}, (err, data) => {
    if(err) {
      res.end();
      return;
    }
    res.json(data);
  });
});

/*
* Receives a request from a client and returns the data of a user in the
* database that matches the given name. Uses the /championList -route.
*/
app.post('/championList', (req, res) => {
  dbUsers.find({username: req.body.username}, (err, data) => {
    if(err) {
      res.end();
      return;
    }
    res.json(data);
  });
});

/*
* Receives a request from a client and updates the championList-data of a user
* in the database that matches the given name. Uses the /userCheck -route.
* Additionally compacts the users.db -file for viewing purposes.
*/
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