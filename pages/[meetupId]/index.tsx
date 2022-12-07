import { useRouter } from 'next/router';
import { MOCK_MEETUPS } from '../index';
import styles from './styles.module.css';

const DetailMeetupPate = () => {
  const router = useRouter();
  const { meetupId } = router.query;

  const meetUpInfo = MOCK_MEETUPS.find(
    (meetup) => meetup.id === Number(meetupId)
  );

  return (
    <>
      {meetUpInfo ? (
        <>
          <img
            src={meetUpInfo.image}
            alt={meetUpInfo.title}
            className={styles.image}
          />
          <h1>{meetUpInfo.title}</h1>
          <address>{meetUpInfo.address}</address>
          <p>{meetUpInfo.description}</p>
        </>
      ) : (
        <h1>Something went wrong</h1>
      )}
    </>
  );
};

export default DetailMeetupPate;
