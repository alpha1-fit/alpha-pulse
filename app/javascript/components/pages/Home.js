import React from 'react'
import luXiaojun from '../assets/Lu-Xiaojun.png'

const Home = () => {
  return (
    <div className='content'>
      <h2>Are you tired of struggling to achieve your fitness goals alone?</h2>

      <div className='hometext'>
        At Alpha1, we are passionate about helping you achieve your overall health, not just your physical health. We believe that working together and staying committed is the key to success. That's why we created AlphaPulse, the fitness app that connects you to your friends and family's workouts. With AlphaPulse, you can work out with your loved ones no matter where they are in the world, creating a sense of social interaction and accountability. Challenge yourself and others, and log your sessions to track your progress. AlphaPulse empowers everyone to pursue their fitness goals. Join us on our shared fitness journey today.
      </div>
      <img src={luXiaojun} alt='gains'/>
    </div>
  )
}

export default Home