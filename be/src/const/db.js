import sAccount from '../../serviceAccount.json';
import dotenv from 'dotenv';
dotenv.config();

import * as admin from 'firebase-admin';
const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
  : sAccount;
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

import {getFirestore} from 'firebase-admin/firestore';

const db = getFirestore();

export default db;
