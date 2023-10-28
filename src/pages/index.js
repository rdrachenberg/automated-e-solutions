import Link from "next/link"
import Image from "next/image"
import CalendylyForm from "/src/components/CalendlyForm"
import Testimonials from "src/components/Testimonials"
import Qualify from 'src/components/Qualify'
import FAQ from 'src/components/FAQ'
import CompanyLogos from 'src/components/CompanyLogos'

const handleCalClick = (e, path) => {
  if(path === '/#calender'){
    console.log('Go to calender clicked')
  }
}

export default function Home({}) {
  return (
    
    <div className='container xl:max-w-screen-xl mx-auto lg:py-1 px-6 sm:py-6 '>
      <div className='row py-6 text-center font-bold text-black '> 
        <div className='inline-block sm:hidden text-xl mb-5'>Automated Ecom Solutions</div>
        <div className='bg-slate-300 rounded-lg mx-auto sm:text-3xl p-3'>Are You Looking For An Automated FBA Store Partner That Provides Profitable Wholesale Items & Top-Tier Customer Service?</div>
          <div className='border-2 rounded shadow-md mx-auto flex items-center justify-center'>
          <div className='flex-1 p-4 rounded-lg max-w-4xl sm:p-8'>
            <div className='aspect-w-16 aspect-h-9'>
              <iframe src="https://www.youtube.com/embed/IucjtBsSGu4?si=YXgaR3bc4h0fA1jQ" priority="true"  title="e-commerce digital storefront business" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='mx-auto'></iframe>
            </div>
          </div>
          </div>
        
      </div>
      <div className='row pt-3'>
        <div className='flex flex-col items-center font-semibold text-2xl'>
          <Link href={'/#calender'}>
              <button className='w-96 rounded-full mx-auto bg-gradient-to-r from-indigo-400 to-cyan-400 p-3 shadow-xl text-cyan-50' onClick={(e)=> handleCalClick(e, '/#calender')}>Schedule a call now</button>
          </Link>
        </div>
      </div>
      <CompanyLogos />
      <div className='h-3 mb-20 bg-gradient-to-r from-slate-500 to-slate-200 rounded-md' id='why'></div>
      <div className='row py-1 text-center font-bold xl:text-3xl'> 
        <div className='grid grid-cols-1 gap-1'>
          <Testimonials />    
        </div>
      </div>
      <div className='row py-12' id='faq'> 
        <div className='grid grid-cols-1 gap-1'>
          <FAQ />    
        </div>
      </div>
      <div className='h-3 mb-2 bg-gradient-to-r from-slate-300 to-slate-500 rounded-md'id='qualify'></div>
      <div className='row text-center font-bold text-3xl'  > 
        <div className='grid grid-cols-1 gap-1' >
          <Qualify />    
        </div>
      </div>
      <div className='h-3 mb-10 mt-2 sm:mt-2 sm:mb-0 bg-gradient-to-r from-slate-300 to-slate-500 rounded-md' id='calender'></div>
      <div className='row py-12 text-center font-bold text-3xl' >
        <div className='grid grid-cols-1 gap-1'>
          <CalendylyForm />
        </div>
      </div>
      
    </div>
  )
}

export async function getStaticProps() {
  const products = {}
  return {
    props: {
      products,
      
    }
  }
}