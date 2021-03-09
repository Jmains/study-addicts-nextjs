export async function fetchWithPost(url: string, data?: {}) {
  try {
    // Default options are marked with *
    const res = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data || {}, null, 2), // body data type must match "Content-Type" header
    });

    return res.json(); // parses JSON response into native JavaScript objects
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchWithPut(url: string, data?: {}) {
  try {
    const res = await fetch(url, {
      method: "PUT",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data || {}, null, 2),
    });
    return res.json();
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchWithDelete(url: string, token: string, data?: {}) {
  try {
    const res = await fetch(url, {
      method: "DELETE",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        token,
      },
      body: JSON.stringify(data || {}, null, 2),
    });
    return res.json();
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetcher(url: string) {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    });
    return res.json();
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function restrictedFetcher(url: string, token: string) {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token,
      },
      credentials: "same-origin",
    });
    return res.json();
  } catch (err) {
    throw new Error(err.message);
  }
}
