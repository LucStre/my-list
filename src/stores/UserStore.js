import { makeObservable, runInAction } from "mobx";
import { BaseService } from "../services/BaseService";

class UserStore {
  service = new BaseService();
  data = [];
  status = "initial";
  error = undefined;

  constructor() {
    makeObservable(this);
  }

  filterData = (filter) => {
    return this.data.filter((user) =>
      user.address.state.toLowerCase().includes(filter.toLowerCase())
    );
  };

  fetchData = async (paramsData) => {
    try {
      var params = {
        size: paramsData.size,
      };
      const urlParams = new URLSearchParams(Object.entries(params));
      const data = await this.service.get(urlParams);
      runInAction(() => {
        this.data = data;
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
}
const userStore = new UserStore();
export default userStore;
