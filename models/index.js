// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsToMany(Category, {
  through: {
    model: Product,
    unique: false
  },
  as: 'Product'
});

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: Category,
    unique: false
  },
  as: 'Category'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  through: {
    model: Product,
    unique: false
  },
  as: 'ProductTags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'Tags'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
