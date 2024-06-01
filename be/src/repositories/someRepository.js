import db from '../const/db';
import {prepareDoc} from './helpers/prepare';

const collection = db.collection('some');

export const create = async data => {
  const doc = await collection.add({...data, createdAt: new Date()});
  return doc.id;
};

export const getAll = async () => {
  const docs = await collection.get();
  return docs.docs.map(doc => prepareDoc({doc}));
};

export const update = async ({id, data}) => {
  return await collection.doc(id).update(data);
};

export const bulkDelete = async ({ids}) => {
  return await Promise.all(ids.map(id => collection.doc(id).delete()));
};
