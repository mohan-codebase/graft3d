import React from 'react';

const specs = [
    { label: 'Light Source', standard: 'White Light, Visible', body: 'Infrared light, invisible' },
    { label: 'Safety', standard: 'LED light (eye-safe)', body: 'CLASS I (eye-safe)' },
    { label: 'Scan Accuracy', standard: 'Up to 0.05 mm', body: 'Up to 0.6 mm' },
    { label: 'Volumetric Accuracy', standard: '0.05 + 0.1 mm/m', body: '/' },
    { label: 'Scan & Align Speed', standard: '1,200,000 points/s, 20 FPS', body: '720,000 points/s, 20 FPS' },
    { label: 'Align Modes', standard: 'Markers, Feature, Hybrid, Texture', body: 'Feature Alignment' },
    { label: 'Camera Frame Rate', standard: '55 FPS', body: '55 FPS' },
    { label: 'Working Distance', standard: '470 mm', body: '470 mm' },
    { label: 'Depth of Field', standard: '200 - 700 mm', body: '200 - 1500 mm' },
    { label: 'Maximum Scan Range', standard: '420 mm * 440 mm', body: '780 mm * 900 mm' },
    { label: 'Point Distance', standard: '0.25 mm - 3 mm', body: '0.5 mm - 3 mm' },
    { label: 'Built-in Color Camera', standard: 'Yes', body: 'Yes' },
    { label: 'Color Scanning', standard: 'Support', body: 'Support' },
    { label: 'Output Format', standard: 'OBJ, STL, PLY, P3, 3MF', body: 'OBJ, STL, PLY, P3, 3MF' },
    { label: 'Dimension', standard: '108 * 110 * 237 mm', body: '108 * 110 * 237 mm' },
    { label: 'Weight', standard: '703 g', body: '703 g' },
];

const Specifications = () => {
    return (
        <div className="py-16 border-b border-gray-100">
            <h2 className="text-3xl font-extrabold text-[#1171bd] mb-10 uppercase tracking-tight">
                Technical Specifications
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#1e73be] text-white">
                            <th className="p-4 border-r border-[#165a94] font-bold">Specification</th>
                            <th className="p-4 border-r border-[#165a94] font-bold">Standard Scan</th>
                            <th className="p-4 font-bold">Body Scan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {specs.map((spec, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="p-4 border-r border-gray-200 font-bold text-gray-700">{spec.label}</td>
                                <td className="p-4 border-r border-gray-200 text-gray-600 italic">{spec.standard}</td>
                                <td className="p-4 text-gray-600 italic">{spec.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#f8fbff] p-8 rounded-2xl border border-blue-50 shadow-sm">
                    <h3 className="text-xl font-bold text-[#1a365d] mb-4">Recommended Configuration</h3>
                    <ul className="space-y-3 text-gray-600 text-[15px]">
                        <li><span className="font-bold text-[#1e73be]">OS:</span> Windows 10 (64-bit)</li>
                        <li><span className="font-bold text-[#1e73be]">Graphics Card:</span> NVIDIA GTX 1080 or higher</li>
                        <li><span className="font-bold text-[#1e73be]">Video Memory:</span> ≥ 4 GB</li>
                        <li><span className="font-bold text-[#1e73be]">Processor:</span> Intel Core i7-8700</li>
                        <li><span className="font-bold text-[#1e73be]">Memory:</span> ≥ 32 GB</li>
                    </ul>
                </div>
                <div className="flex items-center justify-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-gray-500 italic text-center">
                        * All specifications are subject to change without notice. Contact Graft3D for latest details.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Specifications;
