export default interface IBannerProps {
  _id: string;
  _rev: string;
  _type: string;
  buttonText: string;
  desc: string;
  discount: string;
  image: { _type: string; asset: [] };
  largeText1: string;
  largeText2: string;
  midText: string;
  product: string;
  saleTime: string;
  smallText: string;
}
