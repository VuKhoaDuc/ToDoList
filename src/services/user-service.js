export function getDataUser(nickname) {
    const url = `https://sb-api.stockbook.vn/api/users/${nickname}/info?api_version=2.2`;
    const accessToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOlsiYXVkaWVuY2UiXSwic3ViIjoiU2lyTHVjaWZlciIsImF1dGgiOiJST0xFX1VTRVIiLCJpc3MiOiJTdG9ja2Jvb2siLCJleHAiOjE1NjEzNDA1NDQsImlhdCI6MTU1NjE1NjU0NCwidXNlcm5hbWUiOiJTaXJMdWNpZmVyIn0.VYkKDSup7S71KtXgg24NjLQ3yDCbecqSTjLGFdpJDVHAQHUW5i81z8GqY2NipYRv10GK-OhzB3UP3tYC8SnQdycMzddo7lwavw-Qr7ZM9Y5e7KBolIZTVFuKeU9cPRRK-1uhAwwAQHemysdwkol0veXscPTimlL4f-rpkmlrN1_66k3fsgfRgBgMYMqI6I0uzgdiALlkUjkb-gxuIJTDTA_Urxjh60_VdZnTV2ksQr7zPIQ3T73MrNP91NQA1pIuhzJXq4kCHT8p_MhF_w6-M3A_YiKAerjBuh8LYi6tvPxcoBq3ovwPExECGPY9Kt42XkjJ_IgfJbhsPBpRPs99TA";
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`
    };
    return fetch(url, { method: "GET", headers })
      .then(resp => resp.json())
      .catch(error => error.json());
  }