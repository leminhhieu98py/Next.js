import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { IMeetup } from '../typings/meetup/meetup';

const MOCK_MEETUPS: IMeetup[] = [
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'First meet up',
    address: 'First meet up address'
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/257499/pexels-photo-257499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Second meet up',
    address: 'Second meet up address'
  }
];

const HomePage = () => {
  const [meetups, setMeetups] = useState<IMeetup[]>([]);
  useEffect(() => {
    //fetch some data
    setMeetups(MOCK_MEETUPS);
  }, []);

  return <MeetupList meetups={meetups} />;
};

export default HomePage;
