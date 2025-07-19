import { Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormHome } from "./components/FormHome/FormHome";
import { BirthdayCard } from "./components/BirthdayCard/BirthdayCard";
import { GiftCardProvider } from "./context/GiftcardContext";

function App() {
  return (
    <GiftCardProvider>
      <Routes>
        <Route path="/" element={<FormHome />} />
        <Route path="/card" element={<BirthdayCard />} />
      </Routes>
    </GiftCardProvider>
  );
}

export default App;
