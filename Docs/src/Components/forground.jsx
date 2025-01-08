import React,{useRef} from 'react'
import Card from './Card.jsx'

const Forground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "this is the background and my name is anis",
      filesize: ".5mb",
      close: true,
      tag: {
        isOpen : true, tagTitle : "Download Now", tagColor: "green"},
      }
    ,
      {
        desc: "this is the background and my name is anis",
        filesize: ".5mb",
        close: true,
        tag: {
          isOpen : true, tagTitle : "Download Now", tagColor: "blue"},
        }
,
        {
          desc: "this is the background and my name is anis",
          filesize: ".5mb",
          close: true,
          tag: {
            isOpen : true, tagTitle : "Download Now", tagColor: "green"},
          }
  ]
  return (
    <div ref={ref}  className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
     {
      data.map((item, index)=>(
        <Card data={item} reference={ref}/>
      ))
     } 
    </div>
  )
}

export default Forground
