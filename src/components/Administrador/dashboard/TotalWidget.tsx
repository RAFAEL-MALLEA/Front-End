import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ReactApexChart from 'react-apexcharts';
import { useMemo } from 'react';
import { Paper } from '@mui/material';

function TotalWidget() {
  const theme = useTheme();
  const { distributions } = useMetricsCore();

  const labels = useMemo(() => {
    return distributions.map((metric) => metric.name);
  }, [distributions]);

  const series = useMemo(() => {
    return distributions.map((metric) => metric.price);
  }, [distributions]);

  const chartOptions: any = {
    chart: {
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: '100%',
      type: 'polarArea',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    labels,
    legend: {
      position: 'bottom',
    },
    plotOptions: {
      polarArea: {
        spokes: {
          connectorColors: theme.palette.divider,
        },
        rings: {
          strokeColor: theme.palette.divider,
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.75,
        },
      },
    },
    stroke: {
      width: 2,
    },
    theme: {
      monochrome: {
        enabled: true,
        color: theme.palette.info.main,
        shadeIntensity: 0.75,
        shadeTo: 'light',
      },
    },
    tooltip: {
      followCursor: true,
      theme: 'light',
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
        formatter: function (value: number) {
          return value.toLocaleString();
        },
      },
    },
  };

  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24">
      <Typography className="font-bold" color="text.secondary">
        Distribución de alertas en $
      </Typography>
      <div className="flex flex-col flex-auto">
        <ReactApexChart
          className="flex-auto w-full"
          options={chartOptions}
          series={series}
          type={chartOptions.chart.type}
          height={565}
        />
      </div>
    </Paper>
  );
}

function useMetricsCore(): { distributions: { name: string; price: number }[] } {
  // Example static data; replace with API call or context as needed
  const distributions = [
    { name: 'Alerta 1', price: 1200 },
    { name: 'Alerta 2', price: 850 },
    { name: 'Alerta 3', price: 430 },
    { name: 'Alerta 4', price: 2100 },
  ];
  return { distributions };
}

export default TotalWidget;

