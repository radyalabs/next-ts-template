import Typography from '@/components/base/Typography';
import { IcInformation, IcWarning } from '@/components/icons';

import type { TickerProps } from './index.types';

const Ticker = (props: TickerProps) => {
  const { className = '', text = '', type = 'info' } = props;
  const typeClass = {
    info: 'bg-secondary-50 border-secondary-500',
    error: 'bg-danger-50 border-danger-500',
    warning: 'bg-warning-50 border-warning-500',
    success: 'bg-success-50 border-success-500',
  };
  const textClass = {
    info: 'text-secondary-500',
    error: 'text-danger-500',
    warning: 'text-warning-500',
    success: 'text-success-500',
  };
  return (
    <div
      className={`border 0 border-solid ${typeClass[type]}
        p-2 rounded flex gap-2 ${className}`}
    >
      <div className="w-8">
        {type === 'info' && (
          <IcInformation />
        )}
        {type === 'error' && (
          <IcWarning />
        )}
      </div>
      <Typography variant="label" size="small" className={`${textClass[type]} my-auto`}>
        {/* eslint-disable-next-line react/no-danger */}
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </Typography>
    </div>
  );
};

export default Ticker;
