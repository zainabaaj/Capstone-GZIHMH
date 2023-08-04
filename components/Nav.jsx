'use client'
import { useState,useEffect, React } from 'react'
import Image from 'next/image'
import { signOut } from 'firebase/auth'
import { auth,getDoc,doc,firestore} from'@/utils/firebase'
import { getProviders } from 'next-auth/react'
import { HomeIcon, Logout, ProfileIcon, SavedIcon, SearchIcon}from '@/utils/icons'
const Nav = ({ router }) => {
    const {uid} = auth.currentUser
    
    const handleSignoutClick = async () => {
    console.log("this is sign out")
    await signOut(auth).then(() => {
        console.log("Sign-out successful.") 
        router.push('/')
      }).catch((error) => {
       
      });
      
    }
    console.log("this is isanon: ",process.env.ISANON)
    // const isAnon = async () => {
    //     console.log("this is isAnon function")
    //     console.log("this is uid: ",uid)
    //     const userRef =  doc(firestore, 'users',uid)
    //     const docSnap = await getDoc(userRef)
    //     if (docSnap.exists()) {
    //         return true
    //     }
    //     else return false
    // }
    // if (uid == null) {
    //     return <p>Loading user data...</p>;
    // }
    // console.log("resule of isAnon is ",isAnon())
    return (
        <div>
            <aside className="flex flex-col w-20 h-screen px-5 py-8 overflow-y-auto bg-transparent dark:bg-gray-900 dark:border-gray-700">
                <a href="/" >
                    <Image src="/assets/icons/logos.png"
                        alt="icon image"
                        width={800}
                        height={800}
                        className='flex m-auto w-12 h-8'
                    />
                </a>


                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className="-mx-3 space-y-6 ">
                        <div className="space-y-3 ">

                            <a className=" flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-primary" href="/pages/home">
                               <HomeIcon/>
                                <span className="mx-2 text-sm font-medium">Home</span>
                            </a>

                            <a className="flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-primary" href="/pages/search">
                                <SearchIcon/>

                                <span className="mx-2 text-sm font-medium">Search</span>
                            </a>
                            <a className="flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-primary" href="/pages/courses">
                                <coursesIcon />

                                <span className="mx-2 text-sm font-medium">Courses</span>
                            </a>
                            <a className="flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-primary" href="/pages/saved">
                                <SavedIcon/>

                                <span className="mx-2 text-sm font-medium">Saved</span>
                            </a>
                            <a className="flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-primary" href="/pages/profile">
                               <ProfileIcon/>

                                <span className="mx-2 text-sm font-medium">Profile</span>
                            </a>
                            {
                                !process.env.ISANON? (
                                    <div className='flex flex-col items-center px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-primary'>
                                        
                                        <button onClick={handleSignoutClick}>
                                        <Logout/>
                                sign out
                            </button>
                                    </div>
                                    
                                ) : (
                                        <>
                                        </>
                                )
                            }
                            
                        </div>


                    </nav>
                </div>
            </aside>
        </div>

    )
}

export default Nav

