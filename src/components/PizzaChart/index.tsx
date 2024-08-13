import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

export const PizzaChart = ({ data, target }) => {

    const filteredData = data.filter(item => item['Corporate ID'] === target);


    const typeCounts = filteredData.reduce((acc, item) => {
        const type = item['Type'];
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    const chartData = Object.entries(typeCounts).map(([name, value]) => ({
        name,
        value
    }));


    const totalCount = Object.values(typeCounts).reduce((sum, count) => sum + count, 0);

 
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347', '#6A5ACD'];

    return (
        <>
            
            <PieChart width={400} height={400}>
                <Pie
                    data={chartData}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value" 
                >
                    
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
                
            </PieChart>
           
        </>
    );
};

