const admin = require('firebase-admin')
const secret = require('../firebase-secret.json')
const { GeoFirestore } = require('geofirestore')

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(secret)
    })    
}

const firestore = admin.firestore()
const db = new GeoFirestore(firestore)

// isso é a mesma coisa que db: db
module.exports = {
    db  
}