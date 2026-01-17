async function updateInfo() {
  const address = await getWalletAddress();
  const network = await getNetworkName();

  document.getElementById("address").innerText = address;
  document.getElementById("network").innerText = network;
}

async function loadTokens() {
  const address = await getWalletAddress();
  const list = document.getElementById("tokenList");
  list.innerHTML = "";

  const tokens = await fetchTokens(address);

  const item = document.createElement("li");
  item.innerText = "Token Balance: " + tokens;
  list.appendChild(item);
}
