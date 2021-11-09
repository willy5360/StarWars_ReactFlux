import React, { useContext, useEffect, useState } from "react";
import PeopleCardDetail from "../component/peopleCardDetail";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const PeopleDetail =()=>{
    const {store, actions}=useContext(Context);
    const[cardDetails, setCardDetails]= useState();
    let params= useParams()

    useEffect(()=>{

    })


return 
    <PeopleCardDetail />
}
