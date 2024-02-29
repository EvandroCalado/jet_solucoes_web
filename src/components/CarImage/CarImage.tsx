import { formatDate } from '@/utils/formatDate';
import { rating } from '@/utils/rating';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import { CarInfoProps } from '..';

interface CarImageProps {
  carInfo: CarInfoProps;
}

export const CarImage: FC<CarImageProps> = ({ carInfo }) => {
  return (
    <>
      <div className="relative">
        <Image
          src={carInfo.image}
          alt={carInfo.name}
          width={200}
          height={200}
          className="h-20 w-20 object-cover"
          priority
        />

        <span className="absolute left-1 top-1 rounded-full bg-green-600 p-1 text-white sm:hidden">
          <Check className="h-4 w-4" />
        </span>
      </div>

      <div>
        <h2>{carInfo.name}</h2>
        <span className="text-[12px] capitalize text-zinc-400 lg:hidden">
          next reservation: {formatDate(carInfo.reservation)}
        </span>
        <span className="flex sm:hidden [&>svg]:w-4">
          {rating(carInfo.rating)}
        </span>
      </div>
    </>
  );
};
