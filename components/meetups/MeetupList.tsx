import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import { FC } from 'react';
import { IMeetup } from '../../typings/meetup/meetup';

interface Props {
  meetups: IMeetup[];
}

const MeetupList: FC<Props> = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
