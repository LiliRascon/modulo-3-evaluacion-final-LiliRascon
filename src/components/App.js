import React from 'react';
import '../stylesheets/App.scss';
import fetchData from '../services/FetchData';
import CharacterList from '../components/CharacterList';
import Filter from '../components/Filters';
import { Switch, Route } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.state = {
      data: [],
      value: ''
    }
  }


  componentDidMount() {
    fetchData()
      .then(data => {
        //en este caso no necesitamos prevState porque no necesitamos aún el estado anterior
        //aquí seteamos el estado porque ya vienen los datos del estado (de arriba)
        this.setState({
          data: data.results
        })
      })
  }

  handleInputValue(inputValue) {
    this.setState({
      value: inputValue
      
    })
  }




  
   renderCharacterDetail(props){
     console.log(props.match.params.id)
     const routeId = props.match.params.id;
     const results = this.state.data;
     for (let result of results){
       if(result.id === parseInt(routeId)){
         return <CharacterDetail cardsObj={result} />
       }
      
     }
    
   }

  // renderShowDetail(props) {
  //   console.log(props)
  //   const urlId = props.match.params.id;
  //   const shows = this.state.dataApi;
  //   for (let showObject of shows) {
  //     if (showObject.show.id === parseInt(urlId)) {
  //       return <ShowDetail show={showObject} />
  //     }
  //   }
  // }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Filter handleInputValue={this.handleInputValue} />
            <CharacterList cards={this.state.data} inputValue={this.state.value} />
          </Route>
          <Route path="/results/:id" render={this.renderCharacterDetail} />
          
        </Switch>

      </div>
    );
  }
}

export default App;
