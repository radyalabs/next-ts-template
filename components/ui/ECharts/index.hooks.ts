import { useEffect, useRef } from 'react';

import type { ECharts } from 'echarts';
import { getInstanceByDom, init } from 'echarts';

import type { ReactEChartsProps } from '@/components/ui/ECharts/index.types';

const useCharts = (props: ReactEChartsProps) => {
  const {
    theme = 'light',
    settings,
    option,
    loading = false,
  } = props;
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme);
    }

    // Add chart resize listener
    // ResizeObserver is leading to a bit janky UX
    const resizeChart = () => {
      if (chart) chart.resize();
    };
    window.addEventListener('resize', resizeChart);

    // Return cleanup function
    return () => {
      if (chart) chart.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, [theme]);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      if (chart) {
        chart.setOption(option, settings);
      }
    }
  }, [option, settings, theme]);
  // Whenever theme changes we need to add option and
  // setting due to it being deleted in cleanup function

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      if (chart) {
        if (loading) {
          chart.showLoading();
        } else {
          chart.hideLoading();
        }
      }
    }
  }, [loading, theme]);

  return {
    chartRef,
  };
};

export default useCharts;
