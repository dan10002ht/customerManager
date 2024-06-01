import {
  addCustomer,
  getCustomerById,
  getCustomers,
  getSearchCustomers,
  updateCustomer,
} from '../repositories/customerRepository';

export const add = async (req, res) => {
  try {
    const data = req.body;
    const id = await addCustomer({data});
    return res.status(200).json({success: true, data: id});
  } catch (e) {
    console.error(e);
    return res.status(500).json({error: e.message, success: false});
  }
};

export const getOne = async (req, res) => {
  try {
    const {id} = req.params;
    const data = await getCustomerById(id);
    return res.status(200).json({success: true, data});
  } catch (e) {
    console.log(e);
    return res.status(500).json({success: false, error: e.message});
  }
};

export const edit = async (req, res) => {
  try {
    const {id} = req.params;
    const data = req.body;
    await updateCustomer({id, data});
    return res.status(200).json({success: true});
  } catch (e) {
    return res.status(500).json({success: false, error: e.message});
  }
};

export const getList = async (req, res) => {
  try {
    const {searchText} = req.query;
    const getFunctions = !searchText || !searchText.trim() ? getCustomers : getSearchCustomers;
    const {data} = await getFunctions(req.query);
    return res.status(200).json({success: true, data});
  } catch (e) {
    console.log(e);
    return res.status(500).json({success: false, error: e.message});
  }
};
