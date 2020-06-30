import React, { Component } from 'react'
import logo_f from '../images/tool.png'
import ReactImageAnnotate from "react-image-annotate"

const img0 = require('../images/image0.jpg')
const img1 = require('../images/image1.jpg')
const img2 = require('../images/image2.jpg')
const img3 = require('../images/image3.jpeg')


export class AnnotationTool extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imgList: [
                {
                    src: img0, name: "Image 0"
                },
                {
                    src: img1, name: "Image 1"
                },
                {
                    src: img2, name: "Image 2"
                },
                {
                    src: img3, name: "Image 3"
                }
            ],
            selectImage: img0,
            selectOptions: ['Car', 'Bus', 'Truck', 'Motorcycle', 'Trailer', 'Person', 'Sidewalk', 'Wall', "Sign", "traffic Sign"]

        }
        this.onSelectImage = this.onSelectImage.bind(this)
        this.goToWeb = this.goToWeb.bind(this)
    }

    onSelectImage(selectImage) {
        this.setState({ selectImage }, () => { console.log('selectImage', selectImage) })
    }

    goToWeb() {
        window.location = '';
    }

    render() {
        const { imgList, selectOptions, selectImage } = this.state

        return (
            <div>
                <nav className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 border-bottom-lightGrey">
                    <a className="navbar-brand   mr-0 px-3 border-right-lightGrey " href="#">
                        <img src={logo_f} className="img-fluid " alt='logo' style={{ width: '150px' }} />
                    </a>

                    <li className="nav-item mr-auto nav-listStyle-none">
                        <div className="nav-link text-muted" >Demo </div>
                    </li>
                    <li className="nav-item ml-auto nav-listStyle-none border-left-lightGrey">
                        <button type="button" onClick={this.goToWeb} className="btn btn-light btn-lg">
                            <i className="fa fa-sign-out" aria-hidden="true"></i>Exit</button>
                    </li>
                </nav>
                <ReactImageAnnotate
                    selectedImage={selectImage}
                    taskDescription="# Draw region around each object."
                    images={imgList}
                    regionClsList={selectOptions}
                    enabledTools={["create-box", "select"]}
                />
            </div>
        )
    }
}

export default AnnotationTool
