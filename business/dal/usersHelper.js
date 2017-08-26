const db = require('./storage/sqlitestore.js');

module.exports = {
    createUser(id, name, avatar){
        db.createUser(id, name, avatar);
        return {
          "userId": id,
          "name": name,
          "avatarUrl": avatar,
          "wins": 0,
          "losses": 0,
          "streak": 0
        };
    }
}