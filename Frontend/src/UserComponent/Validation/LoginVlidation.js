import joi from "joi";

const LoginVlidation = (obj) => {


    const validation_rules = {
      email: joi.string().required().email({ tlds: { allow: ['com', 'net', 'org'] } }) // Allows specific TLDs or set to `{ allow: false }` to allow all
      .required(),
        password: joi.string().required().min(4).max(8)
    };


    const Schema = joi.object(validation_rules );
    return Schema.validate(obj, {abortEarly:false})
};

export { LoginVlidation }