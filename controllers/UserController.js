const { v4: uuidv4 } = require('uuid');
const User = require('../models/UserModel');

// Data Dummi atau data palsu 
// let users = [
//      {
//           id: 1,
//           name: 'Rizky Perdana Nst',
//           email: 'rizkyperdananst@gmail.com',
//      },
//      {
//           id: 2,
//           name: 'Joni Munte',
//           email: 'jonimunte@gmail.com',
//      },
//      {
//           id: 3,
//           name: 'M. Kaja',
//           email: 'mkaja@gmail.com',
//      }
// ];

module.exports = {
     index: (req, res) => {
          const users = User.find();
          
          res.render('pages/user/index', {users: users});


          // res.send('Get User');
          // if(users.length > 0) {
          //      res.json({
          //           status: true,
          //           data: users,
          //           methoh: req.method,
          //           url: req.url,
          //           message: 'Success',
          //      });
          // } else {
          //      res.json({
          //           status: false,
          //           message: 'Data User Masih Kosong',
          //      })
          // }

          // res.render('pages/user/index', {users: users})
     },
     
     create: (req, res) => {
          res.render('pages/user/create');
     },

     store: (req, res) => {

          // ---- Cara Pertama = model.save()
          // const user = new User({
          //      name: req.body.name,
          //      email: req.body.email,
          //      password: req.body.password,
          // });

          // user.save();
          // res.redirect('/user');

          // ---- Cara Kedua = model.create();
          User.create({
               name: req.body.name,
               email: req.body.email,
               password: req.body.password,
          });
          res.redirect('/user');

          // users.push(req.body);
          // res.json({
          //      status: true,
          //      method: req.method,
          //      url: req.url,
          //      message: 'Berhasil di Tambah',
          // })
          // res.send(users);

          // users.push({
          //      id: uuidv4(),
          //      name: req.body.name,
          //      email: req.body.email,
          // });
          // res.send(users);
          // res.end();

     },

     show: (req, res) => {
          // res.send(req.params.id);
          const id = req.params.id;
          const data = users.filter(user => {
               return user.id == id;
          });

          // res.send(data);
          res.render('pages/user/show', {user: data});
     },

     update: (req, res) => {
          const id = req.params.id ;
          users.filter(user => {
               if (user.id == id) {
                    user.id = req.body.id;
                    user.name = req.body.name;
                    user.email = req.body.email;
     
                    return user;
               }
          })
          res.json({
               status: true,
               method: req.method,
               url: req.url,
               message: 'Berhasil di Ubah',
          })
          // res.json(users);
          // res.send(id);
     },
     
     delete: (req, res) => {
          let userId = req.params.userId;
          users = users.filter(user => user.id != userId);
          res.send(users);
     }
}