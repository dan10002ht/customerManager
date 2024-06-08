import { FieldValue } from 'firebase-admin/firestore';
import db from '../const/db';
import convertVietnameseToEnglish from '../helpers/convertVietnameseToEnglish';

const collection = db.collection('cache');

const fields = {
  ten_khach_hang: 'searchName',
  so_dien_thoai: 'so_dien_thoai',
  email: 'email',
};

export const getCacheByType = async (
  type,
  search = '',
  searchField = 'ten_khach_hang',
  gender = 'all',
) => {
  const key = fields[searchField];
  const cacheDocs = await collection.where('type', '==', type).limit(1).get();
  if (cacheDocs.size > 0) {
    const [doc] = cacheDocs.docs;
    const {dataJson, count} = doc.data();
    const cacheData = JSON.parse(dataJson).filter((data) => {
      const searchFilter =
        data?.[key]?.toLowerCase()?.includes(convertVietnameseToEnglish(search?.toLowerCase())) ||
        search === '';
      if (gender === 'all') return searchFilter;
      return searchFilter && data.gender === gender;
    });
    return [cacheData, cacheDocs, count];
  }
  return [[], null, 0];
};

export const createOrUpdateCache = async ({type, dataJson, isCreated = false}) => {
  const [, cacheDocs] = await getCacheByType(type);
  const toUpdateData = {
    dataJson,
    updatedAt: new Date(),
    count: FieldValue.increment(isCreated ? 1 : 0)
  };

  if (cacheDocs?.size > 0) {
    const doc = cacheDocs.docs[0];
    return doc.ref.update(toUpdateData);
  }

  return collection.add({
    type,
    dataJson,
    count: 1
  });
};
