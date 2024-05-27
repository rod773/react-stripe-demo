import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

const ElementDemos = ({ demos }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="DemoWrapper">
      <div className="DemoPickerWrapper">
        <select
          className="DemoPicker"
          value={location.pathname}
          onChange={(event) => {
            navigate(event.target.value);
          }}
        >
          {demos.map(({ path, label }) => (
            <option key={path} value={path}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <Routes></Routes>
    </div>
  );
};

export default ElementDemos;
