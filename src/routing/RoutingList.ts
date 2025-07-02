import { IRoutingList } from "../interface/Routing";
import MyCart from "../screens/MyCart";
import MyProfile from "../screens/MyProfile";
import ProductLandingPage from "../screens/ProductLandingPage";
import Wishlist from "../screens/Wishlist";

export const RoutingNameAndTitle = {
    PLP: {
        name: "ProductLandingPage",
        title: 'Products'
    },
    MYPROFILE: {
        name: "MyProfile",
        title: 'Profile'
    },
    WISHLIST: {
        name: "Wishlist",
        title: 'Wishlist'
    },
    CART: {
        name: "MyCart",
        title: 'Cart'
    }
}

const RoutingList: IRoutingList[] = [
    {
        name: RoutingNameAndTitle.PLP.name,
        component: ProductLandingPage,
        options: { title: RoutingNameAndTitle.PLP.title },
        id: "1",
    },
    {
        name: RoutingNameAndTitle.WISHLIST.name,
        component: Wishlist,
        options: { title: RoutingNameAndTitle.WISHLIST.title },
        id: "3",
    },
    {
        name: RoutingNameAndTitle.CART.name,
        component: MyCart,
        options: { title: RoutingNameAndTitle.CART.title },
        id: "4",
    },
    {
        name: RoutingNameAndTitle.MYPROFILE.name,
        component: MyProfile,
        options: { title: RoutingNameAndTitle.MYPROFILE.title },
        id: "2",
    }
];



export default RoutingList;