import React from 'react'
import './Service.css';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Service = () => {
    return (
        // <div className='service-container'>
        //     <div className='grid grid-three-column'>
        //         <div className='service-1'>
        //             <div>
        //                 <TbTruckDelivery className='faicons' />
        //                 <h3>Super fast and free delivery.</h3>
        //             </div>
        //         </div>
        //         <div className='service-2'>
        //             <div className='service-column-2'>
        //                 <div>
        //                     <MdSecurity className='faicons' />
        //                     <h3>Non-contact shipping..</h3>
        //                 </div>
        //             </div>
        //             <div className='service-column-2'>
        //                 <div>
        //                     <GiReceiveMoney className='faicons' />
        //                     <h3>Money-back Guaranteed.</h3>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='service-3'>
        //       <div>
        //          <RiSecurePaymentLine className='faicons'/>
        //          <h3>Super Secure Payment System.</h3>
        //       </div>
        //    </div>
        //     </div>
        // </div>

        <div className='container service-container'>
            <div className='row grid grid-three-column'>
                <div className='col-md-4 service-1'>
                    <div>
                        <TbTruckDelivery className='faicons' />
                        <h3>Super fast and free delivery.</h3>
                    </div>
                </div>
                <div className='col-md-4 service-2'>
                    <div className='service-column-2'>
                        <div>
                            <MdSecurity className='faicons' />
                            <h3>Non-contact shipping.</h3>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 service-2'>
                    <div className='service-column-2'>
                        <div>
                            <GiReceiveMoney className='faicons' />
                            <h3>Money-back Guaranteed.</h3>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 service-3'>
                    <div>
                        <RiSecurePaymentLine className='faicons' />
                        <h3>Super Secure Payment System.</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Service