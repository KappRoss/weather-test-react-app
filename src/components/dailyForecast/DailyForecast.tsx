import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TodayWeather from "./TodayWeather";
import WeeklyWeather from "./WeeklyWeather";
import { useAppSelector } from "../../hooks/redux";
import { SLICE_WEATHER_NAME } from "../../store/reducers";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DailyForecast = () => {
  const { searchedCityName } = useAppSelector(
    (store) => store[SLICE_WEATHER_NAME]
  );

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>{searchedCityName}</Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="daily forecast tabs"
        >
          <Tab label="Today" {...a11yProps(0)} />
          <Tab label="Weekly" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TodayWeather />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WeeklyWeather />
      </TabPanel>
    </Box>
  );
};

export default DailyForecast;
