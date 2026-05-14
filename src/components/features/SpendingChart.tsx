import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

export interface ChartData {
  name: string;
  [key: string]: string | number;
}

interface SpendingChartProps {
  data: ChartData[];
  title: string;
  type?: 'bar' | 'line';
  dataKeys: string[];
  colors?: string[];
  height?: number;
}

export function SpendingChart({
  data,
  title,
  type = 'bar',
  dataKeys,
  colors = ['#8b5cf6', '#06b6d4'],
  height = 300
}: SpendingChartProps) {
  const ChartComponent = type === 'line' ? LineChart : BarChart;

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={height}>
        <ChartComponent data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={type === 'bar'} />
          <XAxis
            dataKey="name"
            tick={{ fill: '#64748b', fontSize: 12 }}
            axisLine={{ stroke: '#e2e8f0' }}
          />
          <YAxis
            tick={{ fill: '#64748b', fontSize: 12 }}
            axisLine={{ stroke: '#e2e8f0' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
            }}
          />
          <Legend />
          {dataKeys.map((key, index) => {
            const Component = type === 'line' ? Line : Bar;
            return (
              <Component
                key={key}
                dataKey={key}
                fill={colors[index % colors.length]}
                stroke={colors[index % colors.length]}
                radius={[4, 4, 0, 0]}
                barSize={20}
                barGap={0}
              />
            );
          })}
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  );
}
