import React from "react";
import { Helmet } from "react-helmet";
import PersistentDrawerLeft from "./Drawer";
import Back from "./Back";
export default function Transact(){
 const css = require("../css/pay.css").toString();
 return (
   <>
     <Helmet>{css}</Helmet>
     <PersistentDrawerLeft />
     <div className="bodyContainer">
       <div class="row">
         <div class="col-75">
           <div class="pie10">
             <form action="/home">
               <div class="row">
                 <div class="col-50">
                   <h3>Billing Address</h3>
                   <label for="fname">
                     <i class="fa fa-user"></i> Full Name
                   </label>
                   <input
                     type="text"
                     id="fname"
                     name="firstname"
                     placeholder="John M. Doe"
                     required
                   />
                   <label for="email">
                     <i class="fa fa-envelope"></i> Email
                   </label>
                   <input
                     type="email"
                     id="email"
                     name="email"
                     placeholder="john@example.com"
                     required
                   />
                   <label for="adr">
                     <i class="fa fa-address-card-o"></i> Address
                   </label>
                   <input
                     type="text"
                     id="adr"
                     name="address"
                     placeholder="542 W. 15th Street"
                     required
                   />
                   <label for="city">
                     <i class="fa fa-institution"></i> City
                   </label>
                   <input
                     type="text"
                     id="city"
                     name="city"
                     placeholder="New York"
                     required
                   />

                   <div class="row">
                     <div class="col-50">
                       <label for="state">State</label>
                       <input
                         type="text"
                         id="state"
                         name="state"
                         placeholder="NY"
                         required
                       />
                     </div>
                     <div class="col-50">
                       <label for="zip">Zip</label>
                       <input
                         type="text"
                         id="zip"
                         name="zip"
                         placeholder="10001"
                         required
                       />
                     </div>
                   </div>
                 </div>

                 <div class="col-50">
                   <h3>Payment</h3>
                   <label for="cname">Payee Account Holder Name</label>
                   <input
                     type="text"
                     id="cname"
                     name="cardname"
                     placeholder="John More Doe"
                     required
                   />
                   <label for="ccnum">Payee Account ID</label>
                   <input
                     type="text"
                     id="ccnum"
                     name="cardnumber"
                     placeholder="12345678902"
                     required
                   />
                   <div class="row">
                     <div class="col-50">
                       <label for="expyear">IFSC Code</label>
                       <input
                         type="text"
                         id="expyear"
                         name="expyear"
                         placeholder="2341"
                         required
                       />
                     </div>
                     <div class="col-50">
                       <label for="cvv">Note</label>
                       <input
                         type="text"
                         id="cvv"
                         name="cvv"
                         placeholder="Debt"
                         required
                       />
                     </div>
                   </div>
                 </div>
               </div>
               <label>
                 <input
                   type="checkbox"
                   checked="checked"
                   name="sameadr"
                   required
                 />
                 Add To Record
               </label>
               <input type="submit" value="Make Payment" class="btn" required />
             </form>
           </div>
         </div>
       </div>
     </div>
   </>
 );
}