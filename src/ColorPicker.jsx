import React, { useState } from 'react';

export default function ColorPicker() {
const [color,setColor]=useState('#FFFFFF');
const [text,setText]=useState('An Example Text');
const [isbold,setBold]=useState(false);
const [isItalic, setItalic] = useState(false);
function handleColorChange(event){
    setColor(event.target.value);
}
function handleTextChange(event){
    setText(event.target.value);
}
function handleBoldChange(event){
    setBold(!isbold);
}
function handleItalicChange(event){
    setItalic(!isItalic);
}

return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg flex flex-col gap-4 items-center">
        {/* <h1 className="text-2xl font-bold text-indigo-600 mb-2">Tumblr Tint Text</h1> */}
        <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Roboto+Slab&pause=1000&color=8A99F7&center=true&vCenter=true&width=435&lines=Tumblr+Text+Tint" alt="Typing SVG" /></a>
        <p 
            className="w-full text-center py-2 rounded-md font-mono mb-2"
            style={{background: color, color: "#222"}}
        >
            Selected Color: {color}
        </p>
        <input
            type='color'
            value={color}
            onChange={handleColorChange}
            className="w-12 h-12 border-2 border-indigo-300 rounded-full cursor-pointer mb-2 custom-color"
        />
        <textarea
            value={text}
            onChange={handleTextChange}
            placeholder='Type your text here...'
            rows='4'
            className="w-full p-2 border border-indigo-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
        />
        <div className='flex gap-4 w-full justify-center'>
            <button
            onClick={handleBoldChange}
            className='px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 cursor-pointer font-bold'
            >B</button>
            <button
            onClick={handleItalicChange}
            className='px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 cursor-pointer italic'
            >I</button>
            </div>
        <div className="w-full">
            <label className="block text-sm text-gray-500 mb-1">Copy this HTML for Tumblr post:</label>
            <pre className="bg-gray-100 rounded-md p-3 text-sm overflow-x-auto border border-gray-200">{`<span style="color: ${color}; font-weight: ${isbold ? "bold" : "normal"}; font-style:${isItalic ? "italic" : "normal"}">${text}</span>`}</pre>
        </div>
        <div className="w-full text-center mt-2">
            <span 
                className={`inline-block px-4 py-2 rounded-md ${isbold ? 'font-bold' : ''} ${isItalic ? 'italic' : ''}`}
                style={{color: color, background: "#f3f4f6", border: `1px solid ${color}`, }}
            >   
                Preview: {text || "Your text here"}
            </span>
        </div>
        </div>
)
}