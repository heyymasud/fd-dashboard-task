import axios from "axios";

const fetchRevenues = async () => {
    const res = await axios.get("http://localhost:3000/api/v1/revenues")
    return res.data;
}

export { fetchRevenues }