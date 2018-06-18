import React from 'react';
import './footer.css'
export default class Footer extends React.Component {
    render() {
        return ( 
           <div class="footer fixed-bottom pt-3">
               <row>
                   <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div>
                        <p class>Copyright</p>
                    </div>
                   </div>
               </row>
           </div>
        );
    }
}