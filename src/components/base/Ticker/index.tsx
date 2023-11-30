import Image from 'next/image';

import infoIcon from '@/assets/Info.svg';
import Typography from '@/components/base/Typography';

import type { TickerProps } from './index.types';

const Ticker = (props: TickerProps) => {
  const { className = '', text } = props;
  return (
    <div
      className={`bg-secondary-50 border border-secondary-500 border-solid
        px-2 py-1 rounded flex gap-2 ${className}`}
    >
      <Image src={infoIcon} alt="info icon" width={20} height={20} />
      <Typography variant="label" size="small" className="text-secondary-500 my-auto">
        {text}
      </Typography>
    </div>
  );
};

export default Ticker;
