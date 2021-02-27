import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogBrowser from "./HogBrowser";
import Filter from "./Filter";

// Display all hogTitles 
// ---------------------
// capture the hog data and hold it in state
// create the component responsible for iteration 
//  - pass the hogs array into that component as props 


//In HogBrowser 
// ------------------------
//  - map over all of the hog objects and return a HogTile component
//     - making sure to provide it with individual hog data as props
//     - and a key 

//In HogTile 
// -----------------------
// - render the hog info 


class App extends Component {
  constructor(){
    super()

    this.state = {
      hogs: hogs,
      showGreasedOnly: false,
      sortBy: ''
    }
  }

  handleGreased = () => {
    //console.log("checkbox clicked")
  
    this.setState({
      showGreasedOnly: !this.state.showGreasedOnly
    })
  }

  findHogsToShow = () => {
    let updatedHogs = updatedHogs = this.state.hogs

    if (this.state.showGreasedOnly) {
      updatedHogs = updatedHogs.filter(hogObj => hogObj.greased)
    }

    if(this.state.sortBy === 'name') {
      updatedHogs.sort(function(hogA, hogB){
        const nameA = hogA.name.toUpperCase()
        const nameB = hogB.name.toUpperCase()

        if(nameA < nameB) {
          return -1
        }
        if(nameA > nameB){
          return 1
        }
          return 0

      })

    }else if (this.state.sortBy === 'weight') {
      updatedHogs.sort(function (hogA, hogB){
        return hogA.weight - hogB.weight
      })

    }

    return updatedHogs
    // if (this.state.showGreasedOnly){
    //   return this.state.hogs.filter(hogObj => hogObj.greased)
    // } else {
    //   return this.state.hogs
    // }

    // if (this.state.sortBy === 'name') {

    // }else if (this.state.sortBy === 'weight') {
    // }
  }


  updateSortBy = (e) => {
    //console.log(e.target.value)
    this.setState({
      sortBy: e.target.value
    })


  }

  render() {
    const  filteredHogs = this.findHogsToShow()

    return (
      <div className="App">
        <Nav />
        <Filter handleGreased={this.handleGreased} updateSortBy={this.UpdateSortBY} />
        <HogBrowser hogs={filteredHogs} />
      </div>
    );
  }
}

export default App;
