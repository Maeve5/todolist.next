import { Button, Checkbox, Tooltip } from 'antd';
import React, { useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import API from '../../modules/api';
import AddList from './AddList';

function CheckList() {
	const [todolist, setTodolist] = useState([]);

	const getData = async () => {
		try {
			const response = await API.get('/todo');
			setTodolist(response.data.data);
		}
		catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	const isCheck = (e) => {
		console.log(`checked = ${e.target.checked}`);
	  };

	return (
		<>
			<div className='list-wrap'>
				{todolist.map((row) => {
					return (
						<p key={row.rowKey} className='check-wrap'>
							<Checkbox
								rowKey={row.rowKey}
								isCheck={row.isCheck}
								onChange={isCheck}
							>{row.text}</Checkbox>
						</p>
					);
				})}
			</div>

			<Tooltip title='add'>
				<Button
					shape='circle'
					icon={<PlusOutlined />}
					size='middle'
					onClick={() => <AddList />}
				/>
			</Tooltip>

			<style jsx>{`
				.list-wrap {margin: 20px}
				.check-wrap 
			`}</style>
		</>
	);
};

// export async function getServerSideProps() {
// 	const apiUrl = 'https://api.kkot.farm/todo';
// 	const res = await Axios.get(apiUrl);
// 	console.log(res);
// 	const data = res.data.data;

// 	return {
// 		props: {
// 			item: data,
// 		},
// 	};
// }

export default CheckList
