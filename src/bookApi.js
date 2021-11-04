import axios from "axios";

export const bookApi = (title) => {
  return axios
    .request({
      method: "get",
      url: `https://dapi.kakao.com/v3/search/book?target=title&query=${title}`,
      headers: {
        Authorization: "KakaoAK c4e2ae4efc95f13b600335f2ef929eac",
      },
    })
    .then((res) => {
      console.log(res.data.documents);
      return res.data.documents;
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err);
    });
};
