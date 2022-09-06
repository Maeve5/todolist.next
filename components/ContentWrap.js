import { Button, Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { CalendarOutlined, UnorderedListOutlined, HomeOutlined } from '@ant-design/icons';
import React from 'react';
import Router from 'next/router';

function ContentWrap({ children }) {

	return (
		<>
			<Layout>
				<Sider
					width={160}
					style={{ paddingTop: 16 }}
				>
					<div className='side-wrap'>
						<Button
							size='large'
							type='link'
							href='/'
							icon={<HomeOutlined />}
							style={{marginBottom: 10}}
							block
						>Home</Button>
						<Menu
							theme="dark"
							defaultSelectedKeys={['1']}
							mode="inline"
							onClick={(e) => {
								Router.push(`/${e.key}`)
							} }
							items={[
								{
									key: 'calendar',
									icon: <CalendarOutlined />,
									label: 'Calendar'
								},
								{
									key: 'todolist',
									icon: <UnorderedListOutlined />,
									label: 'Todolist'
								}
							]}
						/>
					</div>
				</Sider>

				<Layout>
					<Header>
					</Header>
					<Content>{children}</Content>
					<Footer style={{ textAlign: 'center', fontSize: 10 }}>
						© Maeve
					</Footer>
				</Layout>

			</Layout>

			<style jsx>{`
				.side-wrap {width: fit-content}
			`}</style>
		</>
	)
}

export default ContentWrap
