db.createUser({
    user: 'the_username',
    pwd: 'the_password',
    roles: [
      {
        role: 'dbOwner',
        db: 'the_database',
      },
    ],
});

db.createCollection('users');
db.createCollection('blogs');

db.users.insert({username: "hellas", name: "Arto Hellas", passwordHash: "$2b$10$u6X9rmbdhDCGw.x0JLU0d.5tIu8zc5gkmEhxWh.OMKeQDSxnG.lAC", blogs: []}) //password: "newPass123"
