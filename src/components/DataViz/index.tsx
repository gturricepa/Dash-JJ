import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { BarC } from './BarChart/index.tsx';
import { DriversDetails } from './DriversDetails/index.tsx';

export const DataViz = () => {
  const [data, setData] = useState([]);
  const name = useSelector((state: RootState) => state.user.name)
  useEffect(() => {
    const readXlsxFile = async () => {
      try {
        const response = await fetch('/data/events/Events (15).xls');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        
       
        const transformedData = jsonData.map(item => ({
          ...item,
          Date: item['Date'] ? excelDateToJSDate(item['Date']) : null
        })).filter(item => item['Manager'] === name

        );
        
        setData(transformedData);
       } catch (error) {
        console.error('Error reading XLSX file:', error);
      }
    };

    readXlsxFile();
  }, []);

  const excelDateToJSDate = (serial:any) => {
   
    if (typeof serial === 'number' && !isNaN(serial)) {
      const utcDays = serial - 25569; 
      const date = new Date(utcDays * 86400 * 1000); 
      return date;
    }
    return null; 
  };

console.log(data)
  return (
    <div>
      <h1>📉  Events Data Visualization</h1>
      <BarC data={data}></BarC>

      <DriversDetails data={data}></DriversDetails>
   

    </div>
  );
};
