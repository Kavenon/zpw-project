var admin = require("firebase-admin");

function guard(req) {
  const auth = getToken(req);
  if (!auth) {
        return Promise.reject();
    }
    return admin
        .auth()
      .verifyIdToken(auth)
        .then(u => admin.auth().getUser(u.uid))
        .then(user => {
            if (user.displayName === 'admin')
                return Promise.resolve();
            return Promise.reject('not admin');
        });
}

function getToken(req) {
  if (req.query.auth) {
    return req.query.auth;
  }
  else if (req.body.auth) {
    return req.body.auth;
  }
  else {
    return null;
  }
}

module.exports = guard;
