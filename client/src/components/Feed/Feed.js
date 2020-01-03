import React, { useEffect } from 'react';
import FeedCard from '../FeedCard/FeedCard';
import './feed.css'

const Feed = ({ feed, name}) => {

    useEffect(() => {
        console.log(feed)
    });

    return (
        <div>
            <h1 className="feedTitle" style={{'textAlign':'center'}}>{`${name}'s Sources`}</h1>
            {feed.map(post => (
                <FeedCard
                    key={post._id}
                    id={post._id}
                    userName={post.userName}
                    timeStamp={post.timeStamp}
                    content={post.content}
                    profileImg={post.profileImg}
                />
            ))}
        </div>
    );
}

export default Feed;