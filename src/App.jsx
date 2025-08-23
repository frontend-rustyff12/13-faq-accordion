import Accordian from "./components/Accordian";
function App() {
  return (
    <main className="min-h-screen bg-[url('/background-pattern-mobile.svg')] bg-no-repeat flex justify-center items-center bg-cust-Purple-100 py-32">
      <div className="m-6 p-6 bg-cust-White rounded-xl">
        <Accordian />
      </div>
    </main>
  );
}

export default App;
