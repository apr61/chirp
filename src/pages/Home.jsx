import Header from '../components/Header'
import TabBtn from '../components/TabBtn'
import SingleChirp from '../components/SingleChirp'
import Modal from '../components/Modal'
import {useState} from 'react'


export default function Home(){
    const [activeTab, setActiveTab] = useState('For You')
    function handleActiveTab(e){
        setActiveTab(e.target.textContent)
    }
  return(
    <>
      <Header>
        <h1 className="text-xl font-bold p-4">Home</h1>
          <div className="flex">
            <TabBtn text="For You" activeTab={activeTab} handleActiveTab={handleActiveTab}/>
            <TabBtn text="Following" activeTab={activeTab} handleActiveTab={handleActiveTab}/>
          </div>
      </Header>
      <div className="">
          <SingleChirp />
          <SingleChirp />
          <SingleChirp />
          <SingleChirp />
          <SingleChirp />
          <SingleChirp />
          <SingleChirp />
          <SingleChirp />
          <SingleChirp />
          <SingleChirp />
      </div>
    </>
  )
}