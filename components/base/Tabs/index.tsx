import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import MUITabs from '@mui/material/Tabs';

import useTabs from './index.hooks';
import type { TabPanelProps, TabsProps } from './index.types';

const Tabs = (props: Partial<TabsProps>) => {
  const {
    children,
    labels,
  } = props;
  const { value = 0, handleChange } = useTabs(props);
  return (
    <Box>
      <MUITabs
        value={value}
        onChange={handleChange}
      >
        {(labels || []).map((label) => (
          <Tab
            key={label}
            classes={{
              root: 'normal-case min-w-[150px]',
            }}
            label={label}
          />
        ))}
      </MUITabs>
      {children}
    </Box>
  );
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
};

Tabs.TabPanel = TabPanel;

export default Tabs;
