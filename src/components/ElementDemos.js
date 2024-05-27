import AfterpayClearpayMessage from "./demos/AfterpayClearpayMessage";
import CardForm from "./demos/CardForm";
import FpxBankForm from "./demos/FpxBankForm";
import IbanForm from "./demos/IbanForm";
import IdealBankForm from "./demos/IdealBankForm";
import PaymentRequestForm from "./demos/PaymentRequestForm";

import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import SplitForm from "./demos/SplitForm";

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

      <Routes>
        <Route
          path="afterpay-clearpay-message"
          element={<AfterpayClearpayMessage />}
        />
        <Route path="card-element" element={<CardForm />} />
        <Route path="split-card-element" element={<SplitForm />} />
        <Route
          path="payment-request-button-element"
          element={<PaymentRequestForm />}
        />
        <Route path="ideal-bank-element" element={<IdealBankForm />} />
        <Route path="ban-element" element={<IbanForm />} />
        <Route path="fpx-bank-element" element={<FpxBankForm />} />
        <Route
          path="afterpay-clearpay-message"
          element={<AfterpayClearpayMessage />}
        />
      </Routes>
    </div>
  );
};

export default ElementDemos;
