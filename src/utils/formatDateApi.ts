import { format } from 'date-fns';

const formatDateApi = (value: Date): string => format(value, 'yyyy-MM-dd');

export default formatDateApi;
