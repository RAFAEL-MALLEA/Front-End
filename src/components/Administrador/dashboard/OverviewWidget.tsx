import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ReactApexChart from 'react-apexcharts';
import { useMemo } from 'react';
import { Paper } from '@mui/material';

interface Props {
  metric: {
    barMetric: string;
    lineMetric: string;
    data: {
      date: string;
      deviation: number;
      net: number;
    }[];
  };
};

function OverviewWidget(props: Props) {
  const theme = useTheme();
  const { metric } = props;



  const series = useMemo(() => {
    return [
      {
        "name": metric.lineMetric,
        "type": "line",
        "data": metric.data.map((data: any) => Math.abs(data.deviation))
      },
      {
        "name": metric.barMetric,
        "type": "column",
        "data": metric.data.map((data: any) => data.net)
      }
    ];
  }, [metric]);

  const chartOptions: any = {
    chart: {
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: '100%',
      type: 'line',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: [theme.palette.primary.main, theme.palette.secondary.main],
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0],
      background: {
        borderWidth: 0,
      },
    },
    grid: {
      borderColor: theme.palette.divider,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
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
      width: [1, 0],
    },
    tooltip: {
      followCursor: true,
      theme: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        color: theme.palette.divider,
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: [
      {
        seriesName: metric.lineMetric,
        opposite: true,
        labels: {
          style: {
            colors: theme.palette.text.secondary,
          },
          formatter: function (value: number) {
            return value.toLocaleString();
          },
        },
        title: {
          text: metric.lineMetric,
        },
        tooltip: {
          enabled: false,
        
          formatter: function (value: number) {
            return value.toLocaleString();
          },
        },
      },
      {
        seriesName: metric.barMetric,
        labels: {
          style: {
            colors: theme.palette.text.secondary,
          },
          formatter: function (value: number) {
            return value.toLocaleString();
          },
        },
        title: {
          text: metric.barMetric,
        },
      },
    ]
  };

// aqqui se encuentra uno de los graficos de la pagina principal
  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24">
      <Typography className="font-bold" color="text.secondary">
        {metric.barMetric} / {metric.lineMetric}
      </Typography>
      <div className="flex flex-col flex-auto">
        <ReactApexChart
          className="flex-auto w-full"
          options={chartOptions}
          series={series}
          height={518}
        />
      </div>
    </Paper>
  );
}

export default OverviewWidget;
