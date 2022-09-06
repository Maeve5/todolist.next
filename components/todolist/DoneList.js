import CheckList from "./CheckList"
import { Button } from "antd"

function DoneList() {



	return (
		<>
			<div>
				<Button size='small'>완료</Button> | <Button size='small'>미완료</Button>
			</div>
			<CheckList />
		</>
	)
}

export default DoneList