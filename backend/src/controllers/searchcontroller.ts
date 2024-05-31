import { Request, Response } from 'express';
import albums from '../models/albums';
import artists from '../models/artists';
import songs from '../models/songs';

export const searchAlbums = async (req: Request, res: Response) => {
  const { query, type } = req.query;

  if (!query || !type) {
      return res.status(400).json({ message: 'Query and type are required' });
  }

  const queryString = query.toString(); // Convert query to string
  console.log('Received search query:', queryString); // Log received search query

  try {
      let searchResult;
      if (type === 'album') {
          console.log(new RegExp(queryString, 'i'));
          searchResult = await albums.find({ name: new RegExp(queryString, 'i') });
      } else {
          return res.status(400).json({ message: 'Invalid search type' });
      }
      console.log('Search result:', searchResult); // Log search result before sending as response

      res.json(searchResult);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
  }
};

export const searchArtists = async (req: Request, res: Response) => {
  const { query, type } = req.query;

  if (!query || !type) {
    return res.status(400).json({ message: 'Query and type are required' });
  }

  const queryString = query.toString(); // Convert query to string

  try {
    let searchResult;
    if (type === 'artist') {
      searchResult = await artists.find({ name: new RegExp(queryString, 'i') });
    } else {
      return res.status(400).json({ message: 'Invalid search type' });
    }

    res.json(searchResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const searchTitles = async (req: Request, res: Response) => {
  const { query, type } = req.query;

  if (!query || !type) {
    return res.status(400).json({ message: 'Query and type are required' });
  }

  const queryString = query.toString(); // Convert query to string

  try {
    let searchResult;
    if (type === 'title') {
      searchResult = await songs.find({ title: new RegExp(queryString, 'i') }); // Adjusted to use songs model
    } else {
      return res.status(400).json({ message: 'Invalid search type' });
    }

    res.json(searchResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};