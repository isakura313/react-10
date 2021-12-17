import React from 'react';
import axios from 'axios';
import Card from '../Card';
import './Gallery.sass'
import key from '../key';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import Paginate from '../Paginate';
// компонент галерии
// запрашивать информацию при render

class Gallery extends React.Component {
    constructor() {
        super()
        this.state = {
            images: [],
            loaded: true,
            photoIndex: 0,
            isOpen: false,
            lightImages: [],
            paginateNumber:1,
            perPage: 30
        }
    }
    updatePage=(index)=>{
        this.setState({
            paginateNumber:index
        })
    }


    async componentDidMount() {
        const images = await axios({
            method: "GET",
            url: `https://api.unsplash.com/photos?page=${this.state.paginateNumber}&per_page=${this.state.perPage}`,
            headers:  {
                'Authorization': key
            }
        })
        console.log(images)
        const lightImages = images.data.map(img=>{
            return img.urls.full
        })
        // const imagesData = images.data.map(img=>{
        //     return img.urls.small
        // })
        this.setState({
            images:images.data,
            loaded: false,
            lightImages
        })
    }
    async componentDidUpdate(){
        const images = await axios({
            method: "GET",
            url: `https://api.unsplash.com/photos?page=${this.state.paginateNumber}?per_page=${this.state.perPage}`,
            headers:  {
                'Authorization': key
            }
        })
        const lightImages = images.data.photos.map(img=>{
            return img.urls.full
        })
        this.setState({
            images:images.data,
            loaded: false,
            lightImages
        })
    }
    render() {
        const { photoIndex, isOpen, lightImages } = this.state;
        const CardList = this.state.images.map((img, index)=>{
            return <Card
                handleClick ={()=>this.setState({isOpen: true, photoIndex:index})}
                key = {img.id}
                src = {img.urls.regular}
                author = {img.user.username}
                url = {img.links.self}
                photographer_url = {img.user.portfolio_url}
                photographer = {img.user.username}
           />
        })
        if(this.state.loaded){
            return <div> Идет загрузка</div>
        } else{
        return (
            <div className='wrapper'>
                <h1>Gallery</h1> 
                <div className="gallery_wrapper">
                    {CardList}
        {isOpen && (
          <Lightbox
            mainSrc={lightImages[photoIndex]}
            nextSrc={lightImages[(photoIndex + 1) % lightImages.length]}
            prevSrc={lightImages[(photoIndex + lightImages.length - 1) % lightImages.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + lightImages.length - 1) % lightImages.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % lightImages.length,
              })
            }
          />
        )}
                </div>
                <Paginate 
                    number={6} 
                    selectNumber = {this.state.paginateNumber}
                    handleClick = {this.updatePage}
                    />
            </div>
        )
    }
}
}
export default Gallery