import React from 'react';
import '../stylesheets/App.scss';
import fetchData from '../services/FetchData';
import CharacterList from '../components/CharacterList';
import Filter from '../components/Filters';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this)
    this.state = {
      data:[],
      value:''
    }
  }


  componentDidMount(){
    fetchData()
      .then(data => {
        //en este caso no necesitamos prevState porque no necesitamos aún el estado anterior
        //aquí seteamos el estado porque ya vienen los datos del estado (de arriba)
        this.setState({
          data: data.results
        })
      })
  }

  handleInputValue(inputValue){
    this.setState({
      value: inputValue
    })
  }
  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <Filter handleInputValue={this.handleInputValue}/>
        <CharacterList cards={this.state.data} inputValue={this.state.value}/>
      </div>
    );
  }
}

export default App;
