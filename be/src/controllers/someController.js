import {create, getAll, update} from '../repositories/someRepository';

export const createSome = async (req, res) => {
  try {
    const {data} = req.body;
    const docId = await create(data);
    return res.status(200).json({sucess: true, data: docId});
  } catch (e) {
    console.error(e);
    return res.status(500).json({error: e.message, success: false});
  }
};
