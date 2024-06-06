import Typography from '@/components/base/Typography';

import type { DescriptionProps } from './index.types';

const Description = (props: DescriptionProps) => {
  const {
    label,
    size = 'medium',
    value,
    layout = 'horizontal',
    className,
  } = props;
  const isVertical = layout === 'vertical';
  return (
    <div className={`flex ${isVertical ? 'flex-col gap-2' : 'gap-2 [&>*]:w-1/2 justify-between'} ${className}`}>
      <div className="flex justify-between">
        <Typography className="text-gray-400">{label}</Typography>
        {!isVertical && <Typography align="right">:</Typography>}
      </div>
      <Typography className={size === 'large' ? 'text-lg' : 'text-base'}>{value}</Typography>
    </div>
  );
};

export default Description;
