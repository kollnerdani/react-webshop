import './App.css';

const App = () => {
    const categories = [
        {
            id: 1,
            title: "Hats"
        },
        {
            id: 2,
            title: "Jackets"
        },
        {
            id: 3,
            title: "Sneakers"
        },
        {
            id: 4,
            title: "Womens"
        },
        {
            id: 1,
            title: "Mens"
        }

    ]
    return (
      <div className="categories-container">
          {categories.map(({title}) => {
             return(
                 <div className="category-container">
                     {/*<img src="" alt=""/>*/}
                     <div className="category-body-container">
                         <h2>{title}</h2>
                         <p>Shop Now</p>
                     </div>
                 </div>
             )
          })}
      </div>
  );
}

export default App;
