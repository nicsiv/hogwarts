import React from 'react'
import { render } from 'react-dom'

class HogTile extends React.Component{
    constructor(){
        super()
        this.state ={
            showDetails: false

        }
    }
    renderImage = () => {
        const name = this.props.name.toLowerCase().split(' ').join('_')
        const pigImage = require(`../hog-imgs/${name}.jpg`)
        return <img src={pigImage} height={'100px'} width={'100px'} />
    }

    renderDetails = () => {
        const { specialty, weight, greased, ['hightest medal achieved']: medal} = this.props.hog 
        
        return (
            <div>
                <p>specialty: {specialty}</p>
                <p>weight: {weight}</p>
                {/* <p>greased: {greased}</p> */}
                <p>medal: {medal}</p> 
            </div>
        )
    }

    handleToggleDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }


    render(){
    //console.log(this.props, '-------')

    return (
        <div className= 'ui card pigTile'>
          <h4>{this.props.hog.name}</h4>
          {this.renderImage()}
          {this.state.showDetails ? this.renderDetails() : null}
          <button onClick={this.handleToggleDetails}>toggle details</button>
          
        </div>
    )
  }
}

export default HogTile