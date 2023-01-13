import React from "react";
import { GlobalContext } from "../utils/utils";
import { useContext } from "react";
import "./jojo.css"
function Journal(){
    const auth=useContext(GlobalContext).api
    return(
        <div>
            <div className="first_slide1">
            NOURISHING FAMILIES
            <div className="tt22">
            ou're never too young -or too old- to learn how to cook. Here at ChopChop Family, we believe that cooking is life’s most important skill. Cooking helps create healthy minds and bodies, great memories, and nourished families.
            </div>
            </div>

            <div className="second">
                <div className="">
                    <span  className="title1">
                    FROM FUN TO FORK...
                    </span>
                    <div className="textinsec jjj">
                    Founded in 2010 by Sally Sampson, ChopChop Family is a national nonprofit organization. Endorsed by the American
                     Academy of Pediatrics and winner of the prestigious James Beard Foundation Award for Publication of the Year, ChopChop
                      Family includes a diverse and inclusive collection of products for children, parents, and older adults. In addition to magazines
                       and cookbooks, the ChopChop Family brand includes the Eatable Alphabet, digital content, and cooking curricula, reaching 
                       over three million families worldwide.
                    </div>
                </div>
            </div>

            <div className="textandimg">
                <div className="opop">
                </div>
                <div className="opertaiontext">
                    <div className="p9">
                    CHOPCHOP THE
                FUN COOKING MAGAZINE FOR FAMILIES
                    </div>
                <div className="ll12">
                Award-winning publication filled with delicious recipes, essential how-tos, STEAM activities, 
                fun food facts, interactive games, and more.
                </div>
                </div>
            </div>




            <div className="textandimg2">
                
                <div className="opertaiontext">
                    <div className="p9">
                    DISCOVER EATABLE ALPHABET
                    </div>
                <div className="ll12">
                Developed by ChopChop Family in partnership with the American Academy of Pediatrics Institute for Healthy Childhood Weight, and with funding from the CDC,
                 Eatable Alphabet™ teaches kids aged 2–6 that cooking real food is fun.
               </div>
                </div>
                <div className="opop2">
                </div>
            </div>
        </div>
    )
}

export default Journal