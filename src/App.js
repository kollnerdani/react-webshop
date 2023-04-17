import { Routes, Route } from "react-router-dom";
import { createUserDocument, onAuthStateChangedListener } from "./utils/firebase/firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { setCurrentUser } from "./store/user/user.action";
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation'
import Auth from "./routes/auth/auth";
import Shop from './routes/shop/shop'
import Checkout from "./routes/checkout/checkout";


const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener( (user) => {
            if (user){
                createUserDocument(user);
            }
            dispatch(setCurrentUser(user));
        })
        return unsubscribe
    }, [dispatch])

    return (
       <Routes>
           <Route path='/' element={<Navigation/>}>
               <Route index element={<Home/>}/>
               <Route path='shop/*' element={<Shop/>}/>
               <Route path='auth' element={<Auth/>}/>
               <Route path='checkout' element={<Checkout/>}/>
           </Route>
       </Routes>
   )
}

export default App;
