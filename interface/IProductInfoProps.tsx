import ISanityImage from './ISanityImage';

export default interface IProductInfoProps {
  _id: string;
  _rev: string;
  _type: string;
  details: string;
  image: object[];
  name: string;
  price: number;
  slug: { _type: string; current: string };
}
