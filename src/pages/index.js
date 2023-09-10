import Link from "next/link"
import Image from "next/image"
import CalendylyForm from "/src/components/CalendlyForm"
import Testimonials from "src/components/Testimonials"
import Qualify from 'src/components/Qualify'
import FAQ from 'src/components/FAQ'

const handleCalClick = (e, path) => {
  if(path === '/#calender'){
    console.log('Go to calender clicked')
  }
}

export default function Home({products}) {
  return (
    
    <div className='container xl:max-w-screen-xl mx-auto lg:py-1 px-6 sm:py-6 '>
      <div className='row py-6 text-center font-bold text-3xl text-black '> 
        <div className='grid-cols-1 gap-1' >
        <div className='grid-col-1 py-6 px-6 bg-slate-300 rounded-lg mx-auto'>Are You Looking For An Automated FBA Store Partner That Provides Profitable Wholesale Items & Top-Tier Customer Service?</div>
          <div className='grid-col-1 py-6 px-6 border-2 rounded shadow-md'>
            <Image width={500} height={500} src='/misc/maxresdefault.jpg' alt='placeholder' priority className='mx-auto' />
          </div>
        </div>
      </div>
      <div className='row pt-3 pb-12'>
        <div className='flex flex-col items-center font-semibold text-2xl'>
          <Link href={'/#calender'}>
              <button className='w-96 rounded-full mx-auto bg-gradient-to-r from-indigo-400 to-cyan-400 p-3 shadow-xl text-cyan-50' onClick={(e)=> handleCalClick(e, '/#calender')}>Schedule a call now</button>
          </Link>
        </div>
      </div>
      <div className='h-3 mb-20 bg-gradient-to-r from-slate-500 to-slate-200 rounded-md'></div>
      <div className='row py-1 text-center font-bold text-3xl'> 
        <div className='grid grid-cols-1 gap-1'>
          <Testimonials />    
        </div>
      </div>
      <div className='row py-12' id='faq'> 
        <div className='grid grid-cols-1 gap-1'>
          <FAQ />    
        </div>
      </div>
      <div className='h-3 mb-10 bg-gradient-to-r from-slate-300 to-slate-500 rounded-md'id='qualify'></div>
      <div className='row mt-6 py-12 text-center font-bold text-3xl'  > 
        <div className='grid grid-cols-1 gap-1' >
          <Qualify />    
        </div>
      </div>
      <div className='row py-12 text-center font-bold text-3xl' id='calender'>
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