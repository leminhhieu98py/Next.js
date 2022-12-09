import { IMeetup } from '../../typings/meetup/meetup';
import { MOCK_MEETUPS } from '../index';
import styles from './styles.module.css';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';

interface Props {
  meetupInfo: IMeetup | undefined;
}

interface IParams extends ParsedUrlQuery {
  meetupId: string;
}

const DetailMeetupPate: FC<Props> = ({ meetupInfo }) => {
  return (
    <>
      <Head>
        <title>{meetupInfo?.title}</title>
        <meta name="description" content={meetupInfo?.description} />
      </Head>
      {meetupInfo ? (
        <>
          <img
            src={meetupInfo.image}
            alt={meetupInfo.title}
            className={styles.image}
          />
          <h1>{meetupInfo.title}</h1>
          <address>{meetupInfo.address}</address>
          <p>{meetupInfo.description}</p>
        </>
      ) : (
        <h1>Something went wrong</h1>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = MOCK_MEETUPS.map((meetup) => ({
    params: {
      meetupId: meetup.id.toString()
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const { meetupId } = context.params as IParams;
  const meetupInfo = MOCK_MEETUPS.find(
    (meetup) => meetup.id === Number(meetupId)
  );

  return {
    props: {
      meetupInfo
    },
    notFound: !meetupInfo
  };
};

export default DetailMeetupPate;
