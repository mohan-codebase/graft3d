import { Button } from "@/components/ui/Button";

const tableData = {
  headers: ["Before Printing", "During Printing", "After Printing"],
  columns: [
    [
      "Additive model design",
      "Solution comparison and parameter preview",
      "Backward design capabilities",
      "INTAMSUITE NEO integration",
    ],
    [
      "Efficient online production and printing",
      "Smart project and study-based workflow management",
      "Powerful material and process management library",
      "Adaptive line width function",
    ],
    [
      "Material and process optimization",
      "Print quality prediction and tracking",
      "Geometry error detection and repair",
      "Open process parameter settings",
      "Slicing results preview and comparison",
      "SLicDAM-based manufacturability analysis",
      "Multiple support types for prints",
      "Remote monitoring and printer control",
    ],
  ],
};

const CoreFunctions = () => {
  return (
    <section className="w-full py-16 bg-[#f4f8fc]">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center">
        {/* Titles */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f6cbd] mb-4 text-center">
          Core Functions
        </h2>
        <p className="text-gray-800 text-lg md:text-xl font-bold mb-10 text-center">
          INTAM™ Cloud Smart Manufacturing Ecology
        </p>

        {/* Table Container */}
        <div className="w-full overflow-x-auto bg-[#fafafa] rounded-2xl border border-gray-200 shadow-sm max-w-[1000px]">
          <table className="w-full min-w-[720px] table-fixed">
            {/* Headers */}
            <thead>
              <tr className="bg-[#1f73b7] text-white">
                {tableData.headers.map((header, idx) => (
                  <th
                    key={header}
                    className={`py-5 px-6 text-center text-sm md:text-base font-bold ${idx !== tableData.headers.length - 1 ? "border-r border-[#438bc5]" : ""
                      }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              <tr className="align-top divide-x divide-gray-100">
                {tableData.columns.map((items, colIdx) => (
                  <td key={tableData.headers[colIdx]} className="p-6 md:p-8 w-1/3">
                    <ul className={`list-disc pl-5 space-y-3 text-sm font-medium ${colIdx === 2 ? "text-gray-500" : "text-gray-800"
                      }`}>
                      {items.map((item) => (
                        <li key={item} className="leading-snug">{item}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Button */}
        <div className="mt-12 flex justify-center">
          <Button asChild className="rounded-full px-8 py-6 bg-white text-[#1f73b7] border-2 border-[#1f73b7] hover:bg-blue-50 font-bold text-[15px] shadow-sm transition-colors">
            <a
              href="https://graft3d.com/wp-content/uploads/2026/01/Intamsys-EN-Brochure-FUNMAT-PRO-41O_compressed.pdf"
              download
              target="_blank"
              rel="noreferrer"
            >
              Download brochure
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoreFunctions;
