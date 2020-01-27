import React from 'react'

const MCTForm = ({data, item, onChange}) => {
    return(
        <div className="w-1/3">
        <h2 className="text-3xl p-4">{item}</h2>
        <div className="p-4">
            <label className="block">Calories</label>
            <input type="number" name={item + " Calories"} className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e) => onChange(e)}></input>
        </div>
        <div className="p-4">
            <label className="block">Carbs</label>
            <input type="number" name={item + " Carbs"} className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e) => onChange(e)}></input>
        </div>
        <div className="p-4">
            <label className="block">Fat</label>
            <input type="number" name={item + " Fat"} className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e) => onChange(e)}></input>
        </div>
        <div className="p-4">
            <label className="block">Protein</label>
            <input type="number" name={item + " Protein"} className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e) => onChange(e)}></input>
        </div>
        </div>
    )
}

export default MCTForm