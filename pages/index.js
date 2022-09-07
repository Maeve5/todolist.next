import { Button } from 'antd';
import { CalendarOutlined, UnorderedListOutlined } from '@ant-design/icons';
import React from 'react';
import Link from 'next/link';

function Home() {

    return (
        <>
            <div className='home'>
                <Button
                    size='large'
                    type='link'
                    icon={<CalendarOutlined />}
                    href='/calendar'
                    block
                >Calendar</Button>
                <Button
                    size='large'
                    type='link'
                    icon={<UnorderedListOutlined />}
                    href='/todolist'
                    block
                >Todolist</Button>
            </div>

            <style jsx>{`
                .home {margin: 50% 0}
            `}</style>
        </>
    );
}

export default React.memo(Home);
