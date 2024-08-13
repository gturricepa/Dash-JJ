import { useState, useEffect } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import * as Styled from './styles';

interface DataItem {
  Date: Date;
}

interface BarCProps {
  data: DataItem[];
}

export const BarC: React.FC<BarCProps> = ({ data }) => {

  const getFirstYear = () => {
    if (data.length > 0) {
      return data[0].Date.getFullYear().toString();
    }
    return null;
  };

  const [selectedYear, setSelectedYear] = useState<string | null>(getFirstYear());

  const filteredData = selectedYear
    ? data.filter(item => item.Date.getFullYear() === parseInt(selectedYear, 10))
    : data;

  const countRecordsByYear = (data: DataItem[]) => {
    const yearCounts = data.reduce((acc: Record<number, number>, item) => {
      if (item.Date) {
        const year = item.Date.getFullYear();
        acc[year] = (acc[year] || 0) + 1;
      }
      return acc;
    }, {});

    return Object.keys(yearCounts).map(year => ({
      year: year,
      count: yearCounts[parseInt(year)]
    }));
  };

  const countRecordsByMonth = (data: DataItem[]) => {
    const monthCounts = data.reduce((acc: Record<number, number>, item) => {
      if (item.Date) {
        const month = item.Date.getMonth() + 1;
        acc[month] = (acc[month] || 0) + 1;
      }
      return acc;
    }, {});

    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    return months.map(month => ({
      month: month,
      count: monthCounts[month] || 0
    }));
  };

  const dataForChart = countRecordsByYear(data);

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const handleYearClick = (data: { year: string }) => {
    if (data && data.year) {
      setSelectedYear(data.year);
    }
  };

  useEffect(() => {
    if (!selectedYear && data.length > 0) {
      setSelectedYear(getFirstYear());
    }
  }, [data, selectedYear]);

  return (
    <Styled.Section>
      <Styled.HolderBar>
        <h3>Records by Year</h3>
        <BarChart width={700} height={350} data={dataForChart}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar 
            dataKey="count" 
            fill="#8884d8" 
            onClick={handleYearClick}
          />
        </BarChart>
        <h3>Total of events: {data.length}</h3>
      </Styled.HolderBar>

      {selectedYear && (
        <Styled.HolderBar>
          <h3>Records by Month for {selectedYear}</h3>
          <BarChart width={700} height={350} data={countRecordsByMonth(filteredData)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tickFormatter={month => monthNames[month - 1]} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
          <h3>Selected Year: {selectedYear}</h3>
        </Styled.HolderBar>
      )}
    </Styled.Section>
  );
};
