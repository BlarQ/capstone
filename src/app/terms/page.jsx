import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col-reverse sm:flex-row justify-center items-start px-4 sm:px-10 text-[#2e4053] sm:space-x-4 sm:py-8 py-4 gap-y-10 sm:gap-y-0'>
      <div className='sm:w-1/2 text-xl'>
        <dl className='space-y-6 text-justify'> 
          <h1 className='sm:text-left text-center text-3xl font-bold font-sans'>TERMS & CONDITIONS</h1>
          <dt className='text-2xl font-bold'>1. Acceptance of Terms</dt>
            <dd>By using the TrendLuxe website, you agree to be bound by these terms and conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you must not use our website.</dd>
          
          <dt className='text-2xl font-bold'>2. Changes to Terms</dt>
            <dd>TrendLuxe reserves the right to modify these terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of the site following the posting of changes constitutes your acceptance of such changes.</dd>
          
          <dt className='text-2xl font-bold'>3. Privacy Policy</dt>
            <dd>Your use of our website is also governed by our Privacy Policy, which is incorporated into these terms by this reference. Please review our Privacy Policy to understand our practices regarding your personal information.</dd>
          
          <dt className='text-2xl font-bold'>4. Use of the Site</dt>
            <dd>You agree to use the TrendLuxe website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.</dd>
          
          <dt className='text-2xl font-bold'>5. Product Information and Availability </dt>
          <dd>We strive to display accurate product information, including descriptions, pricing, and availability. However, we do not guarantee that the information will be error-free, complete, or current. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.</dd>
         

          <dt className='text-2xl font-bold'>6. Orders and Payments</dt>
            <dd>All orders are subject to acceptance and availability. We reserve the right to refuse any order for any reason. By placing an order, you represent that the products ordered will be used only in a lawful manner. Payment must be made at the time of placing an order. We accept various payment methods, which are detailed on our website.</dd>
          
          <dt className='text-2xl font-bold'>7. Shipping and Delivery</dt>
            <dd>We aim to process and ship orders promptly. Delivery times are estimates and not guaranteed. TrendLuxe is not responsible for delays caused by shipping carriers or unforeseen circumstances. Please refer to our Shipping Information page for more details on shipping policies and rates.</dd>
          
          <dt className='text-2xl font-bold'>8. Returns and Exchanges</dt>
            <dd>If you are not satisfied with your purchase, you may return or exchange it within 30 days of receipt. Items must be unworn, unwashed, and in their original condition with all tags attached. Please refer to our Returns & Exchanges page for detailed instructions on how to return or exchange items.</dd>
          
          <dt className='text-2xl font-bold'>9. Intellectual Property</dt>
            <dd>All content on the TrendLuxe website, including text, graphics, logos, images, and software, is the property of TrendLuxe or its content suppliers and is protected by intellectual property laws. Unauthorized use of any content on the site is strictly prohibited.</dd>
          
          <dt className='text-2xl font-bold'>10. Limitation of Liability</dt>
            <dd>To the fullest extent permitted by law, TrendLuxe shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our website or the products purchased through our website.</dd>
          
          <dt className='text-2xl font-bold'>11. Indemnification</dt>
            <dd>You agree to indemnify, defend, and hold harmless TrendLuxe, its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys&apos; fees, resulting from any violation of these terms and conditions or any activity related to your account (including negligent or wrongful conduct) by you or any other person accessing the site using your account.</dd>
        </dl>
      </div>
      <div className='sm:w-1/2 sm:sticky sm:top-32'>
        <Image className='w-full' src='/terms.jpeg' alt='Black Guy on black shirt and shade' width={400} height={400} />
      </div>
    </div>
  )
}
