import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Modal from "../../components/UI/Modal/Modal";
import Login from '../../components/Login/Login';
import Subscribe from '../../components/Subscribe/Subscribe';
import Sales from '../../components/Sales/Sales';
//import image from '../../assets/images/7.jpg';
class BodyBuilder extends Component {
    state = {
        login: false,
        register: false,
        activeTab: '1',
        proddetails: {
            colTitle: "Top Rated Product",
            proddetail: [
                {icon: true, tag: "great-deal",
                Label: "Deal", type: "Stripped Wool",
                imageLoc: "../../../assets/images/7.jpg",
                brand: "Addias", newprice: "10,000", oldprice: "15,000" },
                {icon: true, tag: "great-deal",
                Label: "Deal", type: "Stripped Wool",
                imageLoc: "../../../assets/images/7.jpg",
                brand: "Addias", newprice: "10,000", oldprice: "15,000" },
                {icon: true, tag: "great-deal",
                Label: "Deal", type: "Stripped Wool",
                imageLoc: "../../../assets/images/7.jpg",
                brand: "Addias", newprice: "10,000", oldprice: "15,000" },
                {icon: false, tag: "great-deal",
                Label: "Deal", type: "Stripped Wool",
                imageLoc: "../../../assets/images/7.jpg",
                brand: "Addias", newprice: "10,000", oldprice: "15,000" },
                {icon: false, tag: "great-deal",
                Label: "Deal", type: "Stripped Wool",
                imageLoc: "../../../assets/images/7.jpg",
                brand: "Addias", newprice: "10,000", oldprice: "15,000" },
                {icon: false, tag: "great-deal",
                Label: "Deal", type: "Stripped Wool",
                imageLoc: "../../../assets/images/7.jpg",
                brand: "Addias", newprice: "10,000", oldprice: "15,000" },
                {icon: false, tag: "great-deal",
                Label: "Deal", type: "Stripped Wool",
                imageLoc: "../../../assets/images/7.jpg",
                brand: "Addias", newprice: "10,000", oldprice: "15,000" }
            ]
        },
        proddetails1: {
            colTitle: "New-In",
            proddetail: [
                {icon: true, tag: "great-deal",
                Label: "Deal", type: "Stripped Wool",
                imageLoc: "../../../assets/images/7.jpg",
                brand: "Addias", newprice: "10,000", oldprice: "15,000" },
                {icon: true, tag: "great-deal",
                Label: "Deal", type: "Stripped Wool",
                imageLoc: "../../../assets/images/7.jpg",
                brand: "Addias", newprice: "10,000", oldprice: "15,000" },
                {icon: true, tag: "great-deal",
                Label: "Deal", type: "Stripped Wool",
                imageLoc: "../../../assets/images/7.jpg",
                brand: "Addias", newprice: "10,000", oldprice: "15,000" },
                {icon: false, tag: "great-deal",
                Label: "Deal", type: "Stripped Wool",
                imageLoc: "../../../assets/images/7.jpg",
                brand: "Addias", newprice: "10,000", oldprice: "15,000" },
                {icon: false, tag: "great-deal",
                Label: "Deal", type: "Stripped Wool",
                imageLoc: "../../../assets/images/7.jpg",
                brand: "Addias", newprice: "10,000", oldprice: "15,000" },
                {icon: false, tag: "great-deal",
                Label: "Deal", type: "Stripped Wool",
                imageLoc: "../../../assets/images/7.jpg",
                brand: "Addias", newprice: "10,000", oldprice: "15,000" },
                {icon: false, tag: "great-deal",
                Label: "Deal", type: "Stripped Wool",
                imageLoc: "../../../assets/images/7.jpg",
                brand: "Addias", newprice: "10,000", oldprice: "15,000" }
            ]
        }
    }
    
    //componentDidMount = () =>(
        // document.getElementsByClassName('proSlider').slick({
        //     arrows: true,
        //     prevArrow: '<button type="button" class="slick-prev pro-slick-prev"><i class="fa fa-long-arrow-left"></i></button>',
        //     nextArrow: '<button type="button" class="slick-next pro-slick-next"><i class="fa fa-long-arrow-right"></i></button>',
        //      speed: 300,
        //      variableWidth: true,
        //      slidesToScroll: 1,
        //      responsive: [
        //        {
        //          breakpoint: 992,
        //          settings: {
        //            slidesToScroll: 1,
        //            arrows: false,
        //          }
        //        },
        //        {
        //          breakpoint: 576,
        //          settings: {
        //            slidesToShow: 2,
        //            slidesToScroll: 2,
        //            arrows: false,
        //          }
        //        }
        //      ]
        //    })
    //)

    loginHandler = () => {
        this.setState({login: true});
    }

    loginCancelHandler = () => {
        this.setState({login: false});
    }
    //script for the sliding of the cards
    scroll = (direction) => {
        let scrollObject = document.getElementsByClassName('draggable');
        let far = scrollObject.width/2*direction;
        let pos = scrollObject.scrollLeft + far;

        scrollObject.style.transform = "translateX("+pos+"px;)";
    }
    render () {
        return (
            <Aux>
                <Modal show={this.state.login} modalClosed={this.loginCancelHandler }>
                    <Login />
                </Modal>
                <Sales proddetail={this.state.proddetails1} clickable={this.scroll}/>
                <Sales proddetail={this.state.proddetails} clickable={this.scroll}/>
                <Subscribe />
            </Aux>
        );
    }
}

export default BodyBuilder;