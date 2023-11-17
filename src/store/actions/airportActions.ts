import axios from "../../axios/index";
import { AppDispatch } from "..";
import { IAirport, ServerResponse } from "../../components/models/models";
import { airportSlice } from "../slices/airportSlice";

export const fetchAirports = (page: number = 1, count: number = 50) => {
    return async (dispatch: AppDispatch) => {
        dispatch(airportSlice.actions.fetching());
        try {
            const response = await axios.get<ServerResponse<IAirport>>(
                "airports",
                {
                    params: {
                        page,
                        count,
                    },
                }
            );

            dispatch(airportSlice.actions.fetchSuccess(response.data.results));
        } catch (e) {
            dispatch(airportSlice.actions.fetchError(e as Error));
        }
    };
};
