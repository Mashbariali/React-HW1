
import './App.css';
import Nav from './componeent/Nav'
import Card from './componeent/Cards'
import Img1 from './componeent/Images/1.jpg'
import Img2 from './componeent/Images/2.jpg'
import Img3 from './componeent/Images/3.jpg'
import Img4 from './componeent/Images/4.jpg'
import Img5 from './componeent/Images/5.jpg'
import Img6 from './componeent/Images/6.jpg'

function App() {
  return (
    <div className='cont'>
      <Nav/>
    <div className="App">
     
      

      <Card title="12 Angry Men" story="The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict." img={Img1} year="1957"></Card>
      <Card title="Schindler's List" story="In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis." img={Img2} year="1993"></Card>
      <Card title="The Dark Knight" story="When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice." img={Img3} year="2008"></Card>
      <Card title="The Godfather Part II" story="The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate." img={Img4} year="1974"></Card>
      <Card title="The Godfather" story="The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son." img={Img5} year="1972"></Card>
      <Card title="The Shawshank Redemption" story="Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." img={Img6} year="1994"></Card>
     
    </div>
    </div>
  );
}

export default App;
