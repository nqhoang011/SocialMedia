import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import Story from 'react-insta-stories';
const ViewStory = ({ data, onCloseStory }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onCloseStory(false);
        }, 8000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <Modal
            open={true}
            centered
            width={450}
            footer={null}
            onCancel={() => onCloseStory(false)}
        >
            <Story
                stories={[data.src_image]}
                defaultInterval={8000}
            />
        </Modal>
    );
};

export default ViewStory;
