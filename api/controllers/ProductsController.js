'use strict';

const db = require('../db');

module.exports = {
  async fetchAll(req, res) {
    try {
      let sql = 'SELECT * FROM products LIMIT $1';
      await db.query(sql, [req.query.limit], (err, response) => {
        if (err) {
          return res.status(400).send({
            msg: err
          })
        }
        res.status(200).send({
          products: response.rows
        });
      })
    } catch (err) {
      res.status(500).send({
        msg: 'Server error!',
        error: err,
      })
    }
  },

  async create(req, res) {
    try {
      let sql = 'INSERT INTO products (id, code, name, price) VALUES ($1, $2, $3, $4)';
      await db.query(sql, [req.body.id, req.body.code, req.body.name, req.body.price], (err, response) => {
        if (err) {
          return res.status(400).send({
            msg: err
          })
        }
        res.json({ message: 'Create Successfully!' })
      })
    } catch (err) {
      res.status(500).send({
        msg: 'Server error!',
        error: err,
      })
    }
  },

  async getByID(req, res) {
    try {
      let sql = 'SELECT * FROM products WHERE id = $1';
      await db.query(sql, [req.query.id], (err, response) => {
        if (err) {
          return res.status(400).send({
            msg: err
          })
        }
        res.status(200).send({
          category: response.rows
        });
      })
    } catch (err) {
      res.status(500).send({
        msg: 'Server error!',
        error: err,
      })
    }
  },

  async update(req, res) {
    try {
      let data = req.body;
      const values = [
        data.id || response.rows[0].id,
        data.code || response.rows[0].code,
        data.name || response.rows[0].name,
        data.price || response.rows[0].price
      ]
      db.query('UPDATE products SET id = $1, code = $2, name = $3, price = $4 WHERE id = $5',
        [...values, req.query.id], (error, result) => {
          if (error) {
            return res.status(400).send({
              msg: error
            })
          }
          res.json({ message: 'Update Successfully!' })
        })
    } catch (err) {
      res.status(500).send({
        msg: 'Server error!',
        error: err,
      })
    }
  },

  async getByCode(req, res) {
    try {
      let sql = 'SELECT * FROM products WHERE code = $1';
      await db.query(sql, [req.query.code], (err, response) => {
        if (err) {
          return res.status(400).send({
            msg: err
          })
        }
        res.status(200).send({
          category: response.rows
        });
      })
    } catch (err) {
      res.status(500).send({
        msg: 'Server error!',
        error: err,
      })
    }
  },

  async createBatchOfProducts(req, res) {
    try {

    } catch (err) {
      res.status(500).send({
        msg: 'Server error!',
        error: err,
      })
    }
  }
}