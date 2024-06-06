import { format } from 'date-fns';

const formatDate = (value: string): string => format(new Date(value), 'dd/MM/yyyy');

export default formatDate;
