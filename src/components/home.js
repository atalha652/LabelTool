import React, { Component } from 'react'
import logo_f from '../images/tool.png'
import Annotation from 'react-image-annotation'

const img0 = require('../images/image0.jpg')
const img1 = require('../images/image1.jpg')
const img2 = require('../images/image2.jpg')
const img3 = require('../images/image3.jpeg')

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0,
            imgList: [img0, img1, img2, img3],
            annotations: [],
            annotation: {},
            active: false,
            isEdit: false
        }

        this.handlePrev = this.handlePrev.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    /**
     * Function for Previous Image Button
    */
    handlePrev() {
        if (this.state.index - 1 === -1) {
            this.setState({
                index: this.state.imgList.length - 1
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    /**
     * Function for Next Image Button
    */
    handleNext() {
        if (this.state.index + 1 === this.state.imgList.length) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    /**
     * Image Annotation Function
    */
    onChange(annotation) {
        this.setState({ annotation }, () => { console.log('annotation', annotation) })
    }

    /**
     * Submit annotated object Function
    */
    onSubmit(annotation) {
        const { geometry, data } = annotation
        this.setState({
            annotation: {},
            annotations: this.state.annotations.concat({
                geometry,
                data: {
                    ...data,
                    id: Math.random()
                }
            })
        })
    }


    render() {
        const { active } = this.state


        return (
            <div>
                <nav className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 border-bottom-lightGrey">
                    <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3 border-right-lightGrey " href="#">
                        <img src={logo_f} className="img-fluid " alt='logo' style={{ width: '150px' }} />
                    </a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav px-3 headerList">
                        <li className="nav-item text-nowrap">
                            <button type="button" className="btn btn-light btn-sm mr-4" onClick={this.handlePrev}>
                                <div><i className="fa fa-angle-left" aria-hidden="true"></i></div>Prev</button>
                        </li>
                        <li className="nav-item text-nowrap mr-4">
                            <button type="button" className="btn btn-light btn-sm" onClick={this.handleNext}>
                                <div><i className="fa fa-angle-right " aria-hidden="true"></i></div>Next</button>
                        </li>
                        <li className="nav-item text-nowrap border-left-lightGrey mr-4">
                            {/* <button type="button" className="btn btn-light btn-sm">
                                <div><i className="fa fa-expand" aria-hidden="true"></i></div>Fullscreen</button> */}
                        </li>
                        <li className="nav-item text-nowrap ">
                            <button type="button" className="btn btn-light btn-sm">
                                <div><i className="fa fa-sign-out" aria-hidden="true"></i></div>Exit</button>
                        </li>
                    </ul>
                </nav>

                <div className="d-flex" id="wrapper">
                    <div className="border-right" id="sidebar-wrapper">
                        <ul className="navbar-nav px-3">
                            <li className="sideList">
                                <button className="nav-link side-nav-link btn-class-none">
                                    <i className="fa fa-mouse-pointer" aria-hidden="true"></i>
                                </button>
                            </li>
                            <li className="sideList">
                                <button className="nav-link side-nav-link btn-class-none" >
                                    <i className="fa fa-hand-paper-o" aria-hidden="true"></i>
                                </button>
                            </li>
                            <li className="sideList">
                                <button className="nav-link side-nav-link btn-class-none" >
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </li>
                            <li className="sideList">
                                <button className="nav-link side-nav-link btn-class-none" >
                                    <i className="fa fa-object-ungroup" aria-hidden="true"></i>
                                </button>
                            </li>
                            <li className="sideList">
                                <button className="nav-link side-nav-link btn-class-none" >
                                    <i className="fa fa-tag" aria-hidden="true"></i>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div id="page-content-wrapper">
                        <div className="container">
                            <div className="row mt-4 ml-1">
                                <div className="col-md-12">
                                    <Annotation
                                        src={this.state.imgList[this.state.index]}
                                        alt='Two pebbles anthropomorphized holding hands'
                                        annotations={this.state.annotations}
                                        type={this.state.type}
                                        value={this.state.annotation}
                                        onChange={this.onChange}
                                        onSubmit={this.onSubmit}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home
