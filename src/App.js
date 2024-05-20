
import './App.css';
import Main from './components/Main/Main';
// Function to fetch and filter data
async function fetchNewsData() {
  const apiUrl = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl';
  try {
    // Fetch the data from the API
    const response = await fetch(apiUrl);
    if (!response.ok && response.status === "404") {
      console.log("запрос составлен неправильно!");
    }
    // Parse the JSON from the response
    const data = await response.json();
   
    // Return or process the filtered data as needed
    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('There has been a problem with your fetch operation:', error);
  }
}

function App() {
const news = fetchNewsData();
console.log(news);

  return (
    <div className="App">
<Main news />
    </div>
  );
}

export default App;
