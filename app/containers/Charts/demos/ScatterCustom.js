import React from 'react';
import { createTheme } from '@mui/material/styles';
import ThemePallete from 'enl-api/palette/themePalette';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  CartesianAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { data8, data9 } from './sampleData';
import useStyles from './fluidChart-jss';

const theme = createTheme(ThemePallete.orangeTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
});

function ScatterCustom() {
  const { classes } = useStyles();
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer width={800} height="80%">
        <ScatterChart
          width={800}
          height={450}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <CartesianAxis vertical={false} />
          <XAxis dataKey="x" type="number" name="stature" unit="cm" />
          <YAxis
            axisLine={false}
            tickSize={3}
            tickLine={false}
            tick={{ stroke: 'none' }}
            dataKey="y"
            type="number"
            name="weight"
            unit="kg"
          />
          <ZAxis range={[100]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={data8} fillOpacity="0.8" fill={color.primary} shape="star" />
          <Scatter name="B school" data={data9} fillOpacity="0.8" fill={color.secondary} shape="triangle" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScatterCustom;
