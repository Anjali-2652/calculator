import React, { useState } from 'react'

const Body = () => {
const [value, setValue] = useState("")


  return (
    <div className='bg-[#ff4d6d] h-screen w-full flex justify-center items-center '>

        <div className='bg-[#800f2f] rounded-2xl h-fit w-fit shadow-[#800f2f] shadow-2xl px-4 py-7  '>

            <input type="text" className='w-full  px-2 mb-5 font-bold text-2xl rounded-2xl py-3 bg-[#ff758f] ' value={value} />

            <div className=' mt-4 grid grid-cols-4 gap-x-4 gap-y-5 text-xl font-bold  '> 

<input onClick={e => setValue("")}
 type="button" value= "AC"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer  rounded-lg px-4 py-2 '/>
<input onClick={e => setValue(value.slice(0, -1))}
type="button" value= "DEL"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue(value +  e.target.value)}
type="button" value= "%"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer  rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue( value +  e.target.value)}
 type="button" value= "/"  className='bg-[#ffb3c1]  shadow-2xl shadow-[#ff4d6d] cursor-pointer  rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue( value + e.target.value)}
type="button" value= "7"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d]  cursor-pointer rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue(  value + e.target.value  )}
type="button" value= "8"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue( value +  e.target.value)}
type="button" value= "9"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue(value +  e.target.value  )}
 type="button" value= "*"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer  rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue(value +  e.target.value  )}
type="button" value= "4"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue(value +  e.target.value  )}
 type="button" value= "5"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer  rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue(value +  e.target.value  )}
 type="button" value= "6"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer  rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue(value +  e.target.value  )}
 type="button" value= "-"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue(value +  e.target.value  )}
 type="button" value= "1"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue(value +  e.target.value  )}
 type="button" value= "2"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue(value +  e.target.value  )}
type="button" value= "3"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue(value +  e.target.value  )}
 type="button" value= "+"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer  rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue(value +  e.target.value  )}
 type="button" value= "00"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d]  cursor-pointer rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue( value +  e.target.value)}
 type="button" value= "0"  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer  rounded-lg px-4 py-2 '/>
<input onClick={e=>setValue(value +  e.target.value)}
 type="button" value= "."  className='bg-[#ffb3c1] shadow-2xl shadow-[#ff4d6d] cursor-pointer rounded-lg px-4 py-2 '/>
<input onClick={e=> setValue(eval(value))}
 type="button" value= "="  className='bg-[#db25ae] shadow-2xl shadow-[#ff4d6d] cursor-pointer  rounded-lg px-4 py-2 '/>




            
    

            </div>



            
        </div>
      
    </div>
  )
}

export default Body
