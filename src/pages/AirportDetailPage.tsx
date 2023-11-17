import React from "react";
import { useParams } from "react-router-dom";

export const AirportDetailPage = () => {
    const params = useParams<"id">();
    return (
        <div className="container mx-auto pt-5 max-w-[760px]">
            <h1>{params.id}</h1>
        </div>
    );
};
