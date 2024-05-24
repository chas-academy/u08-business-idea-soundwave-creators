import { Request, Response } from 'express';
import Artist from '../models/artists';

// Function to get all artists
export const getAllArtists = async (req: Request, res: Response) => {
  try {
    const artists = await Artist.find({});
    res.status(200).json({ success: true, data: artists });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to get artists', error });
  }
};

// Function to get a single artist by ID
export const getArtistById = async (req: Request, res: Response) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (artist) {
      res.status(200).json({ success: true, data: artist });
    } else {
      res.status(404).json({ success: false, message: 'Artist not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to get artist', error });
  }
};

// Function to create a new artist
export const createArtist = async (req: Request, res: Response) => {
  try {
    const { name, imageURL, twitter, instagram } = req.body;
    const newArtist = new Artist({ name, imageURL, twitter, instagram });
    const savedArtist = await newArtist.save();
    res.status(201).json({ success: true, data: savedArtist });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to create artist', error });
  }
};

// Function to update an artist by ID
export const updateArtist = async (req: Request, res: Response) => {
  try {
    const { name, imageURL, twitter, instagram } = req.body;
    const updatedArtist = await Artist.findByIdAndUpdate(
      req.params.id,
      { name, imageURL, twitter, instagram },
      { new: true, runValidators: true }
    );
    if (updatedArtist) {
      res.status(200).json({ success: true, data: updatedArtist });
    } else {
      res.status(404).json({ success: false, message: 'Artist not found' });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to update artist', error });
  }
};

// Function to delete an artist by ID
export const deleteArtist = async (req: Request, res: Response) => {
  try {
    const deletedArtist = await Artist.findByIdAndDelete(req.params.id);
    if (deletedArtist) {
      res.status(200).json({ success: true, message: 'Artist deleted', data: deletedArtist });
    } else {
      res.status(404).json({ success: false, message: 'Artist not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete artist', error });
  }
};
