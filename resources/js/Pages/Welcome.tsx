import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {MenuOutlined} from "@ant-design/icons";
import React, { useState } from 'react';


export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion:
    string }>) {

let [mainposts,setMainposts] = useState([
    {id:1,time:"12:25 am , 10/12/2020" ,title:"title",body:"body",img:"img/flower.png"},
    {id:2,time:"12:25 am , 10/12/2020" ,title:"title",body:"body",img:"img/flower.png"},
    {id:3,time:"12:25 am , 10/12/2020" ,title:"title",body:"body",img:""},
    {id:4,time:"12:25 am , 10/12/2020" ,title:"title",body:"body",img:""},
]);
let [hadithposts,setHadith] = useState([]);
let [history,setHistory] = useState([]);
let [storys,setStorys] = useState([]);
let [magazine,setMagazine] = useState([]);
let [books,setBooks] = useState([]);


        // to get live links
function getlinks(){

}
// to get posts based on sections limit to only 10 posts 
function getposts(type:number){

}
    // show or hide menu section
    // only used on small screen devices other wise it is not required to operate
    let togglemenu=()=>{
    alert("menu toggled");
    }
    let [menuindex,setMenuindex] = useState(1);
let menu=[
{name:"Home",id:1},
{name:"Al Ahadith",id:2},
{name:"History of Islam",id:3},
{name:"Short Stories",id:4},
{name:"Books",id:5},
{name:"Magazine",id:6},
{name:"About",id:7}
]; 



function getclassname(id:number ){
return menuindex == id ? "menuli menuliactive": "menuli";
}


function activesection(id:number){
    return menuindex == id ? "visible":"hidden";
}
function swapsection(section:object){

}

function showposts(data:[]) {
    if(data.length > 0){
return data.map(el=>{return <div key={el.id} className="flex flex-col w-25 p-5 h-fit mt-4 rounded-lg hover:bg-green-100" >                             
<div  className=' w-25  p-auto text-lg pl-5 hover:text-xl'>
{el.title}
</div>
 <p className='text-sm ml-5'>{el.time}</p> 

 <div className='p-5 w-fit inline shadow bg-gray-100  rounded-lg '>                            
     <img src={resource(el.img)} className=' rounded-lg  w-fit' style={{height:"250px"}} alt="picture" />
 </div>
 <div className='p-1 w-fit mt-1 '>
 <p className='truncate   overflow-hidden text-clip justify-center'>
     {el.body}
 </p>
 </div>
</div>
}) ;
    }else{
        return trans("nodata");
    }
}


    return (
    <>

        <Head title="Welcome" />

<div className='font-serif'>
          {/* introduction */}
    <div className='introduction '>
        
          <div className="w-full text-center h-100     h-96 pt-10 flex justify-evenly  font-serif " >
               <div className='w-sm'>
                <img src={resource('img/drabdulwahid.png')} alt="" />

               </div>
            <span className=' text-9xl  '>Dr.Abdulwahid

<div className='text-right'>
<small className='text-sm text-right'>" Calling Humanity To Worship Allah "</small>
</div>
</span>

</div>

{/* menu */}

<div className="w-full p-5 rounded-b-lg border-b-2  visible md:hidden ">
                <div className='flex justify-between  md:justify-end p-2 px-4'>
                    <h2 className='visible md:hidden'>Website Name</h2>
                    <MenuOutlined onClick={togglemenu} className='text-lg' />
                </div>

            </div>

            </div>


<div className="flex flex-row mb-10">
<div className=" border-r-2 w-80   hidden md:block lg:visible hover:border-r-green-500   ">


<ul className='list mt-1 md:mt-5  p-5 '>
                            <li className='btn text-center border-b-4 border-yellow-300 ' >{trans("menu")} </li>
                           {menu.map(el=>{ return <li onClick={()=>{setMenuindex(el.id);swapsection(el)}} key={el.id}className={getclassname(el.id)} >{el.name}</li>;})}

                        </ul>

                        <div className='mt-10'>
                            <p className='mt-5 text-center'>Follow us...</p> 
                            
                            <div className='flex  justify-evenly '>
                                {/* social links */}
                                <a href="" title='Facebook' className='w-8 m-1'><img
                                        src={resource('imgs/facebook.svg')} alt="Facebook" className='text-blue-700' />
                                </a>
                                <a href="" title='Snapchat' className='w-8 m-1'><img
                                        src={resource('imgs/snapchat.svg')} alt="Facebook" className='text-blue-700' />
                                </a>
                                <a href="" title='Youtube' className='w-8 m-1'><img
                                        src={resource('imgs/youtube.svg')} alt="Facebook" className='text-blue-700' />
                                </a>
                                <a href="" title='Instagram' className='w-8 m-1'><img
                                        src={resource('imgs/instagram.svg')} alt="Facebook" className='text-blue-700' />
                                </a>
                            </div>
<hr className='mb-5' />
                        <h2 className='text-center '>copyright@2023</h2>
                        <h2 className='text-center '><a href="#">ChraGroup</a> </h2>
                        <h2 className='text-center '><a className=' text-blue-600 text-decoration-underline' href="#">Privacy</a>  & <a className=' text-blue-600 text-decoration-underline' href="#">Policy</a></h2>
                        </div>

                        
                        </div>



{/* section content */}
<div className="w-full ">
      {/* contents */}
      <div className=' p-2 '>


{/* Home section */}
<div className={activesection(1)}>

<section className='grid grid-cols-3  sm:grid-cols-1 md:grid-cols-3 '>
{ showposts(mainposts)}    
</section>
   
</div>                   

{/* hadith section */}
<div className={activesection(2)}>

<section className='grid grid-cols-3  sm:grid-cols-1 md:grid-cols-3 '>

{ showposts(hadithposts)}    
 
    
</section>
</div>
<div className={activesection(3)}>

<section className='grid grid-cols-3  sm:grid-cols-1 md:grid-cols-3 '>


{ showposts(history)}    

</section>
 

</div>
<div className={activesection(4)}>

<section className='grid grid-cols-3  sm:grid-cols-1 md:grid-cols-3 '>
{ showposts(storys)}    
  
</section>
 
</div>
<div className={activesection(5)}>

<section className='grid grid-cols-3  sm:grid-cols-1 md:grid-cols-3 '>



{ showposts(books)}    

</section>
 
</div>
<div className={activesection(6)}>

<section className='grid grid-cols-3  sm:grid-cols-1 md:grid-cols-3 '>

{ showposts(magazine)}    

</section>
 
</div>
<div className={activesection(7)}>
<section className='flex flex-col p-5'>
<img src={resource('img/drabdulwahid.png')} alt="title" className='w-44' />
<h1>Dr.Abdulwahid</h1>
<p>We are working to call humanity to salvation through scintefic idea and theology</p>
</section>
</div>

                    </div>

                    {/* end of content section */}
</div>




{/* end flex content */}
</div>








</div>

    </>
    );
    }
