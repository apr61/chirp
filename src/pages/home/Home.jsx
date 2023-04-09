import React, { useState } from 'react'
import './Home.css'
import SingleChirp from '../../components/singleChirp/SingleChirp'

function Home() {
    const [activeTab, setActiveTab] = useState('for you')
    function handleActiveTab(e) {
        setActiveTab(e.target.textContent.toLowerCase())
    }
    return (
        <div className="home">
            <div className="main__header">
                <header className="home__header">
                    <h1 className="home__title">Home</h1>
                </header>
                <div className="home__tabs">
                    <button className={activeTab === 'for you' ? 'home__tab-btn home__tab-btn--active' : "home__tab-btn"} onClick={handleActiveTab}>For You</button>
                    <button className={activeTab === 'following' ? 'home__tab-btn home__tab-btn--active' : "home__tab-btn"} onClick={handleActiveTab}>Following</button>
                </div>
            </div>
            <div className="home__body">
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3}/>
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3}/>
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3}/>
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3}/>
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3}/>
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3}/>
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3}/>
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3}/>
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3}/>
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3}/>
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3}/>
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3}/>
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3}/>
            </div>
        </div>
    )
}

export default Home