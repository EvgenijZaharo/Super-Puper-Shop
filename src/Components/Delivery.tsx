import { useState } from 'react';

export function DeliveryOptions() {
    const [selectedOption, setSelectedOption] = useState('standard');

    return (
        <div className="p-6 max-w-lg mx-auto bg-gray-800 rounded-xl shadow-md space-y-4">
            <h1 className="text-2xl font-bold text-white">Доставка</h1>
            <div>
                <label className="flex items-center space-x-3">
                    <input
                        type="radio"
                        name="delivery"
                        value="standard"
                        checked={selectedOption === 'standard'}
                        onChange={() => setSelectedOption('standard')}
                        className="form-radio h-4 w-4 text-indigo-600 bg-gray-700 border-gray-600 focus:ring-indigo-500"
                    />
                    <span className="text-white">Стандартная доставка</span>
                </label>
                <label className="flex items-center space-x-3 mt-2">
                    <input
                        type="radio"
                        name="delivery"
                        value="express"
                        checked={selectedOption === 'express'}
                        onChange={() => setSelectedOption('express')}
                        className="form-radio h-4 w-4 text-indigo-600 bg-gray-700 border-gray-600 focus:ring-indigo-500"
                    />
                    <span className="text-white">Экспресс доставка</span>
                </label>
            </div>
        </div>
    );
}
