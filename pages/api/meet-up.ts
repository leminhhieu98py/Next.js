import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_MEETUPS } from '../index';
import { IMeetupData } from '../../typings/meetup/meetup.d';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { title, image, address, description } = req.body as IMeetupData;
    
    MOCK_MEETUPS.push({
      id: new Date().getTime(),
      title,
      image,
      address,
      description
    });

    res.status(200).json({ message: 'Add meetup Success' });
  }
};
export default handler;
