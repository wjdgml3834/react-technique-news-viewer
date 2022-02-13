import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const handleBtnAxios = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=6f1993113ca34824ab68673e9bdca9ee"
      );
      console.log(response);
      setData(response.data.articles);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleBtnAxios}>불러오기</button>
      </div>
      {data && (
        <textarea
          cols={100}
          rows={100}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default App;
