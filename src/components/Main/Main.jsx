
function Main(props) {
 const articles = props.results;
 console.log(articles);
    if (articles===null){
      return (
        <div>
          <h1>No news</h1>
        </div> 
      );
    } else {

      return (
        <ol>
          {articles.map(a => (
            <li key={a}>{a.title}</li>
          ))}
        </ol>
      );
    }
    
}
export default Main;