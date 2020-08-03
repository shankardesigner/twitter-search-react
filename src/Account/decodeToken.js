import jwt from 'jsonwebtoken';

export const decodeJwtToken = (token) => {
    const decodedToken = jwt.verify(token, 'BEARER');
    let decodedObject = jwt.verify(token, 'BEARER', (err, decodedToken) => decodedToken);

    return decodedObject;
}