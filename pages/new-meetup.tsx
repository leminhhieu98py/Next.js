import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { IMeetupData } from '../typings/meetup/meetup';

const CreateMeetupPate = () => {
  const onAddMeetup = (meetupData: IMeetupData) => {
    console.log(meetupData);
  };

  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
};

export default CreateMeetupPate;
