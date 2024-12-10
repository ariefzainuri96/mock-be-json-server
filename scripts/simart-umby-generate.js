const fs = require('fs');
const path = require('path');

// Load your JSON files
const pengumuman = require('../model/simart-umby/pengumuman/pengumuman.json');
const dataBarangAset = require('../model/simart-umby/data-barang-aset/data-barang-aset.json');
const users = require('../model/simart-umby/users/users.json');
const login = require('../model/simart-umby/login/login.json');

// Merge the JSON data
const mergedDb = {
    pengumuman: pengumuman,
    dataBarangAset: dataBarangAset,
    users: users,
    login: login
};

// Write the merged JSON to db.json
fs.writeFileSync(
    path.join(__dirname, 'db.json'),
    JSON.stringify(mergedDb, null, 2), // Pretty-print with 2 spaces
    'utf-8'
);

console.log('db.json has been updated!');