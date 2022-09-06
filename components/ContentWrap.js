import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { CalendarOutlined, UnorderedListOutlined } from '@ant-design/icons';
import React from 'react';
import Link from 'next/link';

function ContentWrap({ children }) {

	return (
		<Layout>
			<Header
				style={{
					paddingLeft: 24,
					fontSize: 16
				}}
			>
				<Link href='/'>
					Home
				</Link>
			</Header>

			<Layout>
				<Sider
					// breakpoint="lg"
					// collapsedWidth="0"
					// onBreakpoint={(broken) => {
					// 	console.log(broken);
					// }}
					// onCollapse={(collapsed, type) => {
					// 	console.log(collapsed, type);
					// }}
					width={160}
				>
					<div className="logo" />
					<Menu
						theme="dark"
						mode="inline"
						defaultSelectedKeys={['2']}
						items={[CalendarOutlined, UnorderedListOutlined].map(
							(icon, index) => ({
								key: String(index + 1),
								icon: React.createElement(icon),
								label: `nav ${index + 1}`,
							}),
						)}
						// items={[
						// 	{
						// 		key: 'calendar',
						// 		icon: CalendarOutlined,
						// 		label: 'Calendar'
						// 	},
						// 	{
						// 		key: 'todolist',
						// 		icon: UnorderedListOutlined,
						// 		label: 'Todolist'
						// 	}
						// ]}
					/>
				</Sider>
				<Content>{children}</Content>
			</Layout>

			<Footer
				style={{
					textAlign: 'center',
					paddingLeft: 210
				}}
			>© Maeve</Footer>
		</Layout>
	)
}

export default ContentWrap
