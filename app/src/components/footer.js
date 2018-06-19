import React from 'react';
import './footer.css'

export default class Footer extends React.Component {
    render() {
        return ( 
           <div className="footer fixed-bottom pt-3">
               <div className="row">
                   <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="col-6 offset-md-4">
                        <p>Copyright</p>
                    </div>
                    <div className="col-6 offset-md-4">
                         <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
                    </div>
                   </div>
               </div>
           </div>
        );
    }
}