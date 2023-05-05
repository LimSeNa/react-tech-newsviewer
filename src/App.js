import axios from "axios";
import {useState} from "react";

const App = () => {
    const [data, setData] = useState(null);
    const onClick = async () => {
        try {
            const response = await axios.get(
                'https://newsapi.org/v2/top-headlines?country=kr&apiKey=6811653db7a1441bb0b172ec7ec0ed69',
            );
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
        </div>
    );
};

export default App;