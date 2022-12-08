import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { IMeetupData } from '../typings/meetup/meetup';

const CreateMeetupPate = () => {
  const onAddMeetup = async (meetupData: IMeetupData) => {
    fetch('/api/meet-up', {
      method: 'POST',
      body: JSON.stringify(meetupData)
    }).then((res: any) => {
      alert(res.url);
    });
  };

  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
};

export default CreateMeetupPate;
