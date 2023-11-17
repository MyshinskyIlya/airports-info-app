import { useEffect } from "react";
import { AirportSearch } from "../components/Airport/AirportSearch";
import { AirportFilter } from "../components/Airport/AirportFilter";
import { AirportCard } from "../components/Airport/AirportCard";
import { fetchAirports } from "../store/actions/airportActions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const { error, loading, airports } = useAppSelector(
        (state) => state.airport
    );

    useEffect(() => {
        dispatch(fetchAirports());
    }, [dispatch]);

    return (
        <div className="container mx-auto max-w-[760px] pt-5">
            <AirportSearch></AirportSearch>
            <AirportFilter></AirportFilter>

            {loading && <p className="text-center text-lg">LOADING...</p>}
            {error && (
                <p className="text-center text-lg text-red-600">
                    ОШИБКА: {error}
                </p>
            )}

            {airports.map((i) => (
                <AirportCard key={i.id} airport={i}></AirportCard>
            ))}
        </div>
    );
};
