import React from 'react'

function About() {
  return (
  <>
   <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 max-w-screen-2xl md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 max-w-screen-2xl lg:items-center lg:gap-12">
                    <div className="w-1/3">
                        <img
                            src="https://thumbs.dreamstime.com/b/business-people-teamwork-office-vector-illustration-cartoon-flat-businessman-teacher-character-training-employee-students-team-191768080.jpg"
                            alt="image"
                            className='ml-3'
                        />
                    </div>
                    <div className="md:7/12 ml-12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl ">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        By using React, developers harness its robust ecosystem and vast library of tools to streamline the development process. They embrace constant learning and collaboration, adapting to new updates and trends to stay ahead in the ever-evolving tech landscape. This passion for excellence transforms React applications into high-performing, user-friendly solutions that meet the demands of both clients and end-users.
                        </p>
                        <p className="mt-4 text-gray-600">
                        These developers are deeply committed to leveraging the power of React’s component-based architecture, ensuring that every project is built with scalability, efficiency, and maintainability in mind. Their dedication shines through in the meticulous attention to detail and the innovative solutions they bring to modern web development challenges.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  </>
  )
}

export default About
