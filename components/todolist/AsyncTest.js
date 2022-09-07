import React, { useState } from "react";
import API from "../../modules/api";
import useAsync from "../../hooks/useAsync";

const apiRequest = async (data) => {
	try {
		const res = await API.patch('/todo');
		const response = res.data;
		return response.data;
	}
	catch (e) {
		console.log(e);
	}
}

function AsyncTest() {
	const { loading, error, data, fetchDatas: list } = useAsync(apiRequest);
	// useAsync에서 반환한 { ...state, fetchDatas }를 { loading, error, data, fetchDatas: list }로 받을 수 있다.
	// fetchDatas를 list로 사용하겠다.
	
	const isCheck = async ({ target: {id, checked }}) => {
		const res = await API.patch('/todo/' + id, {
			isCheck: checked ? 'Y' : 'N',
		});

		const result = await list();
		console.log('apiRequest res >> ', data);
	}

	if (loading) return <h1>loading...</h1>;
	if (error) return <h1>{error}</h1>;

	return (
		<>
			<div>
				{console.log(data)}
			{data.map((row) => {
                return (
                    <div key={row.rowKey} className='listItem'>
                        <input
                            type='checkbox'
                            id={row.rowKey}
                            checked={row.isCheck === 'Y' ? true : false}
                            onChange={isCheck} />
                        <div style={{
                            display: 'inline-block',
                            color: row.isCheck === 'Y'
                                ? 'gray'
                                : 'black'
                        }}>{row.text}</div>
                    </div>
                )
            })}
			</div>
		</>
	);
};

export default AsyncTest;