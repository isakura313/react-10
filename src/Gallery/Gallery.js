import React from 'react';
import axios from 'axios';
import Card from '../Card';
import './Gallery.sass'
// компонент галерии
// запрашивать информацию при render

class Gallery extends React.Component {
    constructor() {
        super()
        this.state = {
            photos: [],
            loaded: true
        }
    }

    async componentDidMount() {
        const photos = await axios({
            method: "GET",
            url: "https://api.pexels.com/v1/curated",
            headers:{
                Authorization: '563492ad6f91700001000001c6dc5c5329904df0936ea995dc4d7209'
            }
        })

        this.setState({
            photos:photos.data.photos,
            loaded: false
        })
    }
    render() {
        const CardList = this.state.photos.map(img=>{
            return <Card
                key={img.id}
                img_link ={img.src.small}
                author = {img.photographer}
                url = {img.url}
           />
        })
        if(this.state.loaded){
            return <div> Идет загрузка</div>
        } else{
        return (
            <div><h1>Gallery</h1> 
                <div className="gallery_wrapper">
                    {CardList}
                </div>
            </div>
        )
    }
}
}
export default Gallery