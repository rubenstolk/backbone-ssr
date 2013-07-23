var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
  , notifierActions = [
      'comments',
      'likes',
      'transactions',
      'user-add',
      'feedback',
      'wants',
      'allow-subscriber',
      'subscriber-signup',
      'new-login'
    ]

module.exports = {
  development: {
    root: rootPath,
    db: "mongodb://localhost/jip112",
    facebook: {
      'localhost:4000': {
        appId: "363663163645036",
        appSecret: "9c3c0bde2389f7ec7ccfaeba3b49ec32",
        callbackURL: "http://localhost:4000/auth/facebook/callback"
      }
    },
    postmark: "fcbc0a15-02b0-43de-bee1-aaf436712769",
    domain: 'http://localhost:4000',
    email: false,
    notifier: {
      APN: true,
      facebook: false,
      email: true,
      actions: notifierActions,
      tplPath: templatePath,
      postmarkKey: 'fcbc0a15-02b0-43de-bee1-aaf436712769',
      parseAppId: 'ozZUamTb02cnnfkjCoz0LMeOkckExm7fZqbFYpju',
      parseApiKey: '0IFeEr9xxvDurYRshCXTJtbBBgrzGEKj9fSkYHuf'
    }
  },

  test: {
    root: rootPath,
    db: "mongodb://localhost/test231-jipio",
    facebook: {
      'localhost:5000': {
        appId: "363663163645036",
        appSecret: "9c3c0bde2389f7ec7ccfaeba3b49ec32",
        callbackURL: "http://localhost:5000/auth/facebook/callback"
      }
    },
    postmark: "fcbc0a15-02b0-43de-bee1-aaf436712769",
    domain: 'http://beta.jip.io',
    email: false,
    notifier: {
      APN: false,
      facebook: false,
      email: false,
      actions: notifierActions,
      tplPath: templatePath,
      postmarkKey: 'fcbc0a15-02b0-43de-bee1-aaf436712769',
      parseAppId: 'ozZUamTb02cnnfkjCoz0LMeOkckExm7fZqbFYpju',
      parseApiKey: '0IFeEr9xxvDurYRshCXTJtbBBgrzGEKj9fSkYHuf'
    }
  },

  staging: {
    root: rootPath,
    db: "mongodb://jipiobeta:jipiobeta@alex.mongohq.com:10056/app14807989",
    facebook: {
      'beta.jip.io': {
        appId: "293989217296609",
        appSecret: "17db1c1dc21b4eb83b6ca4450a9c8826",
        callbackURL: "http://beta.jip.io/auth/facebook/callback"
      },
      'beta.denieuwemarkt.com': {
        appId: "439158566177141",
        appSecret: "662fd2c0082366136927fef8d6ee1f38",
        callbackURL: "http://beta.denieuwemarkt.com/auth/facebook/callback"
      }
    },
    domain: 'beta.jip.io',
    postmark: "fcbc0a15-02b0-43de-bee1-aaf436712769",
    email: false,
    notifier: {
      APN: false,
      facebook: false,
      email: true,
      actions: notifierActions,
      tplPath: templatePath,
      postmarkKey: 'fcbc0a15-02b0-43de-bee1-aaf436712769',
      parseAppId: 'ozZUamTb02cnnfkjCoz0LMeOkckExm7fZqbFYpju',
      parseApiKey: '0IFeEr9xxvDurYRshCXTJtbBBgrzGEKj9fSkYHuf'
    }
  },

  production: {
    root: rootPath,
    db: "mongodb://jipio:jipio@linus.mongohq.com:10039/app14814415",
    facebook: {
      'jip.io': {
        appId: "442102049143442",
        appSecret: "1fa4449e1b22a3c5c21b1429f2e0a2e9",
        callbackURL: "http://jip.io/auth/facebook/callback"
      },
      'denieuwemarkt.com': {
        appId: "113770938821297",
        appSecret: "abc01997f171ae2791780f7377e84a22",
        callbackURL: "http://denieuwemarkt.com/auth/facebook/callback"
      }
    },
    domain: 'http://jip.io',
    postmark: "fcbc0a15-02b0-43de-bee1-aaf436712769",
    email: true,
    notifier: {
      APN: true,
      facebook: false,
      email: true,
      actions: notifierActions,
      tplPath: templatePath,
      postmarkKey: 'fcbc0a15-02b0-43de-bee1-aaf436712769',
      parseAppId: 'ozZUamTb02cnnfkjCoz0LMeOkckExm7fZqbFYpju',
      parseApiKey: '0IFeEr9xxvDurYRshCXTJtbBBgrzGEKj9fSkYHuf'
    }
  }
}
