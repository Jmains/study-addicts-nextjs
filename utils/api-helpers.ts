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
      body: JSON.stringify(data || {}), // body data type must match "Content-Type" header
    });
    return await res.json(); // parses JSON response into native JavaScript objects
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchWithPut(url: string, data?: {}) {
  try {
    const res = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data || {}),
    });
    return await res.json();
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchWithDelete(url: string, data?: {}) {
  try {
    const res = await fetch(url, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data || {}),
    });
    return await res.json();
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchWithGet(url: string) {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    throw new Error(err.message);
  }
}
