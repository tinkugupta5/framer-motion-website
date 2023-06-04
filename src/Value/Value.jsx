import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from '../utils/accordion'
import { MdOutlineArrowDropDown } from "react-icons/md";
const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we Give to You</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.{" "}
            <br />
            We beleive a good blace to live can make your life better
          </span>

          <Accordion
            className="accordion-container"
            allowMultipleExpanded={false}
            preExpanded={[0]}>
                {
                    data.map((item,i)=>{
                        return(
                            <AccordionItem className="accordionItem">
                                <AccordionItemHeading></AccordionItemHeading>
                            </AccordionItem>
                            // 1:27:38
                        )
                    })
                }
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
