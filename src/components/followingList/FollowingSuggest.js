import React from 'react';
import '../followingList/FollowingSuggest.css';

const FollowingSuggest = () => {
    return (
        <div className='list-border'>
            <div className='define'>
                <span><b>Suggestion for you</b></span>
            </div>
            {/* <div className='suggest-list'> */}
            <div className='suggest-person'>
                <div className='info'>
                    <img />
                    <span>Cong Hau</span>
                </div>
                <div className='btn'>
                    <button>Follow</button>
                    <button>Dimiss</button>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default FollowingSuggest;