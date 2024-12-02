import { userAction } from "../slice/userSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";

//* get All Users
export const fetchUserData = () => {
  return async (dispatch) => {
    try {
      const response = await request.get("/users");
      console.log("API Data:", response);
      dispatch(userAction.setUser(response.data.data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
};

//* Add User
export const createUser = (newUser) => {
  return async (dispatch)=> {
    try {
      const response = await request.post("/users" , newUser);
      console.log("API Data:", response);
      toast.success(response.data.message);
      dispatch(userAction.addUser(response.data.data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
};

//* delete user

export const deleteUser = (userId) => {
  return async (dispatch)=> {
    try {
      const response = await request.delete(`/users/${userId}`);
      console.log("API Data:", response);
      dispatch(userAction.deleteUser(response.data.data.userId));
      toast.success(response.data.message);
    }catch (error) {
      toast.success(error.response.data.message);
    }
  
  }
}

// * update user 
export const updateUser = (userId, updatedUser) => {
  return async (dispatch)=> {
    try {
      const response = await request.put(`/users/${userId}`, updatedUser);
      console.log("API Data:", response);
      dispatch(userAction.setUser(response.data.data));
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
}