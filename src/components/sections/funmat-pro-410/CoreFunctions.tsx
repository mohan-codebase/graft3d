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
    <section className="w-full py-16 bg-[#f5f9ff]">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-2">Core Functions</h2>
        <p className="text-gray-600 mb-8">INTAM Cloud Smart Manufacturing Ecology</p>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm">
          <table className="w-full min-w-[720px]">
            <thead>
              <tr className="bg-[#e6f4ff] text-black">
                {tableData.headers.map((header) => (
                  <th key={header} className="text-left p-4 text-sm font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="align-top">
                {tableData.columns.map((items, idx) => (
                  <td key={tableData.headers[idx]} className="p-4">
                    <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild className="rounded-full px-6 py-4">
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
