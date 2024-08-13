import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


interface DataItem {
  'Corporate ID': string;
  'Type': string;
}


interface PizzaChartProps {
  data: DataItem[];
  target: string;
}

export const PizzaChart: React.FC<PizzaChartProps> = ({ data, target }) => {


  const filteredData = data.filter(item => item['Corporate ID'] === target);


  const typeCounts = filteredData.reduce<Record<string, number>>((acc, item) => {
    const type = item['Type'];
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});


  const chartData = Object.entries(typeCounts).map(([name, value]) => ({
    name,
    value
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347', '#6A5ACD'];

  return (
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
  );
};
