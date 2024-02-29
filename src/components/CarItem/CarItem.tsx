import { formatDate } from '@/utils/formatDate';
import { rating } from '@/utils/rating';
import { MoreVertical } from 'lucide-react';
import { CarImage } from '..';
import { db } from '../../utils/fakeDB';

export interface CarInfoProps {
  id: number;
  image: string;
  name: string;
  reservation: string;
  status: string;
  rating: number;
}

export const CarItem = () => {
  return (
    <div className="flex flex-1 items-center justify-center p-8">
      <table className="w-full rounded-md p-4 shadow-lg">
        {/* head */}
        <thead className="hidden lg:block">
          <tr className="flex items-center justify-between border border-zinc-100 p-4 text-zinc-400 [&>th]:uppercase">
            <th className="flex w-52">car</th>
            <th className="flex w-52">next reservation</th>
            <th className="flex w-52">status</th>
            <th className="flex w-52">rating</th>
            <th>actions</th>
          </tr>
        </thead>

        {/* body */}
        <tbody>
          {db.map((carInfo: CarInfoProps) => (
            <tr
              key={carInfo.id}
              className="flex items-center justify-between border border-zinc-100 pb-2"
            >
              <td className="flex items-center gap-4">
                <CarImage carInfo={carInfo} />
              </td>

              <td className="hidden w-52 text-zinc-400 lg:flex">
                {formatDate(carInfo.reservation)}
              </td>

              <td className="hidden w-52 sm:flex">
                <span className="rounded-md bg-green-100 px-2 py-0.5 text-sm text-green-700">
                  {carInfo.status}
                </span>
              </td>

              <td className="hidden w-52 lg:flex">{rating(carInfo.rating)}</td>

              <td>
                <MoreVertical className="mx-6 h-10 w-10 cursor-pointer rounded-full p-2 duration-150 hover:bg-zinc-200" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
