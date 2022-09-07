import { useReducer, useEffect, useCallback } from 'react';
import API from '../modules/api';

const initialState = {
	loading: false,
	data: null,
	error: null
}

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
			return state;
	}
}

function useAsync(callback, immediate = false) {
	// 첫번째 파라미터 : API요청을 시작하는 함수(callback)
	// 두번째 파라미터 : 해당 함수 안에서 사용하는 useEffect의 변수(deps) -> 비동기함수에서 파라미터가 필요하고 그 파라미터가 바뀔 때 새로운 데이터를 불러오고 싶은 경우에 활용 가능. 기본값 []
	// immediate : 해당 함수를 즉시 실행할지 여부. 기본값 false
	// useCallback : 의존성 배열의 callback값의 변경 여부 확인

	const [state, dispatch] = useReducer(reducer, initialState);
	
	const fetchDatas = useCallback(async () => {
		dispatch({ type: 'LOADING' });
		try {
			const res = await API.get('/todo');
			dispatch({ type: 'SUCCESS', data: res.data.data });	
		}
		catch (e) {
			dispatch({ type: 'ERROR', error: e });
		}
	}, []);
	
	useEffect(() => {
		fetchDatas();
	}, [fetchDatas]);

	return { ...state, fetchDatas };
	// 이 hook에서 반환하는 값 = 요청 관련 상태, fetchData함수
	// fetchData 함수를 반환하여서 나중에 데이터를 쉽게 리로딩 해줄 수 있다.

}

export default useAsync;

