import api from "../services/api";

const fetchRevenues = async () => {
    const res = await api.get("/revenues")
    return res.data;
}

export { fetchRevenues }