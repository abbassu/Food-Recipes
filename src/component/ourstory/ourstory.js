import React from "react";
import { useState } from "react";
import "./ourstory.css"
function Our_Story(){
    const [THE_CHOPCHOP_TEAM,set_the]=useState(["Adam Ried, Contributor",
    "Carl Tremblay, Photographer"
    ,"Catherine Newman, Editor, ChopChop"
    ,"Catrine Kelty, Food Stylist"
    ,"Claudia Trevino Retanta, Translator"
    ,"Evilee Ebb, Business Development Director"
    ,"Heidi Broadley, Publishing Director"
    ,"Joy Howard, Food Stylist"
    ,"Karen Wise, Copy Editor"
    ,"Rebecca Robinson, Book Reviewer"
    ,"Sally Sampson, Founder and President"
    ,"Theresa Brosnan-Johnson, Accountant"
    ,"Vayu Maini Rekdal, Science Contributor"

])

    const [BOARD_OF_DIRECTORS,set_board]=useState(["Andrew Steinberg, Chairman/CEO, Modern Travel, New York, NY",
    "Ana Sortun, Chef/Restaurant Owner, Boston, MA"
    ,"Heather Grimmett, Independent Advisor, Wayland, MA"
    ,"Michael Smith, Attorney, Sherborn, MA"
    ,"Sally Sampson, Founder, ChopChop Family, Belmont, MA"
    ,"Shikha Anand, Chief Medical Officer, Aetna"
])

const [im,setim]=useState([
    "q1.jpg",
    "q2.jpg",
    "q3.jpg",
    "q4.jpg",
    "q5.jpg",
    "q6.jpg",
    "q7.jpg",
    "q8.jpg",
    "q9.jpg",
    "q11.jpg",
    "q12.jpg",
    "q13.jpg",
    "q14.jpg",
    "q15.jpg",
    "q16.jpg",
    "q17.jpg",
    "q18.jpg",
    "q19.jpg",
    "q20.jpg",
    "q21.jpg",
])


    return(
        <div>
            <div className="first_slide">
                OUR STORY
            </div>
            <div className="second">
                <div className="">
                    <span  className="title1">
                        WHO WE ARE
                    </span>
                    <div className="textinsec">
                    Founded in 2010 by Sally Sampson, ChopChop Family is a national nonprofit organization. Endorsed by the American
                     Academy of Pediatrics and winner of the prestigious James Beard Foundation Award for Publication of the Year, ChopChop
                      Family includes a diverse and inclusive collection of products for children, parents, and older adults. In addition to magazines
                       and cookbooks, the ChopChop Family brand includes the Eatable Alphabet, digital content, and cooking curricula, reaching 
                       over three million families worldwide.
                    </div>
                </div>
            </div>
            <div className="allimage">
                <div className="have_image">
                    <img src="./image/p5.jpg" alt="" className="image1" />
                </div>
            </div>

            <div className="third">
                <div className="mission">
                    OUR MISSON
                </div>
                <div className="textinmission">
                TO INSPIRE AND TEACH FAMILIES TO COOK AND EAT REAL FOOD TOGETHER
                </div>
            </div>

            <div className="meet">
                <div className="title2">
                IN GOOD COMPANY
                </div>
                <div className="list_company">
                    <div className="block1" >
                        <span className="l1">
                        THE CHOPCHOP TEAM
                        </span> 
                        <div className="l2">
                        {THE_CHOPCHOP_TEAM.map((element)=>{
                            return(
                                <div >
                                    {element}
                                </div>
                            )
                        })}
                    </div>
                    </div>
                    <div className="block1">
                        <span className="l1">
                        BOARD OF DIRECTORS
                        </span> 
                        <div className="l2">
                        {BOARD_OF_DIRECTORS.map((element)=>{
                            return(
                                <div >
                                    {element}
                                </div>
                            )
                        })}
                    </div>
                    </div>
                </div>
            </div>



            <div className="logo">
                {im.map((element)=>{
                    return(
                        <div >
                            <img src={`./image/${element}`} alt="" className="im_have_image" />
                        </div>
                    )
                })}
            </div>
            <div className="title2 hh">
            A HEALTHY TRACK RECORD
            </div>


            <div className="jaja">
                <div className="childjaja">
                Publication of the Year
                </div>
                <div className="childjaja">
                Children, Youth, and Family Cookbook Award
                </div>
                <div className="childjaja">
                7-time winner of the Parent’s Choice Gold Award
                </div>
                <div className="childjaja">
                Best Practice in Childhood Obesity
                </div>

            </div>   



        </div>
    )
}
export default Our_Story