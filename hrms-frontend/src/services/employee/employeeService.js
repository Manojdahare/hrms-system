import API
from "../../api/axiosConfig";

// GET ALL EMPLOYEES

export const getAllEmployees =
    async () => {

        const response =
            await API.get(

                "/employees?page=0&size=10"
            );

        return response.data;
    };