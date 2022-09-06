import { Calendar } from 'antd';
import React from 'react';
import ContentWrap from '../components/ContentWrap';

function Canlendar() {
	const onPanelChange = (value, mode) => {
		console.log(value.format('YYYY-MM-DD'), mode);
	};

	return (
		<ContentWrap>
			<Calendar onPanelChange={onPanelChange} />
		</ContentWrap>
	);
};

export default Canlendar