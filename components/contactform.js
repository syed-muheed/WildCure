"use client";
import Downarrow from "@/public/icons/downarrow";
import { useParams, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Contactform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [codeobj, setCodeObject] = useState({ country: "India", code: "+91" });
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [enquiry, setEnuiry] = useState("");
  const [country, setcountry] = useState("");

  const params = useSearchParams();

  const msg = params.get("msg") || "";
  const [message, setMessage] = useState(msg);

  const countryCallingCodes = [
    { country: "Afghanistan", code: "+93" },
    { country: "Albania", code: "+355" },
    { country: "Algeria", code: "+213" },
    { country: "American Samoa", code: "+1-684" },
    { country: "Andorra", code: "+376" },
    { country: "Angola", code: "+244" },
    { country: "Anguilla", code: "+1-264" },
    { country: "Antarctica", code: "+672" },
    { country: "Antigua and Barbuda", code: "+1-268" },
    { country: "Argentina", code: "+54" },
    { country: "Armenia", code: "+374" },
    { country: "Aruba", code: "+297" },
    { country: "Australia", code: "+61" },
    { country: "Austria", code: "+43" },
    { country: "Azerbaijan", code: "+994" },
    { country: "Bahamas", code: "+1-242" },
    { country: "Bahrain", code: "+973" },
    { country: "Bangladesh", code: "+880" },
    { country: "Barbados", code: "+1-246" },
    { country: "Belarus", code: "+375" },
    { country: "Belgium", code: "+32" },
    { country: "Belize", code: "+501" },
    { country: "Benin", code: "+229" },
    { country: "Bermuda", code: "+1-441" },
    { country: "Bhutan", code: "+975" },
    { country: "Bolivia", code: "+591" },
    { country: "Bosnia and Herzegovina", code: "+387" },
    { country: "Botswana", code: "+267" },
    { country: "Brazil", code: "+55" },
    { country: "British Indian Ocean Territory", code: "+246" },
    { country: "British Virgin Islands", code: "+1-284" },
    { country: "Brunei", code: "+673" },
    { country: "Bulgaria", code: "+359" },
    { country: "Burkina Faso", code: "+226" },
    { country: "Burundi", code: "+257" },
    { country: "Cambodia", code: "+855" },
    { country: "Cameroon", code: "+237" },
    { country: "Canada", code: "+1" },
    { country: "Cape Verde", code: "+238" },
    { country: "Cayman Islands", code: "+1-345" },
    { country: "Central African Republic", code: "+236" },
    { country: "Chad", code: "+235" },
    { country: "Chile", code: "+56" },
    { country: "China", code: "+86" },
    { country: "Christmas Island", code: "+61" },
    { country: "Cocos Islands", code: "+61" },
    { country: "Colombia", code: "+57" },
    { country: "Comoros", code: "+269" },
    { country: "Cook Islands", code: "+682" },
    { country: "Costa Rica", code: "+506" },
    { country: "Croatia", code: "+385" },
    { country: "Cuba", code: "+53" },
    { country: "Curacao", code: "+599" },
    { country: "Cyprus", code: "+357" },
    { country: "Czech Republic", code: "+420" },
    { country: "Democratic Republic of the Congo", code: "+243" },
    { country: "Denmark", code: "+45" },
    { country: "Djibouti", code: "+253" },
    { country: "Dominica", code: "+1-767" },
    { country: "Dominican Republic", code: "+1-809, +1-829, +1-849" },
    { country: "East Timor", code: "+670" },
    { country: "Ecuador", code: "+593" },
    { country: "Egypt", code: "+20" },
    { country: "El Salvador", code: "+503" },
    { country: "Equatorial Guinea", code: "+240" },
    { country: "Eritrea", code: "+291" },
    { country: "Estonia", code: "+372" },
    { country: "Ethiopia", code: "+251" },
    { country: "Falkland Islands", code: "+500" },
    { country: "Faroe Islands", code: "+298" },
    { country: "Fiji", code: "+679" },
    { country: "Finland", code: "+358" },
    { country: "France", code: "+33" },
    { country: "French Polynesia", code: "+689" },
    { country: "Gabon", code: "+241" },
    { country: "Gambia", code: "+220" },
    { country: "Georgia", code: "+995" },
    { country: "Germany", code: "+49" },
    { country: "Ghana", code: "+233" },
    { country: "Gibraltar", code: "+350" },
    { country: "Greece", code: "+30" },
    { country: "Greenland", code: "+299" },
    { country: "Grenada", code: "+1-473" },
    { country: "Guam", code: "+1-671" },
    { country: "Guatemala", code: "+502" },
    { country: "Guernsey", code: "+44-1481" },
    { country: "Guinea", code: "+224" },
    { country: "Guinea-Bissau", code: "+245" },
    { country: "Guyana", code: "+592" },
    { country: "Haiti", code: "+509" },
    { country: "Honduras", code: "+504" },
    { country: "Hong Kong", code: "+852" },
    { country: "Hungary", code: "+36" },
    { country: "Iceland", code: "+354" },
    { country: "India", code: "+91" },
    { country: "Indonesia", code: "+62" },
    { country: "Iran", code: "+98" },
    { country: "Iraq", code: "+964" },
    { country: "Ireland", code: "+353" },
    { country: "Isle of Man", code: "+44-1624" },
    { country: "Israel", code: "+972" },
    { country: "Italy", code: "+39" },
    { country: "Ivory Coast", code: "+225" },
    { country: "Jamaica", code: "+1-876" },
    { country: "Japan", code: "+81" },
    { country: "Jersey", code: "+44-1534" },
    { country: "Jordan", code: "+962" },
    { country: "Kazakhstan", code: "+7" },
    { country: "Kenya", code: "+254" },
    { country: "Kiribati", code: "+686" },
    { country: "Kosovo", code: "+383" },
    { country: "Kuwait", code: "+965" },
    { country: "Kyrgyzstan", code: "+996" },
    { country: "Laos", code: "+856" },
    { country: "Latvia", code: "+371" },
    { country: "Lebanon", code: "+961" },
    { country: "Lesotho", code: "+266" },
    { country: "Liberia", code: "+231" },
    { country: "Libya", code: "+218" },
    { country: "Liechtenstein", code: "+423" },
    { country: "Lithuania", code: "+370" },
    { country: "Luxembourg", code: "+352" },
    { country: "Macau", code: "+853" },
    { country: "Macedonia", code: "+389" },
    { country: "Madagascar", code: "+261" },
    { country: "Malawi", code: "+265" },
    { country: "Malaysia", code: "+60" },
    { country: "Maldives", code: "+960" },
    { country: "Mali", code: "+223" },
    { country: "Malta", code: "+356" },
    { country: "Marshall Islands", code: "+692" },
    { country: "Mauritania", code: "+222" },
    { country: "Mauritius", code: "+230" },
    { country: "Mayotte", code: "+262" },
    { country: "Mexico", code: "+52" },
    { country: "Micronesia", code: "+691" },
    { country: "Moldova", code: "+373" },
    { country: "Monaco", code: "+377" },
    { country: "Mongolia", code: "+976" },
    { country: "Montenegro", code: "+382" },
    { country: "Montserrat", code: "+1-664" },
    { country: "Morocco", code: "+212" },
    { country: "Mozambique", code: "+258" },
    { country: "Myanmar", code: "+95" },
    { country: "Namibia", code: "+264" },
    { country: "Nauru", code: "+674" },
    { country: "Nepal", code: "+977" },
    { country: "Netherlands", code: "+31" },
    { country: "Netherlands Antilles", code: "+599" },
    { country: "New Caledonia", code: "+687" },
    { country: "New Zealand", code: "+64" },
    { country: "Nicaragua", code: "+505" },
    { country: "Niger", code: "+227" },
    { country: "Nigeria", code: "+234" },
    { country: "Niue", code: "+683" },
    { country: "North Korea", code: "+850" },
    { country: "Northern Mariana Islands", code: "+1-670" },
    { country: "Norway", code: "+47" },
    { country: "Oman", code: "+968" },
    { country: "Pakistan", code: "+92" },
    { country: "Palau", code: "+680" },
    { country: "Palestine", code: "+970" },
    { country: "Panama", code: "+507" },
    { country: "Papua New Guinea", code: "+675" },
    { country: "Paraguay", code: "+595" },
    { country: "Peru", code: "+51" },
    { country: "Philippines", code: "+63" },
    { country: "Pitcairn", code: "+64" },
    { country: "Poland", code: "+48" },
    { country: "Portugal", code: "+351" },
    { country: "Puerto Rico", code: "+1-787, +1-939" },
    { country: "Qatar", code: "+974" },
    { country: "Republic of the Congo", code: "+242" },
    { country: "Reunion", code: "+262" },
    { country: "Romania", code: "+40" },
    { country: "Russia", code: "+7" },
    { country: "Rwanda", code: "+250" },
    { country: "Saint Barthelemy", code: "+590" },
    { country: "Saint Helena", code: "+290" },
    { country: "Saint Kitts and Nevis", code: "+1-869" },
    { country: "Saint Lucia", code: "+1-758" },
    { country: "Saint Martin", code: "+590" },
    { country: "Saint Pierre and Miquelon", code: "+508" },
    { country: "Saint Vincent and the Grenadines", code: "+1-784" },
    { country: "Samoa", code: "+685" },
    { country: "San Marino", code: "+378" },
    { country: "Sao Tome and Principe", code: "+239" },
    { country: "Saudi Arabia", code: "+966" },
    { country: "Senegal", code: "+221" },
    { country: "Serbia", code: "+381" },
    { country: "Seychelles", code: "+248" },
    { country: "Sierra Leone", code: "+232" },
    { country: "Singapore", code: "+65" },
    { country: "Sint Maarten", code: "+1-721" },
    { country: "Slovakia", code: "+421" },
    { country: "Slovenia", code: "+386" },
    { country: "Solomon Islands", code: "+677" },
    { country: "Somalia", code: "+252" },
    { country: "South Africa", code: "+27" },
    { country: "South Korea", code: "+82" },
    { country: "South Sudan", code: "+211" },
    { country: "Spain", code: "+34" },
    { country: "Sri Lanka", code: "+94" },
    { country: "Sudan", code: "+249" },
    { country: "Suriname", code: "+597" },
    { country: "Svalbard and Jan Mayen", code: "+47" },
    { country: "Swaziland", code: "+268" },
    { country: "Sweden", code: "+46" },
    { country: "Switzerland", code: "+41" },
    { country: "Syria", code: "+963" },
    { country: "Taiwan", code: "+886" },
    { country: "Tajikistan", code: "+992" },
    { country: "Tanzania", code: "+255" },
    { country: "Thailand", code: "+66" },
    { country: "Togo", code: "+228" },
    { country: "Tokelau", code: "+690" },
    { country: "Tonga", code: "+676" },
    { country: "Trinidad and Tobago", code: "+1-868" },
    { country: "Tunisia", code: "+216" },
    { country: "Turkey", code: "+90" },
    { country: "Turkmenistan", code: "+993" },
    { country: "Turks and Caicos Islands", code: "+1-649" },
    { country: "Tuvalu", code: "+688" },
    { country: "U.S. Virgin Islands", code: "+1-340" },
    { country: "Uganda", code: "+256" },
    { country: "Ukraine", code: "+380" },
    { country: "United Arab Emirates", code: "+971" },
    { country: "United Kingdom", code: "+44" },
    { country: "United States", code: "+1" },
    { country: "Uruguay", code: "+598" },
    { country: "Uzbekistan", code: "+998" },
    { country: "Vanuatu", code: "+678" },
    { country: "Vatican", code: "+379" },
    { country: "Venezuela", code: "+58" },
    { country: "Vietnam", code: "+84" },
    { country: "Wallis and Futuna", code: "+681" },
    { country: "Western Sahara", code: "+212" },
    { country: "Yemen", code: "+967" },
    { country: "Zambia", code: "+260" },
    { country: "Zimbabwe", code: "+263" },
  ];

  const inquiryTypeOptions = [
    "General Inquiry",
    "Product Information",
    "Pricing & Quotation",
    "Partnership Opportunities",
    "Technical Support",
  ];

const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      company: company,
      name: name,
      number: number,
      email: email,
      country: country,
      enquiry: enquiry,
      message: message
    })
  }).then(res => res.json())
    .then(data => {
      if (data.success) alert('Email sent!')
      else alert('Email failed.')
    })
}


  return (
    <div className=" flex flex-col gap-3 w-full md:w-fit ">
      <div className=" flex flex-col md:flex-row gap-3 md:gap-6 ">
        <div className=" flex flex-col gap-1 ">
          <div className=" text-[#626366] font-helvetica font-medium text-[16px] relative left-1  ">
            Name{" "}
          </div>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Name"
            type="text"
            className=" outline-none border-[1px] border-[#DEE3EE] placeholder:text-[#929296] font-helvetica  min-w-[222px] py-3 pl-4 rounded-xl  "
          />
        </div>
        <div className=" flex flex-col gap-1 ">
          <div className=" text-[#626366] font-helvetica font-medium text-[16px] relative left-1  ">
            Email{" "}
          </div>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Email"
            type="text"
            className=" outline-none border-[1px] border-[#DEE3EE] placeholder:text-[#929296] font-helvetica  min-w-[222px] py-3 pl-4 rounded-xl  "
          />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-3 md:gap-6 ">
        <div className=" flex flex-col gap-1 ">
          <div className=" text-[#626366] font-helvetica font-medium text-[16px] relative left-1  ">
            Company{" "}
          </div>
          <input
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            placeholder="Enter Company"
            type="text"
            className=" outline-none border-[1px] border-[#DEE3EE] placeholder:text-[#929296] font-helvetica  min-w-[222px] py-3 pl-4 rounded-xl  "
          />
        </div>
        <div className=" flex flex-col gap-1 ">
          <div className=" text-[#626366] font-helvetica font-medium text-[16px] relative left-1  ">
            Phone Number{" "}
          </div>
          <div
            className=" flex items-center border-[1px] border-[#DEE3EE]  w-full md:w-[222px]  pl-2 rounded-xl relative "
            onClick={() => {
              setOpen(!open);
            }}
            onMouseLeave={() => {
              setOpen(false);
            }}
          >
            <div className=" min-w-fit border-r-[1px] pr-1 py-3  text-[#929296] flex items-center cursor-pointer gap-[2px] ">
              <div>{codeobj?.country ? `${codeobj?.code}` : "00"}</div>
              <div className=" scale-90 ">
                <Downarrow />
              </div>
            </div>
            <input
              onChange={(e) => {
                if (number.length < 10) {
                  setNumber(e.target.value);
                }
              }}
              placeholder="Enter Phone"
              type="number"
              className=" no-spinners outline-none w-full rounded-2xl py-3 pl-2 placeholder:text-[#929296] font-helvetica   "
            />
            {open && (
              <div className=" absolute z-[2] left-0 top-[49px] bg-white border-[#DEE3EE] border-[1px] px-1 py-2 rounded-xl w-full h-[200px] overflow-y-scroll text-[#929296] flex flex-col gap-2 ">
                {countryCallingCodes.map((item, index) => (
                  <div
                    key={index}
                    className=" text-[14px] font-helvetica flex items-center gap-2 hover:bg-gray-100 duration-150 cursor-pointer px-1 rounded-md "
                    onClick={() => {
                      setCodeObject(item);
                      setcountry(item.country)
                    }}
                  >
                    <span className=" w-[50px] ">{item.code}</span>
                    <span>{item.country}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-3 md:gap-6 ">
        <div className=" flex flex-col gap-1 ">
          <div className=" text-[#626366] font-helvetica font-medium text-[16px] relative left-1  ">
            Country{" "}
          </div>
          <div
            className=" flex items-center border-[1px] border-[#DEE3EE] w-full  md:w-[222px]  pl-2 rounded-xl relative "
            onClick={() => {
              setOpen2(!open2);
            }}
            onMouseLeave={() => {
              setOpen2(false);
            }}
          >
            <div className=" w-full px-2 py-3  text-[#929296] flex items-center justify-between cursor-pointer gap-[2px] ">
              <div>
                {codeobj?.country ? `${codeobj?.country}` : "Select Country"}
              </div>
              <Downarrow />
            </div>

            {open2 && (
              <div className=" absolute z-[2] left-0 top-[49px] bg-white border-[#DEE3EE] border-[1px] px-1 py-2 rounded-xl w-full h-[200px] overflow-y-scroll text-[#929296] flex flex-col gap-2 ">
                {countryCallingCodes.map((item, index) => (
                  <div
                    key={index}
                    className=" text-[14px] font-helvetica flex items-center gap-2 hover:bg-gray-100 duration-150 cursor-pointer px-1 rounded-md "
                    onClick={() => {
                      setCodeObject(item);
                      setcountry(item.country)
                    }}
                  >
                    <span>{item.country}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className=" flex flex-col max-[768px]:w-full gap-1 ">
          <div className=" text-[#626366] font-helvetica font-medium text-[16px] relative left-1  ">
            Inquiry Type{" "}
          </div>
          <div
            className=" w-full flex items-center border-[1px] border-[#DEE3EE]  md:w-[222px]  pl-2 rounded-xl relative "
            onClick={() => {
              setOpen3(!open3);
            }}
            onMouseLeave={() => {
              setOpen3(false);
            }}
          >
            <div className=" w-full px-2 py-3  text-[#929296] flex items-center justify-between cursor-pointer gap-[2px] ">
              <div>{enquiry || "Select Inquiry"}</div>
              <Downarrow />
            </div>

            {open3 && (
              <div className=" absolute z-[2] left-0 top-[49px] bg-white border-[#DEE3EE] border-[1px] px-1 py-2 rounded-xl w-full text-[#929296] flex flex-col gap-2 ">
                {inquiryTypeOptions.map((item, index) => (
                  <div
                    key={index}
                    className=" text-[14px] font-helvetica flex items-center gap-2 hover:bg-gray-100 duration-150 cursor-pointer px-1 rounded-md "
                    onClick={() => {
                      setEnuiry(item);
                    }}
                  >
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-1 w-full ">
        <div className=" text-[#626366] font-helvetica font-medium text-[16px] relative left-1  ">
          Message
        </div>
        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          placeholder="Enter Message"
          type="text"
          className=" outline-none h-[130px] border-[1px] border-[#DEE3EE] placeholder:text-[#929296] font-helvetica  min-w-full py-3 pl-4 rounded-xl resize-none  "
        />
      </div>
      <div onClick={(e)=> handleSubmit(e)} className=" py-4 cursor-pointer leading-[1] bg-figblue text-white w-full rounded-full font-helvetica text-[16px] font-medium flex items-center justify-center  ">
        Submit
      </div>
    </div>
  );
};

export default Contactform;
