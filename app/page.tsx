"use client";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import { CountriesQuery } from "./queries";

export default function Home() {
    const { data } = useQuery({
        queryKey: ["countries"],
        queryFn: async () => request("https://countries.trevorblades.com/", CountriesQuery),
    });

    return (
        <div>
            {data?.countries.map((country) => (
                <div key={country.code}>{country.name}</div>
            ))}
        </div>
    );
}
