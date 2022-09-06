import { DatePicker } from 'antd';
import moment from 'moment';
import React from 'react';
import DoneList from './DoneList';
const dateFormat = 'YYYY/MM/DD';
const today = new Date();

const year = today.getFullYear();
const month = ('0' + (today.getMonth() + 1)).slice(-2);
const day = ('0' + today.getDate()).slice(-2);

const dateString = year + '/' + month  + '/' + day;

function DateList() {
	return (
		<>
			<div>
				<DatePicker
					size='small'
					defaultValue={moment(dateString, dateFormat)}
					format={dateFormat}
				/>
			</div>
			<DoneList />
		</>
	)
}

export default DateList