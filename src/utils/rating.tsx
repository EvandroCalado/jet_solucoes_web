import { Star } from 'lucide-react';

export const rating = (ratingNumber: number) => {
  const list = [...Array(ratingNumber)].map((_, index) => (
    <Star key={Math.random() * index} fill="" />
  ));

  return list;
};
