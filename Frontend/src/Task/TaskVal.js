const joi = require("joi");

const task_val = (obj) => {


    const validation_rules = {
        title: joi.string().required().min(2),
        description: joi.string().required().min(2),
        due_date: joi.string().required().min(2),
      };

    const Schema = joi.object(validation_rules);
    return Schema.validate(obj, {abortEarly:false});
};


export { task_val }; 



