import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    try {
        if (req.headers.authorization.split(' ')[0] === 'Bearer') {
            jwt.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
                if (err) {
                    return res.status(401).json({ message: 'Invalid token' });
                }
                if (decode.role == 'Admin') {
                    req.user = decode;
                    console.log("Authorized user");
                    next();
                } else {
                    throw new Error(" unAuthorized user");
                }
            });
        }
    } catch (err) {
        res.status(404).json({ message: err.message, data: null, statusCode: 404 });
    }
}
