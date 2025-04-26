const helmet = require('helmet');
const cors = require('cors');
const sanitizeHtml = require('sanitize-html');

const configureHelmet = () => {
    return helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                imgSrc: ["'self'", "data:"],
                scriptSrc: ["'self'"],
                styleSrc: ["'self'", "'unsafe-inline'"],
                upgradeInsecureRequests: [],
            },
        },
        crossOriginResourcePolicy: { policy: "same-site" }
    });
};

const configureCors = () => {
    // return cors({
    //     origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : 'http://localhost:3000',
    //     methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    //     allowedHeaders: ['Content-Type', 'Authorization'],
    //     credentials: true,
    //     maxAge: 86400
    // });
    return cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true
    });
};

const sanitizeInputs = (req, res, next) => {
    if (req.body) {
        Object.keys(req.body).forEach((key) => {
            if (typeof req.body[key] === 'string') {
                req.body[key] = sanitizeHtml(req.body[key], {
                    allowedTags: [],
                    allowedAttributes: {}
                });
            }
        });
    }

    next();
};

module.exports = {
    configureHelmet,
    configureCors,
    sanitizeInputs
};