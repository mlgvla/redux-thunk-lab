import React, { Component } from 'react';

class CatList extends Component {
    catPix = () => {
        return this.props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} alt={catPic.id}/>)
    }
    render() {
        return (
            <div>
              {this.catPix()}  
            </div>
        );
    }
}

export default CatList;


