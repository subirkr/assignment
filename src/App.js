import React from 'react';
import axios from 'axios';
import './App.css';
// import ImageList from './ImageList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imageList: []}
    }
    async componentDidMount() {
        const response =  await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
        this.setState({ imageList: response.data.meals[0] });
        console.log(this.state.imageList)
    }
    render() {
        return(
          <div className="cont-main">  
            <div className="container mt-4">
              <div className='left-panel'>
              { this.state.imageList.strMeal }
              <img className="img-tag" src={this.state.imageList.strMealThumb}/>
              </div>
              <div className='right-panel'>
             Ingredients
             <div className='img-panel'>
               <div className='panel-tag'>
               <img className='img-panel-tag' src={this.state.imageList.strMealThumb}/>
               { this.state.imageList.strMeasure1}
               </div>
               <div className='panel-tag'>
               <img className='img-panel-tag' src={this.state.imageList.strMealThumb}/>
               { this.state.imageList.strMeasure2}
               </div>
               <div className='panel-tag'>
               <img className='img-panel-tag' src={this.state.imageList.strMealThumb}/>
               { this.state.imageList.strMeasure3}
               </div>
               <div className='panel-tag'>
               <img className='img-panel-tag' src={this.state.imageList.strMealThumb}/>
               { this.state.imageList.strMeasure4}
               </div>
               <div className='panel-tag'>
               <img className='img-panel-tag' src={this.state.imageList.strMealThumb}/>
               { this.state.imageList.strMeasure5}
               </div>
               <div className='panel-tag'>
               <img className='img-panel-tag' src={this.state.imageList.strMealThumb}/>
               { this.state.imageList.strMeasure6}
               </div>
               <div className='panel-tag'>
               <img className='img-panel-tag' src={this.state.imageList.strMealThumb}/>
               { this.state.imageList.strMeasure7}
               </div>
             </div>
              </div>
              
                {/* <ImageList images=/>     */}
            </div>
            <div className='text-center'>{this.state.imageList.strInstructions}</div>
            </div>
        );
    }
}

export default App;