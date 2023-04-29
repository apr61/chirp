import Header from '../components/Header'
import TabBtn from '../components/TabBtn'
import {useState} from 'react'

export default function Notifications(){
    const [activeTab, setActiveTab] = useState('All')
    function handleActiveTab(e){
        setActiveTab(e.target.textContent)
    }
  return(
    <>
        <Header>
            <h1 className="text-xl font-bold p-4">Notifications</h1>
            <div className="flex">
                <TabBtn text='All' activeTab={activeTab} handleActiveTab={handleActiveTab}/>
                <TabBtn text='Verified' activeTab={activeTab} handleActiveTab={handleActiveTab}/>
                <TabBtn text='Mentions' activeTab={activeTab} handleActiveTab={handleActiveTab}/>
            </div>
        </Header>
    </>
  )
}