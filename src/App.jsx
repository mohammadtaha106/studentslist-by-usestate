import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'



const Biodata =[
  {
    id:12,
  name : 'Mussa',
  rollNo : 10 ,
  fatherName : 'Riaz Sheikh',
  img : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D'

},
{
  id:11,
  name : 'Hasan',
  rollNo : 9 ,
  fatherName : 'Kamran',
  img : 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D'

},
{
  id:1,
  name : 'Karim',
  rollNo : 8 ,
  fatherName : 'Nasir',
  img : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D'

},
{
  id:2,
  name : 'Shayan',
  rollNo : 7 ,
  fatherName : 'Faisal',
  img : 'https://media.istockphoto.com/id/940996024/photo/a-man-in-a-blue-suit.jpg?s=1024x1024&w=is&k=20&c=_bYhVvNRwb3gwiJ5heyuDBn70PSJGaayc5Xn0AK6deg='

},
{
  id:3,
  name : 'Kashan',
  rollNo : 6,
  fatherName : 'Zahid',
  img : 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

},
{
  id:4,
  name : 'Momin',
  rollNo : 5 ,
  fatherName : 'Shoaib',
  img : 'https://plus.unsplash.com/premium_photo-1691030256264-59cdf9414ed1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

},
{
  id:5,
  name : 'Abdullah',
  rollNo : 4 ,
  fatherName : 'Shoaib',
  img : 'https://images.unsplash.com/photo-1502452213786-a5bc0a67e963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D'

},
{
  id:6,
  name : 'Ayaan',
  rollNo : 11 ,
  fatherName : 'Waseem',
  img : 'https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8'

},

{
  id:7,
  name : 'Taimoor',
  rollNo : 12 ,
  fatherName : 'Waseem',
  img : 'https://images.unsplash.com/photo-1542178243-bc20204b769f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

},
{
  id:8,
  name : 'Usman',
  rollNo : 3 ,
  fatherName : 'Rizwan',
  img : 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95cyUyMCUyMHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww'

},
{
  id:9,
  name : 'Yousuf',
  rollNo : 2,
  fatherName : 'Zai',
  img : 'https://plus.unsplash.com/premium_photo-1706429674214-09686c64c6a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

},
{

  id:10,
  name : 'Ramil',
  rollNo : 1 ,
  fatherName : 'Afzal',
  img : 'https://media.istockphoto.com/id/1198195174/photo/close-up-portrait-of-cute-smiling-blond-boy.webp?b=1&s=612x612&w=0&k=20&c=1a3TD4MSzWEnFwj-Hl1tryYO0BKjeBc-PN58h7HeYxs='

}
]

function App() {
  console.log(Biodata);
  const [Array, setArray] = useState(Biodata)
  console.log(Array);
  

  return (
    <>
    <div className='flex justify-around mt-3'>  <h1 className='text-3xl font-serif'>Students  List</h1>

<button
type="button" onClick={()=>{setArray([])}}
class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
>
Clear All
</button></div>
        
      {

      Array.map((currElem)=>{
        return <>
       
     

          <List name={currElem.name} rollNo={currElem.rollNo} img={currElem.img} fatherName={currElem.fatherName}/>
       
        </> 
      })
   
      }
   

      
    </>
  )
}

export default App
