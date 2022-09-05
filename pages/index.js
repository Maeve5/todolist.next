import { Button } from 'antd';
import { CalendarOutlined, UnorderedListOutlined } from '@ant-design/icons';
import React from 'react';
import Layout from '../components/Layout';

function Home() {

    return (
        <Layout>
            <Button
                size='large'
                type='link'
                icon={<CalendarOutlined />}
                block
            >Calendar</Button> 
            <Button
                size='large'
                type='link'
                icon={<UnorderedListOutlined />}
                block
            >Todolist</Button>
        </Layout>
    );
}

export default Home
