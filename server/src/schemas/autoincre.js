const { Schema, Mongoose } = require('mongoose');
const AutoIncrementFactory = require('mongoose-sequence');

module.exports = (schema, mongoose, name, inc_field) => {
    const AutoIncrement = AutoIncrementFactory(mongoose);
    const option = { model: name, field: inc_field, startAt: 0, incrementBy: 1  };
    schema.plugin(AutoIncrement, option);
};