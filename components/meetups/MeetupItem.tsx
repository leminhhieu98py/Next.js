import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { FC } from 'react';
import { useRouter } from 'next/router';

interface Props {
  id: number;
  image: string;
  title: string;
  address: string;
}

const MeetupItem: FC<Props> = ({ id, image, title, address }) => {
  const router = useRouter();

  const handleShowDetail = () => {
    router.push(`/${id}`);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={handleShowDetail}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
