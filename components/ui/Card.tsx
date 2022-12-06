import classes from './Card.module.css';
import React, { FC } from 'react';

interface Props {
  children?: React.ReactNode;
}

const Card: FC<Props> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
