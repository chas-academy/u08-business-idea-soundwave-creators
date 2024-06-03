import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  id: string;
  email: string;
}

// this i added for play list 
declare global {
  namespace Express {
    interface Request {
      userId?: string; // Define userId property on Request
    }
  }
}


const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
    (req as any).userId = decoded.id;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default auth;




//elow is js format 

// middleware/authenticate.js
// const passport = require('passport');

// const authenticate = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/login');  // or respond with status 401 Unauthorized
// };

// module.exports = authenticate;
