async function fetchTokens(address) {
  const url =
    TOKEN_API +
    "?module=account&action=tokenbalance&address=" +
    address +
    "&apikey=" +
    API_KEY;

  const response = await fetch(url);
  const data = await response.json();
  return data.result || [];
}
