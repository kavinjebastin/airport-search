const mapper = ({
  airport_code,
  airport_name,
  city_name,
  state_name,
  country_name,
  continent,
  airport_types,
  currency,
  parent_location_id,
}) => ({
  airportName: airport_name,
  airportCode: airport_code,
  parentAirportCode: parent_location_id,
  cityName: city_name,
  stateName: state_name,
  countryName: country_name,
  continent,
  currency,
  airportSize: airport_types.replace("_", " "),
});
export default (airports) => airports.map(mapper);
