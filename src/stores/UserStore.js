import { makeObservable, runInAction, observable, action } from "mobx";
import { BaseService } from "../services/BaseService";

class UserStore {
  service = new BaseService();
  myUsers = [];
  status = "initial";
  error = undefined;

  constructor() {
    this.fetchData({ size: 5 });
    makeObservable(this, {
      myUsers: observable,
      addData: action,
    });
  }

  filterData = (filter) => {
    return this.myUsers.filter((user) =>
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
        this.myUsers = data;
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };

  addData = (user) => {
    this.myUsers.push(user);
  };
}
const userStore = new UserStore();
export default userStore;
