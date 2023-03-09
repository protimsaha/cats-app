import {  useState } from 'react';
import './App.css';
import data from './assests/data';
import DropZone from './components/DropZone';

function App() {
  const [select,setSelect]=useState(data[0])
  const [newClicks,setnewClicks]=useState(select.clicks)
  const [newName,setNewName]=useState(select.name)
  const [files,setFiles]=useState([])
  const [change,setChange]=useState(false)

  const increment = (id)=>{
    setnewClicks(data[id].clicks =data[id].clicks +1 )
  }
  const changeName = (e)=>{
    setNewName( e.target.value)
    setChange(true)
    save()
  }

let newArr = []
  const selectId = (id)=>{
    newArr.unshift(data.find(ds=>ds.id === id))
    setSelect(newArr[0])
    increment(id)
  }

const save = (e)=>{
  e.preventDefault()
  select.name = newName;
  select.clicks = newClicks
  console.log(newClicks)
}
const undo = ()=>{
   
}

  return (
    <div className="App container w-auto px-6 sm:px-12 lg:px-16 mx-auto">
      <header className='pt-6'>
      <div className='h-[1.5px] w-auto bg-gray-400'></div>
      <h2 className='text-3xl py-3 text-gray-700 font-semibold'>Cat Clicker App</h2>
      <div className='h-[1.5px] w-full bg-gray-400'></div>
      </header>

      {/* main components starts from here */}
      <main className=''>
        <section className='grid grid-cols-12 gap-4 py-4'>
          <div className='lg:col-span-3 col-span-12 mx-auto  w-full'>
          
            {data.map(dt=><div role={'button'} onClickCapture={()=>selectId(dt.id)} key={dt.id} className='flex justify-between items-center border-[2px] px-2.5 py-2 border-gray-400 '>
            <h4>{change ? dt.name: dt.name}</h4>
            <div className='bg-gray-600  rounded-md px-3 py-1'>
              <p className='text-white'>{ dt.clicks}</p>
            </div>
            </div>)}


          </div>



            <div className='lg:col-span-6 col-span-12 mx-auto w-5/6 border-[2px]  border-gray-400'>
            <div className=' w-full'>
              <div className='p-4'>
                <h2 className='text-2xl  text-gray-700 font-semibold'>{data[select.id].name} </h2>
                <p className=' text-gray-700 font-semibold text-xl'>No. of time clicks {select.clicks}</p>
              </div>
            </div>
           

            {files.length > 0 ? files.slice(0, 1).map((fileItem, i) => (
                                <img
                                onClick={(id)=>increment(select.id)}
                      src={URL.createObjectURL(fileItem.file)}
                      alt="Uploaded-image"
                      width={"100%"}
                      height={"100%"}
                    />))
                  : <img role={'button'} onClick={(id)=>increment(select.id)} className='' src="https://images.unsplash.com/photo-1579168765467-3b235f938439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8f" alt='cat'/>
                  }




            <div className='p-4'>
            <p className=' text-gray-700 font-semibold text-xl'>{select.nickName}</p>
            <p className=' text-gray-700 font-semibold text-xl'>{select.age}</p>
            <a target='_blank' className='text-blue-500' rel="noreferrer" href='https://api-ninjas.com/images/cats/abyssinian.jpg'>link</a>
            </div>
          </div>
        

          <form onSubmit={undo} className='lg:col-span-3 col-span-12 mx-auto border-[2px] border-gray-400 w-full p-4 max-h-96'>
            <button className='bg-blue-600 text-white p-2 font-medium rounded'>Open New Form</button>
              <div className='py-3 flex flex-col'>
                <label className='py-1 font-medium text-gray-700'>Cat Name</label>
                <input onChange={(e)=>changeName(e)} className='w-full border-[2px] border-gray-400 p-1' placeholder='Cat Name'/>
              </div>
              <div className=' flex flex-col'>
                <label htmlFor='image' className='py-1 font-medium text-gray-700'>Cat Image</label>
                <DropZone
             id='image'
             files={files}
             setFiles={setFiles}
             fileLimit={10}
             minFileLimit={3}
             dropZoneHeight="h-[30px]"
             dropZoneImgWidth="w-full"
             dropZoneMidText="font-14 md:font-18 mt-[5px]"
             dropZoneEndText="font-12 sm:font-14 mt-[6px]"
           />  

              </div>
              <div className='py-3 flex flex-col'>
                <label className='py-1 font-medium text-gray-700'>Cat Clicks</label>
                <input type={'number'} onChange={(e)=>setnewClicks(Number(e.target.value))} className='w-full border-[2px] border-gray-400 p-1' placeholder='Cat Clicks'/>
              </div>
              <div className='flex gap-4'>
              <button onClick={(e)=>save(e)} className='bg-green-600 text-white p-2 font-medium rounded'>Save</button>
              <input value={'Undo'} type={'submit'} className='bg-red-600 text-white p-2 font-medium rounded'/>
              </div>
          </form>
        </section>
        <div className='h-[1.5px] w-auto bg-gray-400 mb-4'></div>
          <section>
          <h2 className='text-3xl pb-3 text-gray-700 font-semibold'>Cats image gallery</h2>
            <div className='grid grid-cols-12 lg:gap-14 gap-y-3 sm:gap-10 py-4'>

           {data.map(d=>
            <div role={'button'} onClick={()=>selectId(d.id)} key={d.id} className='lg:col-span-3 sm:col-span-6 col-span-12 border-[2px] mx-auto border-gray-400'>
            <div className=' w-full'>
              <div className='p-4'>
                <h2 className='text-2xl  text-gray-700 font-semibold'>{d.name} </h2>
                <p className=' text-gray-700 font-semibold text-xl'>No. of time clicks {d.clicks}</p>
              </div>
            </div>
            <img onClick={(id)=>increment(select.id)} src="https://images.unsplash.com/photo-1579168765467-3b235f938439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8f" alt='cat'/>
            <div className='p-4'>
           
            <a target='_blank' className='text-blue-500' rel="noreferrer" href='https://api-ninjas.com/images/cats/abyssinian.jpg'>link</a>
            </div>
          </div>)
            
           }

          

            </div>
          </section>
  
                         
              </main>
    </div>
  );
}

export default App;
