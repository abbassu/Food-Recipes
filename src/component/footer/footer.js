import React from "react";
import "./foot.css"
function Footer(){
    return(

        <div className="parentfoot">
        <div className="footer">
            <div>
                <div className="title_foot">
                    © 2021 ChopChop Family. <br />
                    Lovingly crafted by Bear & Roo.
                </div>
            </div>
            <div>
                <div className="title_foot">
                    FOLLOW US ON SOCIAL MEDIA
                </div>
                <div className="iconinfoot">
                <i class="fa-brands fa-facebook fa-2x"></i>
                <i class="fa-brands fa-twitter fa-2x"></i>
                <i class="fa-brands fa-youtube fa-2x"></i>
                <i class="fa-brands fa-instagram fa-2x"></i>
                </div>
            </div>
            <div>
                <div className="title_foot">
                CONTACT US
                </div  >
                <div className="textinfoot">
                    INFO@CHOPCHOPFAMILY.ORG <br />
                    617.924.3993 <br />
                    841 WORCESTER ST #332 <br />
                    NATICK, MA 01760 <br />
                    SALLYSAMPSON.COM <br />
                </div>

                </div>
        </div>
        </div>

    )
}
export default Footer