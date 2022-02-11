import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, Box } from "@mui/material";
import { useAppSelector } from "../hooks/redux";
import { SLICE_WEATHER_NAME } from "../store/reducers";
import { weatherAPI } from "../services/WeatherService";
import { convertTempScale } from "../utils/convertTempScale";

const GraphForecast = () => {
  const { searchСoords, temperatureScale } = useAppSelector(
    (store) => store[SLICE_WEATHER_NAME]
  );
  const { data } = weatherAPI.useFetchDailyForecastQuery(
    {
      lat: searchСoords?.lat,
      lng: searchСoords?.lng,
      cnt: 10,
    },
    { skip: !searchСoords }
  );

  const temperature = data?.list.map((day) =>
    Math.trunc(convertTempScale(day.temp.day, temperatureScale))
  );
  // const labels = data?.list.map(day => moment(day.dt).format("D ddd").toString())

  const options = {
    chart: {
      id: "basic-bar",
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: [
        "01/02",
        "02/02",
        "03/02",
        "04/02",
        "05/02",
        "06/02",
        "07/02",
        "08/02",
        "09/02",
        "10/02",
      ],
    },
    yaxis: {
      title: {
        text: "Temperature",
      },
    },
  };

  const series = [
    {
      name: "temp",
      data: temperature || [],
    },
  ];

  return (
    <Card sx={{ minHeight: 300, pl: 1, ml: 1 }}>
      <Box sx={{ pb: 1 }} dir="ltr">
        {data && (
          <ReactApexChart
            type="line"
            series={series}
            options={options}
            height={300}
          />
        )}
      </Box>
    </Card>
  );
};

export default GraphForecast;
