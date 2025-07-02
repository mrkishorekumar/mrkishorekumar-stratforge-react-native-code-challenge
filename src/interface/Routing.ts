import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ComponentType } from "react";

export interface IRoutingList {
    name: string;
    component: ComponentType<{}>;
    options?: BottomTabNavigationOptions;
    id: string
}