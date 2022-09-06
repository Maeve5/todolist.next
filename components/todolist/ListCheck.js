import { Checkbox, Divider, Button, Tooltip } from 'antd';
import React, { useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import API from '../../modules/api';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

function ListCheck({ posts }) {
	const [checkedList, setCheckedList] = useState(defaultCheckedList);
	const [indeterminate, setIndeterminate] = useState(true);
	const [checkAll, setCheckAll] = useState(false);

	// const onChange = (list) => {
	// 	setCheckedList(list);
	// 	setIndeterminate(!!list.length && list.length < plainOptions.length);
	// 	setCheckAll(list.length === plainOptions.length);
	// };

	const onCheckAllChange = (e) => {
		setCheckedList(e.target.checked ? plainOptions : []);
		setIndeterminate(false);
		setCheckAll(e.target.checked);
	};


	const getData = async () => {
		try {
			const response = await API.get('/todo');
			console.log(response);
		}
		catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
				Check all
			</Checkbox>
			{console.log(posts)}
			{/* <Divider />
			<CheckboxGroup
				style={{
					display: 'block'
				}}
				options={plainOptions}
				value={checkedList}
				onChange={onChange}
			/> */}
			<div display='flex'
				>
				<Tooltip title='add'>
					<Button
						shape='circle'
						icon={<PlusOutlined />}
						size='middle'
					/>
				</Tooltip>
			</div>
		</>
	);
};

// export default function getServerSideProps() {
	
// }

export default ListCheck