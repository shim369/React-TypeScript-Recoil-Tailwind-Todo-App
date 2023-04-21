import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil';
import { inputTitleState } from '../states/inputTitleState'
import { addTitleState } from '../states/addTitleState'

const getKey = () => Math.random().toString(32).substring(2);

const InputTask = () => {
    const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);
    const [addTitle, setAddTitle] = useRecoilState(addTitleState);

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputTitle(e.target.value);
        },
        [setInputTitle]
    );

    const handleClick = () => {
        setAddTitle([...addTitle, {id: getKey(), title: inputTitle }])
        setInputTitle("");
    };

    return (
      <div className="flex">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out mr-1"
          type="text"
          placeholder="Add task here"
          onChange={onChange}
          value={inputTitle}
        />
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          type="button"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
  )
}

export default InputTask