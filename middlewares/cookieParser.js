export default (req, res, next) => {
    const parsedCookies = req.headers.cookie
        ? req.headers.cookie
            .split('; ')
            .reduce((acc, el) => {
                acc[el.slice(0, el.indexOf('='))] = el.slice(el.indexOf('=') + 1);
                return acc;
            }, {})
        : {};
    req.parsedCookies = parsedCookies;
    next();
};