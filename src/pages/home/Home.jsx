import React, { useState } from 'react'
import './Home.css'
import SingleChirp from '../../components/singleChirp/SingleChirp'
import TabBtn from '../../components/tab-btn/TabBtn'
import { Link } from 'react-router-dom'

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
                    <TabBtn tabName={'For You'} handleActiveTab={handleActiveTab} active={activeTab === 'for you'} />
                    <TabBtn tabName={'Following'} handleActiveTab={handleActiveTab} active={activeTab === 'following'} />
                </div>
            </div>
            <div className="home__body">
                <SingleChirp userFullname={'Pradeep'} chirpId={1} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3} />
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3} />
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3} />
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3} />
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3} />
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3} />
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3} />
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3} />
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3} />
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3} />
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3} />
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3} />
                <SingleChirp userFullname={'Pradeep'} username={'pradeep9'} time={2} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, amet distinctio veniam'} likes={10} replies={2} rechirps={3} />
            </div>
        </div>
    )
}

export default Home