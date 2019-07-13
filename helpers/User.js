'use strict';

module.exports = function() {

    return {
        
        SignUpValidation: (req, res, next) => {
            // req.checkBody('username', 'Username is Required').notEmpty();
            // req.checkBody('username', 'Username must not be less than 5').isLength({min:5});
            // req.checkBody('email', 'Email is Required').isEmail();
            // req.checkBody('email', 'Email is Invalid').notEmpty();
            // req.checkBody('password', 'Password is Required').notEmpty();
            // req.checkBody('password', 'Password must not be less than 5').isLenght({min:5});

            // req.getValidationResults()
            //     .then((result) => {
            //         const errors = result.array();
            //         const messages = [];

            //         errors.forEach((error) => {
            //             messages.push(error.msg);
            //         });

            //         req.flash('error', message);
            //         res.redirect('/signup');
                    
            //     })
            //     .catch((err) => {
            //         return next();
            //     })
        },

        LoginValidation: (req, res, next) => {
            // req.checkBody('email', 'Email is Required').isEmail();
            // req.checkBody('email', 'Email is Invalid').notEmpty();
            // req.checkBody('password', 'Password is Required').notEmpty();
            // req.checkBody('password', 'Password must not be less than 5').isLenght({min:5});

            // req.getValidationResults()
            //     .then((result) => {
            //         const errors = result.array();
            //         const messages = [];

            //         errors.forEach((error) => {
            //             messages.push(error.msg);
            //         });

            //         req.flash('error', message);
            //         res.redirect('/signup');
                    
            //     })
            //     .catch((err) => {
            //         return next();
            //     })
        }
    }
}

