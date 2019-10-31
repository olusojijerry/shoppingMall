import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Titlebar from '../../components/Navigation/TitleBar/TitleBar';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component{

    state = {
        activeLink: false,
        menu1: {menutitle: "Men", tabsdetails:[{title: "Men's Clothing", 
        anchor:[
            {link: "/", name: "Sleepwear & Robes"},
            {link: "/", name: "Shapewear"},
            {link: "/", name: "Tops & shirts"},
            {link: "/", name: "Sweatshirts"},
            {link: "/", name: "Fashion Hoodies"},
            {link: "/", name: "Jeans & Trousers"},
            {link: "/", name: "Capris and Shorts"},
            {link: "/", name: "Leggings"},
            {link: "/", name: "Swimsuits & Cover Ups"},
            {link: "/", name: "Lingerie, Sleep & Lounge"},
            {link: "/", name: "Inner & Nightwear"},
            {link: "/", name: "Jumpsuits, Rompers & Overalls"},
            {link: "/", name: "Coats, Jackets & Vests"},
            {link: "/", name: "Suiting & Blazers "},
            {link: "/", name: "Socks & Hosiery"}
        ]},
        {title: "Handbags & Wallets", 
        anchor:[
            {link: "/", name: "Clutches"},
            {link: "/", name: "Cross-Body Bags"},
            {link: "/", name: "Evening Bags"},
            {link: "/", name: "Shoulder Bags"},
            {link: "/", name: "Top-Handle Bags"},
            {link: "/", name: "Wristlets"}
        ]},
        {title: "Accessories", 
        anchor:[
            {link: "/", name: "Handbag Accessories"},
            {link: "/", name: "Sunglasses Accessories"},
            {link: "/", name: "Eyewear Accessories"},
            {link: "/", name: "Scarves & Wraps"},
            {link: "/", name: "Gloves & Mittens"},
            {link: "/", name: "Hats & Caps"},
            {link: "/", name: "Handbag Accessories"}
        ]}]},
        products:[{type: "Apple", logo:"fa fa-apple",
            brandCloth:[{heading:"Clothing",
            details:[{link:"/", linkName:"List Products 07"},
                {link:"/", linkName:"List Products 08"},
                {link:"/", linkName:"List Products 09"},
                {link:"/", linkName:"List Products 10"}
        ]},
        {heading:"Accessories",
        details:[{link:"/", linkName:"List Products 07"},
            {link:"/", linkName:"List Products 08"},
            {link:"/", linkName:"List Products 09"},
            {link:"/", linkName:"List Products 10"}
        ]}]},
        {type: "Windows", logo:"fa fa-windows",
        brandCloth:[{heading:"Apple More Products",
        details:[{link:"/", linkName:"List Products 07"},
            {link:"/", linkName:"List Products 08"},
            {link:"/", linkName:"List Products 09"},
            {link:"/", linkName:"List Products 10"}
        ]},
        {heading:"Apple More Products",
            details:[{link:"/", linkName:"List Products 07"},
                {link:"/", linkName:"List Products 08"},
                {link:"/", linkName:"List Products 09"},
                {link:"/", linkName:"List Products 10"}
        ]}]},
        {type: "Skype", logo:"fa fa-skype",
        brandCloth:[{heading:"Apple More Products",
        details:[{link:"/", linkName:"List Products 07"},
            {link:"/", linkName:"List Products 08"},
            {link:"/", linkName:"List Products 09"},
            {link:"/", linkName:"List Products 10"}
        ]},
        {heading:"Apple More Products",
            details:[{link:"/", linkName:"List Products 07"},
                {link:"/", linkName:"List Products 08"},
                {link:"/", linkName:"List Products 09"},
                {link:"/", linkName:"List Products 10"}
        ]}]},
        {type: "Paypal", logo:"fa fa-paypal",
        brandCloth:[{heading:"Apple More Products",
        details:[{link:"/", linkName:"List Products 07"},
            {link:"/", linkName:"List Products 08"},
            {link:"/", linkName:"List Products 09"},
            {link:"/", linkName:"List Products 10"}
        ]},
        {heading:"Apple More Products",
            details:[{link:"/", linkName:"List Products 07"},
                {link:"/", linkName:"List Products 08"},
                {link:"/", linkName:"List Products 09"},
                {link:"/", linkName:"List Products 10"}
        ]}]},
        {type:"Quora", logo:"fa fa-quora",
        brandCloth:[{heading:"Apple More Products",
        details:[{link:"/", linkName:"List Products 07"},
            {link:"/", linkName:"List Products 08"},
            {link:"/", linkName:"List Products 09"},
            {link:"/", linkName:"List Products 10"}
        ]},
        {heading:"Apple More Products",
            details:[{link:"/", linkName:"List Products 07"},
                {link:"/", linkName:"List Products 08"},
                {link:"/", linkName:"List Products 09"},
                {link:"/", linkName:"List Products 10"}
        ]}]},
        {type:"Sound Cloud", logo:"fa fa-soundcloud",
        brandCloth:[{heading:"Apple More Products",
        details:[{link:"/", linkName:"List Products 07"},
            {link:"/", linkName:"List Products 08"},
            {link:"/", linkName:"List Products 09"},
            {link:"/", linkName:"List Products 10"}
        ]}]},
        {type:"Houzz", logo:"fa fa-houzz",
        brandCloth:[{heading:"Apple More Products",
        details:[{link:"/", linkName:"List Products 07"},
            {link:"/", linkName:"List Products 08"},
            {link:"/", linkName:"List Products 09"},
            {link:"/", linkName:"List Products 10"}
        ]},
        {heading:"Apple More Products",
            details:[{link:"/", linkName:"List Products 07"},
                {link:"/", linkName:"List Products 08"},
                {link:"/", linkName:"List Products 09"},
                {link:"/", linkName:"List Products 10"}
        ]}]},
        {type:"Get Pocket", logo:"fa fa-get-pocket",
        brandCloth:[{heading:"Apple More Products",
        details:[{link:"/", linkName:"List Products 07"},
            {link:"/", linkName:"List Products 08"},
            {link:"/", linkName:"List Products 09"},
            {link:"/", linkName:"List Products 10"}
        ]},
        {heading:"Apple More Products",
            details:[{link:"/", linkName:"List Products 07"},
                {link:"/", linkName:"List Products 08"},
                {link:"/", linkName:"List Products 09"},
                {link:"/", linkName:"List Products 10"}
        ]}]}],
        brandCloth:[{heading:"Apple More Products",
        details:[{link:"/", linkName:"List Products 07"},
            {link:"/", linkName:"List Products 08"},
            {link:"/", linkName:"List Products 09"},
            {link:"/", linkName:"List Products 10"}
        ]},
        {heading:"Apple More Products",
            details:[{link:"/", linkName:"List Products 07"},
                {link:"/", linkName:"List Products 08"},
                {link:"/", linkName:"List Products 09"},
                {link:"/", linkName:"List Products 10"}
        ]}
    ],
    images:[
        "../../../../../../assets/images/5.png",
        "../../../../../../assets/images/5.png",
        "../../../../../../assets/images/5.png",
        "../../../../../../assets/images/5.png",
        "../../../../../../assets/images/5.png",
        "../../../../../../assets/images/5.png",
        "../../../../../../assets/images/5.png",
        "../../../../../../assets/images/5.png",
        "../../../../../../assets/images/5.png",
        "../../../../../../assets/images/5.png",
        "../../../../../../assets/images/5.png"
    ]
}
    render(){
        return( 
            //here is the main layout page for the          
        <Aux>
            <div className="wsmenucontainer clearfix">
                <div className="overlapblackbg"></div>
                <SideBar />
                <Titlebar />
                <Toolbar images={this.state.images} tabsLink={this.state.menu1} brandlink={this.state.products} brand={this.state.brandCloth}/>
            </div>
            <main className={classes.Content}>
                {this.props.children}
            </main>
            <Footer></Footer>
        </Aux>
        );
    }
}

export default Layout;