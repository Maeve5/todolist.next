import { Checkbox, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import API from '../../modules/api';

function CheckList({ list }) {
	const [todolist, setTodolist] = useState(list);

	// const getData = async () => {
	// 	try {
	// 		const response = await API.get('/todo');
	// 		setTodolist(response.data.data);
	// 	}
	// 	catch (error) {
	// 		console.log(error);
	// 	}
	// }

	// useEffect(() => {
	// 	getData();
	// }, []);
	// console.log('todolist >> ', todolist);

	const beCheck = async ({ target: { id, checked }}) => {
		try {
			const res = await API.patch('/todo/' + id, {
				isCheck: checked ? 'Y' : 'N',
			});
			if (res.status === 200) {
				getData();
			}
		}
		catch (error) {
			console.log(error);
		}
	}

	// const onChange = async ({ target: { id, value }}) => {
	// 	try {
	// 		const res = await API.patch('/todo/' + id, {
	// 			text: value
	// 		})
	// 		console.log(res)
	// 	}
	// 	catch (error) {
			
	// 	}
	// }

	return (
		<>
			<div className='list-wrap'>
				{todolist.map((row) => {
					const {rowKey, isCheck, text} = row;
					return (
						<p key={rowKey} className='check-wrap'>
							<Checkbox
								id={rowKey}
								checked={isCheck === 'Y' ? true : false}
								onClick={beCheck}
								style={{
									textDecoration: isCheck === 'Y'
										? 'line-through'
										: 'none',
									color: isCheck === 'Y'
										? 'gray'
										: 'black'
								}}
							/>
							<Input className='input-todo' placeholder="할 일을 입력하세요." size='small' maxLength={5} value={text}/>
						</p>
					);
				})}
			</div>
			<style jsx>{`
				.list-wrap {margin: 20px}
				.check-wrap 
				.
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
