import PlacesData from "./PlacesData";
import Card from "./Card";
import Header from "./Header";
export default function App() {
  const cards = PlacesData.map(item => {
    return (
        <Card
            {...item}
        />
    )
  }) 
  return (
    <div className="WebApp">
      <Header />
      <div className="Card--list">
      {cards}
      </div>
    </div>
  );
}
