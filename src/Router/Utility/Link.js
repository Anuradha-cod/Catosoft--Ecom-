const url = "https://powerful-dawn-74322.herokuapp.com";

class Api {
  async get(link) {
    let res = await fetch(url + link);
    return await res.json();
  }
}
const Rest = new Api();
export default Rest;
