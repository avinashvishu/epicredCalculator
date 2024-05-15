
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ KeyData, valueData }) => {
    console.log(KeyData)
  const data = {
    labels: KeyData,
    datasets: [
      {
        label: "salary to loan ratio",
        data: valueData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
 
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} options={{ maintainAspectRatio: false }} />;
};

export default PieChart;