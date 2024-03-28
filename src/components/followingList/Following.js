import React, { useEffect, useState } from 'react';
import '../followingList/Following.css';
import { getSuggestFollowApi } from '../../utils/api';
import { toast } from 'react-toastify';

const FollowingSuggest = () => {
    const [listSuggest, setListSuggest] = useState([]);
    const getData = async () => {
        try {
            let res = await getSuggestFollowApi();
            // console.log(res);
            if (res.data !== null) {
                setListSuggest(res.data);
            }
        } catch (error) {
            toast.error("Error:", error);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className='h-right-side'>
            <div className='following-suggest'>
                <div className='define'>
                    <span><b>Suggestion for you</b></span>
                    <span className='show-all'>See all</span>
                </div>
                {listSuggest.map((item, index) => (
                    // console.log(item);
                    // <div>hello</div>
                    index < 3 &&
                    <div className='suggest-person'>
                        <div className='info'>
                            <img src={item.image} />
                            <span>{item.title}</span>
                        </div>
                        <div className='btn'>
                            <button>Follow</button>
                            {/* <button>Dimiss</button> */}
                        </div>
                    </div>
                ))

                }
            </div>
            <div className='following-list'>
                <div className='define'>
                    <span><b>Following</b></span>
                </div>
                <div className='following-person'>
                    <div className='info'>
                        <img />
                        <span>Cong Hau</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FollowingSuggest;