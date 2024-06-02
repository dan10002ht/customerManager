import db from '../const/db';
import convertVietnameseToEnglish from '../helpers/convertVietnameseToEnglish';
import getByIds from '../helpers/getByIds';
import {paginateQuery} from '../helpers/paginateQuery';
import {prepareDoc} from '../helpers/prepare';
import {createOrUpdateCache, getCacheByType} from './cacheRepository';

const collection = db.collection('customer');

export const addCustomer = async ({data}) => {
  const toCreatedData = {...data, createdAt: new Date()};
  const doc = await collection.add(toCreatedData);
  const [cacheData] = await getCacheByType('customer');
  await createOrUpdateCache({
    type: 'customer',
    dataJson: JSON.stringify([
      ...cacheData,
      {...toCreatedData, id: doc.id, searchName: convertVietnameseToEnglish(data.ten_khach_hang)},
    ]),
  });
  return doc.id;
};

export const updateCustomer = async ({id, data}) => {
  const {createdAt, ...rest} = data;
  const toUpdateData = {...rest, updatedAt: new Date()};
  await collection.doc(id).update(toUpdateData);
  const [cacheData] = await getCacheByType('customer');
  if (!cacheData.find((x) => x.id === id)) {
    return await createOrUpdateCache({
      type: 'customer',
      dataJson: JSON.stringify([
        ...cacheData,
        {...toUpdateData, id, searchName: convertVietnameseToEnglish(rest.ten_khach_hang)},
      ]),
    });
  }
  const toUpdateCacheData = cacheData.map((cData) =>
    cData.id === data.id
      ? {
          ...cData,
          ...toUpdateData,
          id,
          searchName: convertVietnameseToEnglish(data.ten_khach_hang),
        }
      : cData,
  );
  return await createOrUpdateCache({type: 'customer', dataJson: JSON.stringify(toUpdateCacheData)});
};

export const getCustomerById = async (id) => {
  const doc = await collection.doc(id).get();
  return prepareDoc({doc});
};

export const getCustomers = async (query) => {
  const {data, hasPre, total, hasNext, previousCursor, nextCursor} = await paginateQuery(
    collection,
    collection,
    query,
  );
  return {data, hasPre, total, hasNext, previousCursor, nextCursor};
};
export const getSearchCustomers = async (query) => {
  try {
    const {searchText, page, searchField} = query;
    const limit = parseInt(query.limitPerPage || 10);
    const pageNum = parseInt(page || 1);
    const [suggestions] = await getCacheByType('customer', searchText, searchField, query.gender);
    if (query.sort) {
      suggestions.sort((a, b) =>
        query.sort === 'desc'
          ? new Date(b.createdAt) - new Date(a.createdAt)
          : new Date(a.createdAt) - new Date(b.createdAt),
      );
    }
    const ids = suggestions.slice(limit * (pageNum - 1), limit * pageNum).map((x) => x.id);
    const data = await getByIds({collection, ids, selectDoc: true});
    const hasPre = pageNum > 1;
    const hasNext = suggestions.length > limit * pageNum;
    return {
      data,
      hasPre,
      hasNext,
      total: suggestions.length,
      previousCursor: hasPre && data[0].id,
      nextCursor: hasNext && data[data.length - 1].id,
    };
  } catch (e) {
    return {data: [], error: e.message};
  }
};
