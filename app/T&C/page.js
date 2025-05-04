import Padding from "@/components/padding";
import React from "react";

const Page = () => {
  return (
    <Padding className={"py-[5rem] text-[#79797B] lg:flex gap-4 font-medium"}>
      <Padding className="border xl:w-[20%] border-[#E7EBED] rounded-[1.2rem] hidden xl:flex flex-col py-[3rem] font-monserrat">
        <div className="text-[1.1rem]  text-[black] font-semibold">
          On this page
        </div>
        <div className="pt-[2.5rem] space-y-8 text-[15px] ">
          <div className="text-[#232323]">Acceptance of Terms</div>
          <div className="text-[#232323]">Intellectual Property</div>
          <div className="text-[#232323]">Product Information</div>
          <div className="text-[#232323]">Regulatory Compliance</div>
          <div className="text-[#232323]">Limitation of Liability</div>
          <div className="text-[#232323]">Indemnification</div>
          <div className="text-[#232323]">Governing Law</div>
          <div className="text-[#232323]">Changes to Terms</div>
          <div className="text-[#232323]">Contact Information</div>
        </div>
      </Padding>
      <Padding className="border xl:w-[80%] border-[#E7EBED] rounded-[1.2rem] py-[2rem] font-monserrat">
        <div className="text-[1.6rem] md:text-[2rem] text-[black] font-semibold">
          Term of Use
        </div>
        <div className="pt-5 space-y-7">
          <div className=" space-y-3">
            <div className="text-[#232323]">Acceptance of Terms</div>
            <div>
              By accessing and using Wildcure Pharma's website and services, you
              agree to be bound by these Terms of Use. If you do not agree with
              any part of these terms, you may not access our website or use our
              services.
            </div>
          </div>
          <div className=" space-y-3">
            <div className="text-[#232323]">Intellectual Property</div>
            <div>
              All content on our website, including but not limited to text,
              graphics, logos, images, and software, is the property of Wildcure
              Pharma and is protected by intellectual property laws. You may not
              use, reproduce, or distribute any content without our prior
              written permission.
            </div>
          </div>
          <div className=" space-y-3">
            <div className="text-[#232323]">Product Information</div>
            <div>
              While we strive to provide accurate and up-to-date information
              about our pharmaceutical ingredients, we do not warrant that
              product descriptions or other content is error-free. All products
              must be used in accordance with applicable regulations and
              guidelines.
            </div>
          </div>
          <div className=" space-y-3">
            <div className="text-[#232323]">Regulatory Compliance</div>
            <div>
              As a pharmaceutical ingredient supplier, we comply with all
              relevant laws and regulations. Users of our products must ensure
              they have appropriate licenses and permissions to import, handle,
              and use our pharmaceutical ingredients in their jurisdiction.
            </div>
          </div>
          <div className=" space-y-3">
            <div className="text-[#232323]">Limitation of Liability</div>
            <div>
              Wildcure Pharma shall not be liable for any direct, indirect,
              incidental, consequential, or punitive damages arising from your
              use or inability to use our website or products, even if we have
              been advised of the possibility of such damages.
            </div>
          </div>
          <div className=" space-y-3">
            <div className="text-[#232323]">Indemnification</div>
            <div>
              You agree to indemnify and hold harmless Wildcure Pharma, its
              officers, directors, employees, and agents from any claims,
              damages, liabilities, costs, or expenses arising from your
              violation of these Terms of Use.
            </div>
          </div>
          <div className=" space-y-3">
            <div className="text-[#232323]">Governing Law</div>
            <div>
              These Terms of Use shall be governed by and construed in
              accordance with the laws of India, without regard to its conflict
              of law principles. Any disputes shall be resolved in the courts of
              Hyderabad, India.
            </div>
          </div>
          <div className=" space-y-3">
            <div className="text-[#232323]">Changes to Terms</div>
            <div>
              Wildcure Pharma reserves the right to modify these Terms of Use at
              any time. We will notify users of any significant changes by
              posting an update on our website.
            </div>
          </div>
          <div className=" space-y-3">
            <div className="text-[#232323]">Third-Party Disclosure</div>
            <div>We may share your information with:</div>
            <ul className="  space-y-2">
              <li>Wildcure Pharma</li>
              <li>6-26, plot no 78, road no 1,</li>
              <li>sai aishwarya layout, peerzadiguda,</li>
              <li>medchal-malkajgiri, Telangana 500039</li>
            </ul>
          </div>
          <div className="text-[#232323]">
            Email: privacy@wildcurepharma.com
          </div>
        </div>
      </Padding>
    </Padding>
  );
};

export default Page;
