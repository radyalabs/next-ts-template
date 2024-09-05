import MUITimeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

import type { TimelineProps } from './index.types';

const Timeline = (props: TimelineProps) => {
  const {
    className = '',
    items = [],
  } = props;
  return (
    <MUITimeline
      className={className}
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {items.map(({
        content,
        icon,
        color = 'grey',
        variant = 'filled',
      }, i) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color={color} variant={variant}>
              {icon}
            </TimelineDot>
            {(i < items.length - 1) && (
            <TimelineConnector className="border-0 border-l-2 border-dashed border-n-6 bg-transparent -mr-0.5" />
            )}
          </TimelineSeparator>
          <TimelineContent className="h-fit min-h-9 flex flex-col justify-center">
            {content}
          </TimelineContent>
        </TimelineItem>
      ))}
    </MUITimeline>
  );
};

export default Timeline;
