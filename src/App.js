import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const handleBtnAxios = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div>
      <div>
        <button onClick={handleBtnAxios}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default App;
