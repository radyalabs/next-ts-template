import Typography from '@/components/base/Typography';

import type { LabelProps } from './index.types';

const Label = (props: LabelProps) => {
  const {
    className,
    id,
    labelLayout = 'vertical',
    required = false,
    value = '',
  } = props;
  return (
    <label
      htmlFor={id}
      className={`${className} font-semibold mb-0 block text-gray-600 break-words
              ${labelLayout === 'horizontal' && 'mr-4 w-1/4 '}`}
    >
      <Typography variant="label" as="span" size="large">
        {value}
        {required && <span className="text-danger-500">*</span>}
      </Typography>
    </label>
  );
};

export default Label;
