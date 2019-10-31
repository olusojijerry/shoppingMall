import React, {Component} from 'react';
import Axios from 'axios';

import Navigation from '../../components/Shoppings/Navigation/Navigation';
import Sidebar from '../../components/Shoppings/SideBar/SIdebar';
import Links from '../../components/Shoppings/SideBar/Links/links';
import PriceLinks from "../../components/Shoppings/SideBar/PriceLinks/PriceLinks";
import ColorLinks from "../../components/Shoppings/SideBar/Colorlinks/Colorlinks";
import SizeLinks from "../../components/Shoppings/SideBar/Sizeslinks/Sizeslinks";
import ShopItem from '../../components/Shoppings/Shop/Shop';
// you will have to import shop and pass the props for pagination postcard

class Shop extends Component{
    state = {
        post: [],
        loading: false,
        currentpage: 1,
        postPerPage: 10
    }

    componentWillMount () {
        const fetchpost = async() => {
            this.setState({loading: true});
            const res = await Axios.get('');
            this.setState({post: res.data})
        }

        fetchpost();
    }
    render(){
        const indexOfLastPost = this.state.currentpage * this.state.postPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
        const currentPost = this.state.post.slice(this.indexOfFirstPost, this.indexOfLastPost);

        const paginate = (pagenumber) => (
            this.setState({
                currentpage: pagenumber
            })
        )

        return(
            <main className="shop-page my-5">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-12">
                            <Navigation linkage={this.props.links} />
                        </div>
                        <div className="col-lg-3 shop-sidebar hidden-md-down">
                            {/* Shop Single Sidebar Category */}
                            <Sidebar sidebartitle="Filter Your Choice" >
                                <Links links={this.props.sidebarlinks} />
                            </Sidebar>
                            <Sidebar sidebarItems="Price" >
                                <PriceLinks links={this.props.pricelinks} />
                            </Sidebar>
                            <Sidebar sidebarItems="Colors" >
                                <ColorLinks links={this.props.pricelinks} />
                            </Sidebar>
                            <Sidebar sidebarItems="Sizes" >
                                <SizeLinks links={this.props.pricelinks} />
                            </Sidebar>
                        </div>
                        <ShopItem />
                    </div>
                </div>
            </main>
);
}
}

export default Shop;