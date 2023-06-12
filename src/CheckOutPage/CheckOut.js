import React, { useEffect } from "react";
import "./CheckOut.css";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { fnbCategory, fnbCombos } from "./FNBList";
import { useNavigate, useSearchParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector, useDispatch } from "react-redux";
const CheckOut = () => {
  const [smileText, setsmileText] = useState("Remove");
  const [subTotalSt, setsubTotal] = useState(0);
  const [totalAmtSt, settotalAmtSt] = useState(0);

  const [searchParams] = useSearchParams();
  //let seatCategory = searchParams.get("seatCategory");

   // ---------------redux----------------
   const dispatch = useDispatch();
   const state = useSelector(({ data }) => data);
    let finalseatArr= state.seatNosarr;
   let finalseatCount=finalseatArr.length;
 let ticketsPriceAlone=state.ticketsPriceAlone;
 let seatCategory=state.seatCategory;



  //let price = searchParams.get("price");
 let price = parseFloat(ticketsPriceAlone);
  // let seatNos = searchParams.get("seatNos");
  // let nOfTickets = seatNos.replace(/[0-9\,]/g, "");
  // nOfTickets = nOfTickets.length;
  let basePrice = Math.round(price * 0.1578);
  basePrice = parseFloat(basePrice);

  let gstPrice = parseFloat((basePrice * 0.18).toFixed(2));
  let convenFees = parseFloat((basePrice + gstPrice).toFixed(2));
  let subTotal = parseFloat((convenFees + price).toFixed(2));
  let smilePrice = parseFloat((finalseatCount * 1).toFixed(2));
  let totalAmount = parseFloat(subTotal + smilePrice);
  totalAmount = totalAmount.toFixed(2);
  //console.log(totalAmount);
  //console.log(convenFees);
  convenFees = convenFees.toFixed(2);
  basePrice = basePrice.toFixed(2);
  gstPrice = gstPrice.toFixed(2);
  subTotal = subTotal.toFixed(2);

  useEffect(() => {
    setsubTotal(subTotal);
    settotalAmtSt(totalAmount);
  }, []);

 

  const removeSmilePrice = () => {
    let add = "Add";
    let removeText = "Remove";
    if (smileText == removeText) {
      setsmileText(add);
      let tempTotal = parseFloat(totalAmtSt);
      let tt = tempTotal - smilePrice;
      tt = tt.toFixed(2);
      console.log(tempTotal, smilePrice, tt);
      settotalAmtSt(tt);
    } else {
      setsmileText(removeText);
      let tempTotal = parseFloat(totalAmtSt);
      let tt = tempTotal + smilePrice;
      tt = tt.toFixed(2);
      console.log(tempTotal, smilePrice, tt);
      settotalAmtSt(tt);
    }
  }
    //------------------------ razorpay-------------------
    var options = {
      "key": "rzp_test_n4Nqy4ZjoOIaMl", // Enter the Key ID generated from the Dashboard
      "amount": parseInt(totalAmtSt)*100,
      "currency": "INR",
      "description": "MJ Corp",
      "image": "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
      "prefill":
      {
        "email": "gaurav.kumar@example.com",
        "contact": +919900000000,
      },
      config: {
        display: {
          blocks: {
            utib: { //name for Axis block
              name: "Pay using Axis Bank",
              instruments: [
                {
                  method: "card",
                  issuers: ["UTIB"]
                },
                {
                  method: "netbanking",
                  banks: ["UTIB"]
                },
              ]
            },
            other: { //  name for other block
              name: "Other Payment modes",
              instruments: [
                {
                  method: 'upi',
                },
                {
                  method: "card",
                  issuers: ["ICIC"]
                },
                {
                  method: 'netbanking',
                },
                
              ]
            }
          },
        
          sequence: ["block.utib", "block.other"],
          preferences: {
            show_default_blocks: false // Should Checkout show its default blocks?
          }
        }
      },
      "handler": function (response) {
        alert(response.razorpay_payment_id);
      },
      "modal": {
        "ondismiss": function () {
          if (window.confirm("Are you sure, you want to close the form?")) {
            var txt = "You pressed OK!";
            console.log("Checkout form closed by the user");
          } else {
            txt = "You pressed Cancel!";
            console.log("Complete the Payment")
          }
        }
      }
    };
    var rzp1 = new window.Razorpay(options);
    const payviaRazor=(e)=>{
      rzp1.open();
    e.preventDefault();
    }
  return (
    <div>
      <div className="checkout-sec">
        <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
          <div className="checkout-row">
            <div className="snacks">
              <div className="snacks-banner">
                <img
                  src={
                    "https://assets-in.bmscdn.com/promotions/cms/creatives/1680241761377_web.jpg"
                  }
                />
              </div>
              <div className="fnb-container">
                <h2 className="fnb-title">
                  Grab a <span className="bite">bite!</span>
                  <br />
                  <span className="sub-title">
                    Now get your favorite snack at a
                    <span className="highlight-text"> discounted price!</span>
                  </span>
                </h2>

                <div className="fnb-category">
                  {fnbCategory.map((e) => {
                    return <span>{e.Catname}</span>;
                  })}
                </div>

                <div className="fnb-combos">
                  {fnbCombos.map((f) => {
                    return (
                      <div className="fnb-combos-box">
                        <div className="fnb-combos-div">
                          <div className="combo-img">
                            <img src={f.src} />
                          </div>
                          <div className="combo-rates">
                            <span className="amount">{f.rate}</span>
                            <span className="design"></span>
                          </div>
                          <div className="combo-details-row">
                            <div className="combo-details">
                              <p>{f.comboName}</p>
                              <p>{f.des}</p>
                            </div>
                            <div className="combo-add">
                              <button>ADD</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="booking-summary-col">
              <div className="booking-summary">
                <div className="booking-summary-box">
                  <h2>Booking Summary</h2>
                  <div className="checkout-ticket-details">
                    <div className="checkout-ticket">
                      <span className="checkout-seat-details">
                        {seatCategory} {finalseatArr.map((f)=>{return f})}
                        <br />({finalseatCount} Tickets)
                      </span>
                      <span className="checkout-seat-rate">Rs.{price}.00</span>
                    </div>
                    <div className="accordion">
                      <Accordion className="accordion-box">
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography className="conven-fees">
                            <span className="conven-fees-text">
                              Convenience fees
                            </span>
                            <span className="conven-fees-rate">
                              Rs. {convenFees}
                            </span>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails className="accordion-details">
                          <div className="base-amount">
                            <p className="base-amount-text">Base Amount</p>
                            <p className="base-amount-rate">Rs.{basePrice}</p>
                          </div>
                          <div className="gst-amount">
                            <p className="gst-amount-text">
                              Integrated GST (IGST) @ 18%
                            </p>
                            <p className="gst-amount-rate">Rs. {gstPrice}</p>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                    <div className="sub-total">
                      <p className="total-text">Sub total</p>
                      <p className="total-rate">Rs.{subTotalSt}</p>
                    </div>
                  </div>

                  <div className="bas-div">
                    <div className="bas-logo">
                      <img
                        src={
                          "https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?26082021190202"
                        }
                      />
                      <p>Contribution to BookASmile</p>
                      <div className="bas-price">
                        <p className="bas-price-rate">Rs. {smilePrice}</p>
                        <button
                          className="bas-add-btn"
                          onClick={removeSmilePrice}
                        >
                          {smileText}
                        </button>
                      </div>
                    </div>
                    <div className="bas-note">
                      (₹1 per ticket will be added)
                    </div>
                  </div>

                  <div className="amount-pay">
                    <p className="amount-pay-text">Amount Payable</p>
                    <p className="amount-pay-rate">Rs.{totalAmtSt}</p>
                  </div>
                </div>
              </div>
              <div className="ticket-type">
                <h2>Select Ticket Type</h2>
                <div className="ticket-type-div">
                  <div className="m-ticket-checkout">
                    <div className="ticket-radio">
                      <input type="radio" name="checkout-ticket" />
                    </div>
                    <div className="m-ticket-logo">
                      <i class="fa-solid fa-ticket"></i>
                      <span>M-Ticket</span>
                    </div>
                  </div>
                  <div className="office-pickup">
                    <div className="ticket-radio">
                      <input type="radio" name="checkout-ticket" />
                    </div>
                    <div className="office-pickup-logo">
                      <i class="fa-solid fa-store"></i>
                      <span>BoxOffice Pickup</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="proceed-to-pay" onClick={payviaRazor}>
                <p className="proceed-to-pay-amount">TOTAL: Rs.{totalAmtSt}</p>
                <p className="proceed-to-pay-text">Proceed</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CheckOut;
