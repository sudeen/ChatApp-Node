"use strict";

module.exports = function(_){
return {
    SignUpValidation: (req, res , next ) => {
        req.checkBody("usermane", "Username is Required").notEmpty();
        req.checkBody("usermane", "Username Must Not Be Less Than 5").isLength({min:5});
        req.checkBody("email", "Email is Required").notEmpty();
        req.checkBody("email", "Email is Invalid").isEmail();
        req.checkBody("passowrd", "Email is Required").notEmpty();
        req.checkBody("password", "Password Must Not be Less Than 5").isLength({min:5});

        req.getValidationResult().then((result) => {
            const errors = result.array();
            const messages = [];
            errors.forEach((error) => {
                messages.push(error.msg);
            })
            req.flash("error", messages);
            res.redirect("/signup");
            
        }).catch((err) => {
            return next();
        })

    }
}
}