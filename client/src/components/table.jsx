import '../App.css'
const DummyTable = () => {
  const tableData = [
    {
      day: "Mo",
      cost: 25,
      description: "Monday expenses",
    },
    {
      day: "Tu",
      cost: 35,
      description: "Tuesday expenses",
    },
    {
      day: "We",
      cost: 30,
      description: "Wednesday expenses",
    },
    {
      day: "Th",
      cost: 25,
      description: "Thursday expenses",
    },
    {
      day: "Fr",
      cost: 30,
      description: "Friday expenses",
    },
    {
      day: "Sa",
      cost: 35,
      description: "Saturday expenses",
    },
    {
      day: "Su",
      cost: 20,
      description: "Sunday expenses",
    },
  ];

  return (
    <div>
      <h2 className="subheading">Details Table</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Cost</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>${item.cost}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DummyTable;
