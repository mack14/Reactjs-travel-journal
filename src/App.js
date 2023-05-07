import Nav from "./components/Nav";
import data from "./data";
import Body from "./components/Body";

function App() {
  const main = data.map((body) => {
    return <Body key={body.id} body={body} />;
  });
  return (
    <div className="App">
      <Nav />
      <section>{main}</section>
    </div>
  );
}

export default App;
