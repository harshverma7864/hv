import React from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar';

const categories = ({category}) => {
  const router = useRouter();
    const { slug } = router.query;
  return (
    <>
     <Navbar/>
      {slug}
    </>
  )
}



export async function getServerSideProps(context) {


  // if(!mongoose.connections[0].readyState){
  //     await mongoose.connect(process.env.MONGO_URI)
  // }
  // Fetch data from external API
  // let dt = item.createdAt.substr(0,10);

  const url = "https://winbattleuc.in/nextapis/getQuestion.php?sno=" + context.query.slug

  let questions = await fetch(url);

  let result = await questions.json()
 

  // Pass data to the page via props
  return { props: {questions : JSON.parse(JSON.stringify(result))}}
}

export default categories
