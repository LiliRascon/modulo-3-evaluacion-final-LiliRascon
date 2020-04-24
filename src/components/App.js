import React from 'react';
import '../stylesheets/App.scss';
import fetchData from '../services/FetchData';
import CharacterList from '../components/CharacterList';
import Filter from '../components/Filters';
import { Switch, Route } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail';
import Header from '../components/Header.js';



class App extends React.Component {
  constructor(props) {
    super(props);


    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.addFilters = this.addFilters.bind(this);

    this.state = {
      data: [],
      value: ''
    }
  }

  componentDidUpdate() {
    localStorage.setItem('info', JSON.stringify(this.state.value))
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

    const localInfo = JSON.parse(localStorage.getItem('info'));
    console.log(localInfo)
    if (localInfo !== null) {
      this.setState({
        value: localInfo
      })
    }
  }

  handleInputValue(inputValue) {
    this.setState({
      value: inputValue
    })

  }

  addFilters() {
    const { data, value } = this.state;
    return data
      .filter(cardsObj => value === '' || cardsObj.name.toUpperCase().includes(value.toUpperCase()))
      
  }
 

  renderCharacterDetail(props) {
    console.log(props.match.params.id)
    const routeId = props.match.params.id;
    const results = this.state.data;
    for (let result of results) {
      if (result.id === parseInt(routeId)) {
        return <CharacterDetail cardsObj={result} />
      }

    }

  }



  render() {
    console.log(this.state.data)
    return (
      <div className="App">

        <Switch>
          <Route exact path="/">
            <Header />
            <Filter handleInputValue={this.handleInputValue} value={this.state.value} />
            <CharacterList cards={this.addFilters()} inputValue={this.state.value} />
          </Route>
          <Route path="/results/:id" render={this.renderCharacterDetail} />

        </Switch>

      </div>
    );
  }
}

export default App;
