"use strict";
/*import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import User from '../models/user';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuth = async (req: Request, res: Response) => {
  const { tokenId } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const email = payload?.email;
    const name = payload?.name;

    if (!email || !name) {
      return res.status(400).json({ message: 'Invalid Google token' });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email });
    }

    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const googleAuthCallback = async (req: Request, res: Response) => {
  const { code } = req.body;

  try {
    const { tokens } = await client.getToken(code);
    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token!,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const email = payload?.email;
    const name = payload?.name;

    if (!email || !name) {
      return res.status(400).json({ message: 'Invalid Google token' });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email });
    }

    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};*/
/*
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/user';

export const googleAuth = async (req: Request, res: Response) => {
  const { tokenId } = req.body;

  try {
    // Verify the token and get user info from Google
    // This example uses a dummy verification function
    const { email, name } = verifyGoogleToken(tokenId);

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email, password: '' }); // Google users won't have a password
    }

    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const verifyGoogleToken = (tokenId: string) => {
  // Dummy function to simulate Google token verification
  // In real implementation, use a library to verify the token and extract user info
  return { email: 'user@example.com', name: 'User' };
};
*/ 
