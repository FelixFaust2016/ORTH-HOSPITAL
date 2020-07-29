const db = require("../models");

exports.getQuotes = async (req, res, next) => {
  try {
    const quotes = await db.Quotes.find();
    res.status(200).json(quotes);
  } catch (err) {
    err.status(404);
    next(err);
  }
};

exports.addQuote = async (req, res, next) => {
  try {
    const quote = await db.Quotes.create(req.body) 
    
    res.status(201).json(quote);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};
