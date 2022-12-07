import { GetStaticProps } from 'next';
import { FC } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { IMeetup } from '../typings/meetup/meetup';

export const MOCK_MEETUPS: IMeetup[] = [
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'First meet up',
    address: 'First meet up address',
    description: 'Description 1'
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/257499/pexels-photo-257499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Second meet up',
    address: 'Second meet up address',
    description: 'Description 2'
  }
];

interface Props {
  meetups: IMeetup[];
}

const HomePage: FC<Props> = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      meetups: MOCK_MEETUPS
    },
    revalidate: 1
  };
};

export default HomePage;
