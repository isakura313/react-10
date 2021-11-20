import React from 'react';
import axios from 'axios';
import Loader from './Loader'
// компонент галерии
// запрашивать информацию при render

class Gallery extends React.Component {
    constructor() {
        super()
        this.state = {
            images: [],
            loaded: false
        }
    }

    async componentDidMount() {
        const images = await axios({
            method: "GET",
            url: "https://picsum.photos/v2/list"
        })

        this.setState({
            images:images.data,
            loaded: true
        })
    }
    render() {
        if(!this.state.loaded){
            return <Loader/>
        } else{
        return (
            <div>
                <h1>Gallery</h1> 
                <img src={this.state.images[0].download_url} alt="" width="400" />
            </div>
        )
    }
}
}
export default Gallery