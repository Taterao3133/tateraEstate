
import jwt from 'jsonwebtoken';
import { errorhandler } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token; 

  if (!token) {
    
    return next(errorhandler(402, 'Unauthorized'));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return next(errorhandler(401, 'Token has expired'));
      }
      return next(errorhandler(403, 'Forbidden'));
    }

    req.user = user; 
    next();
  });
};