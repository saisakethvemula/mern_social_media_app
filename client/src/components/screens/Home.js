import React from "react";

const Home = () =>{
    return (
       <div className="home">
            <div className="card home-card">
                <h5>User 1</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="post" />
                    <div className="card-content"> 
                        <i className="material-icons" style={{color:"red"}}>favorite</i>
                        <h6>Title</h6>
                        <p>caption for this post</p>
                        <input type="text" placeholder="add comment"/>
                    </div>
                </div>
            </div>
            <div className="card home-card">
                <h5>User 2</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1507090960745-b32f65d3113a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="post" />
                    <div className="card-content">
                        <i className="material-icons" style={{color:"red"}}>favorite</i>
                        <h6>Title</h6>
                        <p>caption for this post</p>
                        <input type="text" placeholder="add comment"/>
                    </div>
                </div>
            </div>
            <div className="card home-card">
                <h5>User 1</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1510279770292-4b34de9f5c23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="post" />
                    <div className="card-content">
                        <i className="material-icons" style={{color:"red"}}>favorite</i>
                        <h6>Title</h6>
                        <p>caption for this post</p>
                        <input type="text" placeholder="add comment"/>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Home