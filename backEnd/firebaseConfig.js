const admin = require('firebase-admin')
const serviceAccount = require('./produtora-314graus-firebase-adminsdk-g8ipu-5098730edd.json')
require('firebase/firestore')

if (!admin.apps.length) {
  console.log('! Inicializando firebase Admin...')
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const db = admin.firestore()
module.exports = db