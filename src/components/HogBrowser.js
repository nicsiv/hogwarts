import React from 'react'
import HogTile from './HotTile'

class HogBrowser extends React.Component{

render(){
//console.log(this.props, 'hogBrowser')

    return (
        <div className= 'ui three cards'>
            {
            this.props.hogs.map(hogObj => {
                return <HogTile hog={hogObj} key={hogObj.name}/>
            })
            }
        </div>
    )
}
}

export default HogBrowser