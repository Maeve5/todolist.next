import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Typography } from 'antd';
import React from 'react';

const menu = (
	<Menu
		selectable
		defaultSelectedKeys={['3']}
		items={[
			{
				key: '1',
				label: '전체',
			},
			{
				key: '2',
				label: '완료',
			},
			{
				key: '3',
				label: '미완료',
			},
		]}
	/>
);

function DoneList() {

	return (
		<>
			<div>
				<Dropdown overlay={menu}>
					<Typography.Link>
						<Space>
							정렬
							<DownOutlined />
						</Space>
					</Typography.Link>
				</Dropdown>
			</div>
		</>
	)
}

export default DoneList