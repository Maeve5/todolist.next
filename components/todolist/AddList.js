import React from 'react';
import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const AddList = () => {
	return (
		<div>
			<Tooltip title='add'>
				<Button
					shape='circle'
					icon={<PlusOutlined />}
					size='middle'
					onClick={() => <AddList />}
				/>
			</Tooltip>

		</div>
	);
};

export default AddList;