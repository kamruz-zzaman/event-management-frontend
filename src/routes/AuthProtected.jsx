import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const AuthProtected = ({ children }) => {
  const location = useLocation();
  const state = useSelector((state) => state.auth);

  const { user, accessToken } = state || {};

  return !user && !accessToken ? (
    <Navigate to={{ pathname: "/login", state: { from: location } }} />
  ) : (
    children
  );
};

export default AuthProtected;

AuthProtected.propTypes = {
  children: PropTypes.node.isRequired,
};
