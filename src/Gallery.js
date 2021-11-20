import React from 'react';
import axios from 'axios';
import Loader from './Loader'
import Card from './Card';
import './gallery.css';
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
            images: images.data,
            loaded: true
        })
    }
    render() {
        const imageList = this.state.images.map(image => {
            return <Card url_download={image.download_url}
                key = {image.id}
                width={image.width}
                height={image.height}
                author={image.author}
                url={image.url}
            />
        })
        if (!this.state.loaded) {
            return <Loader />
        } else {
            return (
                <div>
                    <h1>Gallery</h1>
                    <div className="wrapper">
                        {imageList}
                    </div> 
                </div>
            )
        }
    }
}
export default Gallery