import Padding from '@/components/padding'
import React from 'react'

const Page = () => {
  return (
    <Padding className={"pt-[5rem] text-[#79797B] lg:flex gap-4 font-medium"}>
      <Padding className='border xl:w-[20%] border-[#E7EBED] rounded-[1.2rem] hidden xl:flex flex-col py-[3rem] font-monserrat'>
      <div className='text-[1.1rem]  text-[black] font-semibold'>On this page</div>
      <div className='pt-[2.5rem] space-y-8 text-[15px] '>
      <div className='text-[#232323]'>Information We Collect</div>
      <div className='text-[#232323]'>Personal Information</div>
      <div className='text-[#232323]'>Usage Data</div>
      <div className='text-[#232323]'>Communications</div>
      <div className='text-[#232323]'>How We Use Your Information</div>
      <div className='text-[#232323]'>Data Protection</div>
      <div className='text-[#232323]'>Third-Party Disclosure</div>
      <div className='text-[#232323]'>Your Rights</div>
      <div className='text-[#232323]'>International Data Transfers</div>
        
      </div>
      </Padding>
      <Padding className='border xl:w-[80%] border-[#E7EBED] rounded-[1.2rem] py-[2rem] font-monserrat'>
      <div className='text-[1.6rem] md:text-[2rem] text-[black] font-semibold'>Privacy Policy</div>
      <div className='text-[#595959] pt-6'>At Wildcure Pharma, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in any way.</div>
      <div className='pt-5 space-y-7'>
        <div className=' space-y-3'>
            <div className='text-[#232323]'>Information We Collect</div>
            <div>We may collect information about you in various ways, including:</div>
        </div>
        <div className=' space-y-3'>
            <div className='text-[#232323]'>Personal Information</div>
            <div>Name, email address, phone number, company information, job title, and business address when you register, place an order, or contact us.</div>
        </div>
        <div className=' space-y-3'>
            <div className='text-[#232323]'>Usage Data</div>
            <div>Information about how you access and use our website, including IP address, browser type, device information, pages visited, and time spent on our site.</div>
        </div>
        <div className=' space-y-3'>
            <div className='text-[#232323]'>Communications</div>
            <div>Records of correspondence when you contact us, including inquiries about our products and services.</div>
        </div>
        <div className=' space-y-3'>
            <div className='text-[#232323]'>How We Use Your Information</div>
            <div>We use the information we collect to: </div>
            <ul className=' pl-[20px] space-y-2' style={{"list-style-type": "disc"}}>
              <li>Process and fulfill your orders</li>
              <li>Provide customer support</li>
              <li>Send you important updates about our products, services, and company</li>
              <li>Improve our website and services</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
        </div>
        <div className=' space-y-3'>
            <div className='text-[#232323]'>Data Protection</div>
            <div>Wildcure Pharma implements appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. As a pharmaceutical company, we understand the sensitive nature of information in our industry and maintain stringent data protection protocols. </div>
        </div>
        <div className=' space-y-3'>
            <div className='text-[#232323]'>Third-Party Disclosure</div>
            <div>We may share your information with:</div>
            <ul className=' pl-[20px] space-y-2' style={{"list-style-type": "disc"}}>
              <li>Service providers who assist us in operating our business</li>
              <li>Regulatory authorities when required by law</li>
              <li>Business partners with your consent</li>
              <li>In the event of a merger, acquisition, or sale of company assets</li>
            </ul>
        </div>
        <div className=' space-y-3'>
            <div className='text-[#232323]'>Your Rights</div>
            <div>You have the right to:</div>
            <ul className=' pl-[20px] space-y-2' style={{"list-style-type": "disc"}}>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data where appropriate</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
        </div>
        <div className=' space-y-3'>
            <div className='text-[#232323]'>International Data Transfers</div>
            <div>As a global company based in Hyderabad, India, we may transfer your information to countries outside your home country. We ensure appropriate safeguards are in place to protect your information regardless of location. </div>
        </div>
      </div>
      </Padding>
    </Padding>
  )
}

export default Page
