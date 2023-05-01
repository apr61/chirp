import {useState} from 'react'
import Header from '../components/Header'
import TabBtn from '../components/TabBtn'
import {BsCalendar3} from 'react-icons/bs'
import useAuthContext from '../hooks/useAuthContext'

export default function Profile(){
    const[activeTab,  setActiveTab] = useState('Chirps')
    const {currentUserDetails} = useAuthContext()
    function handleActiveTab(e){
        setActiveTab(e.target.textContent)
    }
  return(
    <>
      <Header>
          <div className="flex flex-col px-4 py-2">
            <h1 className="text-xl font-bold">{currentUserDetails.name}</h1>
              <p className="text-slate-500">0 Chirps</p>
          </div>
      </Header>
        <div>
            <div className="h-52 w-full relative">
                <img src={currentUserDetails.headerImg} className="h-full w-full object-cover" alt="User header pic" loading="lazy"/>
                <div className="absolute -bottom-20 left-4">
                    <img src={currentUserDetails.profileUrl} className="h-40 w-40 rounded-full border-4 border-white object-cover" alt="User header pic" loading="lazy"/>
                </div>
                <button className="py-2 px-4 border border-slate-300 rounded-full absolute -bottom-16 right-8 font-bold hover:bg-slate-300 focus:outline-slate-500">Edit Profile</button>
            </div>
            <div className='mt-20 ml-4'>
                <h2 className="text-xl font-bold">{currentUserDetails.name}</h2>
                <p className="text-gray-700">@{currentUserDetails.username}</p>
                <div className="flex gap-2 items-center text-gray-700 my-4">
                    <span><BsCalendar3 /></span> 
                    <p>Joined August 2022</p>
                </div>
                <div className="flex gap-4 text-gray-700">
                    <p><span className='font-bold text-black'>{currentUserDetails.following}</span> Following</p>
                    <p><span className='font-bold text-black'>{currentUserDetails.followers}</span> Followers</p>
                </div>
            </div>
            <div className="flex mt-4 border-b border-slate-300">
                <TabBtn text="Chirps" activeTab={activeTab} handleActiveTab={handleActiveTab}/>
                <TabBtn text="Replies" activeTab={activeTab} handleActiveTab={handleActiveTab}/>
                <TabBtn text="Media" activeTab={activeTab} handleActiveTab={handleActiveTab}/>
                <TabBtn text="Likes" activeTab={activeTab} handleActiveTab={handleActiveTab}/>
            </div>
            <div className="p-4">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>
            </div>
        </div>
    </>
  )
}