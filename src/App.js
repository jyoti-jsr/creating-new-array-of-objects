import "./styles.css";
import { useState } from "react";
export default function App() {
  const initialState = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
  const [employees, setEmployees] = useState(initialState);

  const handleClick = () => {
    // 👇️ push object to end of state array
    setEmployees((current) => [...current, { id: 3, name: "Carl" }]);

    // 👇️ spread an array of objects into the state array
    // setEmployees(current => [
    //   ...current,
    //   ...[
    //     {id: 3, name: 'Carl'},
    //     {id: 4, name: 'Delilah'},
    //   ],
    // ]);
    // 👇️ push object to beginning of state array
    // setEmployees(current => [{id: 3, name: 'Zoey'}, ...current]);
  };
  return (
    <div>
      <div>
        <button onClick={handleClick}>Push to state array</button>
      </div>

      {employees.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
