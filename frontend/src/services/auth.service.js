import api from "./api";

const loginAuth = async (data) => {
    try {
        const res = await api.post("/login", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        return res.data;
    } catch (error) {
        throw new Error(error.response?.data.message || "Login failed");
    }
};
const registerAuth = async (data) => {
try {
    const res = await api.post("/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
} catch (error) {
    throw new Error(error.response?.data.message || "Register failed");
}
};

export { loginAuth, registerAuth };
