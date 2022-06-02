Highcharts.chart('container', {
  chart: {
    type: 'scatter',
    zoomType: 'xy',
  },
  title: {
    text: 'User Registration Date Wise',
  },
  xAxis: {
    title: {
      enabled: true,
      text: '',
    },
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true,
  },
  yAxis: {
    title: {
      text: '',
    },
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 100,
    y: 70,
    floating: true,
    backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
    borderWidth: 1,
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 6,
        states: {
          hover: {
            enabled: true,
            lineColor: 'rgb(100,100,100)',
          },
        },
      },
      states: {
        hover: {
          marker: {
            enabled: false,
          },
        },
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x} cm, {point.y} kg',
      },
    },
  },
  series: [
    {
      name: 'Female',
      color: 'rgba(223, 83, 83, .5)',
      data: [
        [161.2, 51.6],
        [167.5, 59.0],
        [159.5, 49.2],
        [157.0, 63.0],
        [155.8, 53.6],
        [170.0, 59.0],
        [159.1, 47.6],
        [166.0, 69.8],
        [176.2, 66.8],
        [160.2, 75.2],
        [172.5, 55.2],
        [170.9, 54.2],
        [172.9, 62.5],
        [153.4, 42.0],
        [160.0, 50.0],
        [147.2, 49.8],
        [168.2, 49.2],
        [175.0, 73.2],
        [157.0, 47.8],
        [167.6, 68.8],
        [159.5, 50.6],
        [175.0, 82.5],
        [166.8, 57.2],
        [176.5, 87.8],
        [170.2, 72.8],
        [176.5, 71.8],
      ],
    },
    {
      name: 'Male',
      color: 'rgba(119, 152, 191, .5)',
      data: [
        [174.0, 65.6],
        [175.3, 71.8],
        [193.5, 80.7],
        [186.5, 72.6],
        [187.2, 78.8],
        [176.0, 78.8],
        [180.5, 77.8],
        [172.7, 66.2],
        [176.0, 86.4],
        [173.5, 81.8],
        [178.0, 89.6],
        [180.3, 82.8],
        [180.3, 76.4],
        [164.5, 63.2],
        [173.0, 60.9],
        [183.5, 74.8],
        [175.5, 70.0],
        [188.0, 72.4],
        [189.2, 84.1],
        [172.8, 69.1],
        [186.7, 87.8],
        [171.4, 84.7],
        [172.7, 73.4],
        [175.3, 72.1],
        [180.3, 82.6],
        [182.9, 88.7],
      ],
    },
  ],
});

Highcharts.chart('container2', {
  chart: {
    type: 'funnel3d',
    options3d: {
      enabled: true,
      alpha: 10,
      depth: 50,
      viewDistance: 50,
    },
  },
  title: {
    text: 'User Metric',
  },
  legend: {
    enabled: true,
  },
  accessibility: {
    screenReaderSection: {
      beforeChartFormat:
        '<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartLongdesc}</div>',
    },
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b> ({point.y:,.0f})',
        allowOverlap: true,
        y: 10,
      },
      neckWidth: '25%',
      neckHeight: '15%',
      width: '70%',
      height: '60%',
    },
  },
  series: [
    {
      name: 'Unique users',
      data: [
        ['Total User', 13675],
        ['Enrollment', 890],
        ['completed', 700],
      ],
    },
  ],
});

Highcharts.chart('container3', {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45,
    },
  },
  title: {
    text: 'Registered User Location',
  },
  plotOptions: {
    pie: {
      innerSize: 100,
      depth: 45,
    },
  },
  series: [
    {
      name: 'Delivered amount',
      data: [
        ['Dhaka', 4],
        ['Kolkata', 3],
        ['Kathmandu', 2],
        ['Mumbai', 6],
        ['Kasmir', 3],
      ],
    },
  ],
});
