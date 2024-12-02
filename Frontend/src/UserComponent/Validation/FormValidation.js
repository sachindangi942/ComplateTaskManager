const joi = require("joi");

const user_val = (obj) => {


    const validation_rules = {
        name: joi.string().required().min(2),

       
        email: joi.string().required().email({ tlds: { allow: ['com', 'net', 'org'] } }).required(),
        password: joi.string().required().min(4).max(8),
        confirm_password: joi.string().required().valid(joi.ref('password'))

    };

    const Schema = joi.object(validation_rules);
    return Schema.validate(obj, {abortEarly:false});
};


export { user_val }; 