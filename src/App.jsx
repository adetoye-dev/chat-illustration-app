import "./App.css";
import SmartphoneUi from "./components/SmartphoneUi";
import PageDesc from "./components/PageDesc";

function App() {
  return (
    <div className="App flex w-screen h-screen">
      <div className="flex gap-14 lg:flex-row flex-col w-10/12 max-w-5xl m-auto items-center justify-center py-10 lg:p-0">
        <SmartphoneUi />
        <PageDesc />
      </div>
    </div>
  );
}

export default App;
