import "./App.css";
import Selectable_grid from "./Components/Selectable_grid";

function App() {
  return (
    <div>
      <div>
        <h1>Selectable Grid</h1>
        <Selectable_grid rows={10} cols={10} />
        {/*
        My Interview Prep Course - https://roadsidecoder.com/course-details 
      */}
      </div>
    </div>
  );
}

export default App;
