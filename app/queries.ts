import { graphql } from "gql.tada";

// Define your query
export const CountriesQuery = graphql(`
    query Countries {
        countries {
            code
            name
            emoji
        }
    }
`);
