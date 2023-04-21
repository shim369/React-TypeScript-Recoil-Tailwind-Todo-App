import { addTitleState,addTitleStateLength } from '../states/addTitleState'
import { useRecoilValue } from "recoil"
const AddTask = () => {
    const addTitle = useRecoilValue(addTitleState);
    const addTitleLength = useRecoilValue(addTitleStateLength);

    return (
        <div className="py-5">
        <div className="text-lg font-bold mb-4">{addTitleLength}個のタスクがあります。</div>
        <ul className="list-disc list-inside bg-white rounded-lg shadow-md p-4">
            {addTitle.map((task) => (
                <li className="text-base text-gray-800 border-b border-gray-200 py-2" key={task.id}>{task.title}</li>
            ))}
        </ul>
        </div>
  )
}

export default AddTask