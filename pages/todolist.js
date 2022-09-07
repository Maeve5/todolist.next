import React from 'react';
import ContentWrap from '../components/ContentWrap';
import CheckList from '../components/todolist/CheckList';
import DateList from '../components/todolist/DateList';
import DoneList from '../components/todolist/DoneList';
import Test from '../components/todolist/test';
import AsyncTest from '../components/todolist/AsyncTest';

function Todolist({ data, list }) {
	return (
		<ContentWrap>
			<DateList />
			<DoneList />
			<CheckList list={list} />
			<Test />
			<AsyncTest />
		</ContentWrap>
	)
}

export async function getServerSideProps() {
	try {
		const res = await fetch('https://api.kkot.farm/todo');
		
		if(res.status === 200) {
			const data = await res.json();
			const message = data.message;
			const list = data.data;
			// console.log('data >> ',data);
			return { props: { data, list }}
		}
		return { props: { data, list } };
	}
	catch (error) {
		console.log('err >> ',error);
		return { props: {} }
	}
}

export default Todolist