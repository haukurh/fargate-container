'use strict';

const logger = require('./logger');

const routes = {
    paths: {
        GET: {},
        POST: {},
    },
    get: (path, callback) => { routes.paths.GET[path] = callback; },
    post: (path, callback) => { routes.paths.POST[path] = callback; },
    route: (req, res) => {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const method = req.method;
        const path = url.pathname;
        if (['GET', 'POST'].includes(method)) {
            if (path in routes.paths[method]) {
                logger.log(`Incoming request to ${path}`);
                return routes.paths[method][path](req, res);
            }
            logger.info(`Howdy, we got an 404 => ${path}`);
            res.statusCode = 404;
            return res.end();
        }
        logger.warn(`Holy moly, method '${method}' is not allowed`, {
            method,
            path,
        });
        res.statusCode = 405;
        return res.end();
    },
};

module.exports = routes;
