import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserInfoQuery } from "../features/auth/authApi";
import { getUserInfo } from "../features/auth/authSlice";

const useAuthCheck = () => {
  const [isAuth, setIsAuth] = useState(false);
  const state = useSelector((state) => state.auth);
  const { accessToken } = state || {};
  const {
    data: userData,
    isLoading,
    isError,
  } = useGetUserInfoQuery(undefined, { skip: !accessToken });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!accessToken || isError) {
      setIsAuth(false);
    }

    if (!isLoading && !isError && userData?.user?._id) {
      dispatch(getUserInfo(userData?.user));
      setIsAuth(true);
    }
  }, [isAuth, setIsAuth, isError, isLoading, userData?.user?._id, getUserInfo]);

  return isAuth;
};

export default useAuthCheck;
