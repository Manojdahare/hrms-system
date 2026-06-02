import API from "../../api/axiosConfig";

export const getDashboardData =
    async () => {

        const response =
            await API.get(
                "/dashboard"
            );

        return response;
    };