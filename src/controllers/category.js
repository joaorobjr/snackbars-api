import categoryModel from '../models/category.js';

async function create(req, res) {
  try {
    const category = await new categoryModel(req.body).save();
    res.send(category);
  } catch (error) {
    logger.error(`${req.method} ${req.baseUrl} - ${error.message}`);
    res.status(400).send({ error: error.message });
  }
}

async function retrieve(req, res) {
  try {
    const { description, type } = req.query;
    console.log(req.query);
    const condition = {};
    if (description) {
      condition.description = description;
    }
    if (type) {
      condition.type = type;
    }
    const categories = await categoryModel.find(condition).exec();
    res.send(categories);
  } catch (error) {
    logger.error(`${req.method} ${req.baseUrl} - ${error.message}`);
    res.status(400).send({ error: error.message });
  }
}

async function update(req, res) {
  try {
    const id = req.params.id;
    const { type, description } = req.body;
    const obj = {};
    if (type) {
      obj.type = type;
    }
    if (description) {
      obj.description = description;
    }
    const category = await categoryModel
      .findByIdAndUpdate(id, obj, { new: true })
      .exec();
    res.send(category);
  } catch (error) {
    logger.error(`${req.method} ${req.baseUrl} - ${error.message}`);
    res.status(400).send({ error: error.message });
  }
}

async function remove(req, res) {
  try {
    const id = req.params.id;
    await categoryModel.findByIdAndRemove(id).exec();
    res.end();
  } catch (error) {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
  }
}

async function findById(req, res) {
  try {
    const id = req.params.id;
    const category = await categoryModel.findById(id);
    res.send(category);
  } catch (error) {
    logger.error(`${req.method} ${req.baseUrl} - ${error.message}`);
    res.status(400).send({ error: error.message });
  }
}

export default { create, retrieve, update, remove, findById };
