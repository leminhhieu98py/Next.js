export interface IMeetupData {
  image: string;
  title: string;
  address: string;
  description: string;
}

export interface IMeetup extends IMeetupData {
  id: number;
}
