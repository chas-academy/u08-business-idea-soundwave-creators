// import React from 'react'

import { Link } from "react-router-dom";

function termsofservice() {
  return (
    <div className="mx-auto px-4 bg-primary p-10 shadow-secondary">
         <div className='max-w-2xl mx-auto p-10 mt-5 shadow-secondary rounded-lg'>
         <h2 className="text-2xl mb-6 text-secondary" > Music App Terms of Service</h2>

<p className="text-gray-600 mb-4">Effective Date: 2024.5.31</p>

<div className="mb-8">
  <h3 className="text-xl text-secondary mb-4">1. Acceptance of Terms</h3>
  <p className="text-gray-600">By using the Music App service ("Service"), you agree to be bound by these Terms, our Privacy Policy, and any additional terms and conditions that may apply to specific features of the Service.</p>
</div>

<div className="mb-8">
  <h3 className="text-xl text-secondary mb-4">2. Use of the Service</h3>
  <p className="text-gray-600">You must be at least 13 years old to use the Service. By using the Service, you represent and warrant that you are at least 13 years old.</p>
</div>

<div className="mb-8">
  <h3 className="text-xl text-secondary mb-4">3. User Accounts</h3>
  <p className="text-gray-600">In order to use certain features of the Service, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
</div>

<div className="mb-8">
  <h3 className="text-xl text-secondary mb-4">4. Intellectual Property</h3>
  <p className="text-gray-600">All content included in the Service, including but not limited to text, graphics, logos, icons, images, audio clips, and software, is the property of [Your Company Name] or its licensors and is protected by copyright, trademark, and other laws.</p>
</div>

<div className="mb-8">
  <h3 className="text-xl text-secondary mb-4">5. Prohibited Conduct</h3>
  <p className="text-gray-600">You agree not to use the Service for any unlawful purpose or in any way that violates these Terms. Prohibited conduct includes, but is not limited to, the following:</p>
  <ul className="text-gray-600">
    <li>Violating any applicable laws or regulations.</li>
    <li>Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation with a person or entity.</li>
    <li>Uploading, posting, transmitting, or otherwise making available any content that is harmful, threatening, abusive, harassing, defamatory, obscene, or otherwise objectionable.</li>
    <li>Interfering with or disrupting the operation of the Service or servers or networks connected to the Service.</li>
  </ul>
</div>

<div className="text-secondary mb-8">
  <h3 className="text-xl mb-4">6. Termination</h3>
  <p className="text-gray-600">We reserve the right to terminate or suspend your access to the Service at any time and for any reason without prior notice.</p>
</div>

<div className="text-secondary mb-8">
  <h3 className="text-xl mb-4">7. Changes to Terms</h3>
  <p className="text-gray-600">We may modify these Terms at any time, and such modifications will be effective immediately upon posting on the Service. Your continued use of the Service after any such modifications constitute your acceptance of the modified Terms.</p>
</div>

<div className="text-secondary mb-8">
  <h3 className="text-xl mb-4">8. Contact Us</h3>
  <p className="text-gray-600">If you have any questions about these Terms, please <Link to='/contactus' className="text-text hover:text-hover underline" >contact us</Link></p>
</div>
    </div>
</div>

  )
}

export default termsofservice;