import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'



const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Welcome to Bangers, where innovation meets excellence.At Bangers, we are passionate about delivering cutting-edge solutions tailored to meet your unique needs. Since our inception, we have been committed to providing exceptional products and services that drive results and foster meaningful connections.</p>
            <p>This a just statement.Inorder to make the vision of the particular brand that i am making inorder for this project created for myself just as it is but inorder to make it attractive im just adding few more words.</p>
            <b className='text-gray-800' >Our Mission</b>
            <p>To empower individuals and businesses with innovative tools, seamless experiences, and reliable support, enabling them to achieve their goals and thrive in a rapidly evolving digital world.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We are a team of skilled professionals dedicated to making quality assurance seamless and stress-free for our clients. With years of experience in QA strategy, testing, and process improvement, we have become a trusted name in the industry.Our expertise spans multiple domains, including software, applications, and product testing. From startups to large enterprises, BanGER has played a pivotal role in helping businesses enhance the quality of their offerings and build trust with their customers.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We are a team of skilled professionals dedicated to making quality assurance seamless and stress-free for our clients. With years of experience in QA strategy, testing, and process improvement, we have become a trusted name in the industry.Our expertise spans multiple domains, including software, applications, and product testing. From startups to large enterprises, BanGER has played a pivotal role in helping businesses enhance the quality of their offerings and build trust with their customers.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We are a team of skilled professionals dedicated to making quality assurance seamless and stress-free for our clients. With years of experience in QA strategy, testing, and process improvement, we have become a trusted name in the industry.Our expertise spans multiple domains, including software, applications, and product testing. From startups to large enterprises, BanGER has played a pivotal role in helping businesses enhance the quality of their offerings and build trust with their customers.</p>

        </div>

      </div>
      
      <NewsLetterBox/>
      
    </div>
  )
}

export default About
