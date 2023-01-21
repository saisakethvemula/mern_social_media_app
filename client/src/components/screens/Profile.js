import React from "react";

const Profile = () =>{
    return (
        <div style={{maxWidth:"1000px", margin:"0px auto"}}>
            <div className="info-profile">
                <div>
                    <img style={{width:"160px", height:"160px", borderRadius:"80px"}}
                    src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    alt="profile"/>
                </div>
                <div>
                    <h4>Random Person</h4>
                    <div className="count-profile">
                        <h6>40 posts</h6>
                        <h6>122 followers</h6>
                        <h6>765 following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1588811363284-445a2f3f6a51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt="post"/>
                <img className="item" src="https://images.unsplash.com/photo-1527321749201-bff1ed9eb2ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt="post"/>
                <img className="item" src="https://images.unsplash.com/photo-1503212556734-c0ca0c49c8b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt="post"/>
                <img className="item" src="https://images.unsplash.com/photo-1521112376370-0a3b01544ab1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt="post"/>
                <img className="item" src="https://images.unsplash.com/photo-1431368576556-fb5cb04416ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt="post"/>
                <img className="item" src="https://images.unsplash.com/photo-1490059830487-2f86fddb2b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                alt="post"/>
                <img className="item" src="https://images.unsplash.com/photo-1532769200180-0eb4314a75f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80"
                alt="post"/>
            </div>
        </div>
    )
}

export default Profile