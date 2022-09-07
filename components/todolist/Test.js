import React, { useEffect, useReducer } from 'react';
import API from '../../modules/api';

// useAsync에서는 Promise의 결과를 바로 데이터에 담기 때문에, 요청한 이후 response에서 데이터를 추출하여 반환하는 함수 따로 생성
// const getUsers = async () => {
// 	const response = await axios.get('https://api.kkot.farm/todo');
// 	console.log(response.data.data);
// 	return response.data.data;
// }

const reducer = (state, action) => {
	switch (action.type) {
		case 'LOADING':
			return {
				loading: true,
				data: null,
				error: null
			};
		case 'SUCCESS':
			return {
				loading: false,
				data: action.data,
				error: null
			};
		case 'ERROR':
			return {
				loading: false,
				data: null,
				error: action.error
			};
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

function Test() {
	// const [datas, setDatas] = useState(null);
	// const [loading, setLoading] = useState(false);
	// const [error, setError] = useState(null);

	const [state, dispatch] = useReducer( reducer, {
		loading: false,
		data: null,
		error: null
	});

	const fetchDatas = async () => {
		// try {
		// 	setError(null);
		// 	setDatas(null);
		// 	setLoading(true);

		// 	const response = await axios.get('https://api.kkot.farm/todo');
		// 	setDatas(response.data.data);
		// } catch (e) {
		// 	setError(e);
		// }
		// setLoading(false);

		dispatch({ type: 'LOADING' });
		try {
			const res = await API.get('/todo');
			dispatch({ type: 'SUCCESS', data: res.data.data });
		}
		catch (e) {
			dispatch({ type: 'ERROR', error: e });
		}

	};

	useEffect(() => {
		fetchDatas();
	}, []);


	const { loading, data: datas, error } = state; // state.data를 datas 키워드로 조회

	if (loading) return <div>로딩중..</div>;
	if (error) return <div>에러가 발생했습니다</div>;
	if (!datas) return null;

	return (
		<>
			<ul>
				{datas.map(row => {
					return (<li key={row.rowKey}>
						({row.isCheck}) {row.text}
					</li>)
				})}
			</ul>
			<button onClick={fetchDatas}>다시 불러오기</button>
		</>
	)
}

export default Test