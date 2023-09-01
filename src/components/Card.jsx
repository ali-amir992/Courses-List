import React from 'react'
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = (props) => {

  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  let course = props.course;

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses(prev => prev.filter((cid) => cid !== course.id));
      toast.warning("like removed")
    }

    else
     {
      if (course.length === 0) {
        setLikedCourses([course.id]);
      }
      else {
        setLikedCourses((prevState) => [...prevState, course.id]);
        // setLikedCourses((prevState)=>{
        //   prevState.push(course.id);
        // })

      }
      toast.success("Liked Successfully");
    }
  }




  return (
    <div className="w-[300px] bg-gray-800 overflow-hidden rounded-md bg-opacity-80 ">

      <div className="relative">
        <img src={course.image.url} alt="" />

        <div className="w-[30px] h-[30px] rounded-full bg-white absolute right-2 bottom-3 grid place-items-center">

          <button onClick={clickHandler}>
            {/* <FcLike fontSize="1.5rem" /> */}
            {
              likedCourses.includes(course.id)?<FcLike fontSize="1.5rem" />: <FcLikePlaceholder fontSize="1.5rem" />   }
          </button>

        </div>

      </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>{course.description}</p>
      </div>



    </div>
  )
}

export default Card