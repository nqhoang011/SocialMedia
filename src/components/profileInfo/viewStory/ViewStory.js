import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import Story from 'react-insta-stories';
const ViewStory = ({ isOpen, data, onCloseStory }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onCloseStory(false);
        }, data.length * 9000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <Modal
            open={isOpen}
            centered
            width={450}
            footer={null}
            onCancel={() => onCloseStory(false)}
        >
            <Story
                stories={data}
                defaultInterval={8000}
            />
        </Modal>
    );
};

export default ViewStory;
