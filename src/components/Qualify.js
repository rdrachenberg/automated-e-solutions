/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const Qualify = () => {

    const questions = ['']

    return (
        <div className='container bg-slate-200 min-h-screen'>
            
            <div className='text-blue-600 text-2xl pt-8 text-bold mx-auto text-decoration-line: underline'>Let's see if you qualify to be our Automated FBA Wholesale Store Partner</div>
            <div className="grid grid-cols-1 gap-1 pt-20">
                <div className='grid-cols-1'>
                    <button className='bg-green-600 rounded-lg p-3 border-solid-8 border-red-500 text-white'>Start here</button>
                </div>
                
            </div>

        </div>
    )
}

export default Qualify;