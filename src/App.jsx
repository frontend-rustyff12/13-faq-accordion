import Accordian from "./components/Accordian";
function App() {
  return (
    <main className="min-h-screen bg-[url('/background-pattern-mobile.svg')] bg-no-repeat flex justify-center items-center bg-cust-Purple-100 py-32 md:bg-[url('/background-pattern-desktop.svg')]">
      <div className="m-6 p-6 bg-cust-White rounded-xl md:w-xl md:p-8">
        <Accordian />
      </div>
    </main>
  );
}

export default App;
