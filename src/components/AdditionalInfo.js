import React, { useState } from 'react';

// Helper-Funktion zum Rendern von HTML-Strings (vorsichtig verwenden!)
function createMarkup(htmlString) {
  return { __html: htmlString };
}

function AdditionalInfo({ prompts, challenges, benefits, roi }) {
  // NEU: State für geöffnete Abschnitte (Prompts, Challenges, etc.)
  const [openSections, setOpenSections] = useState({});

  // NEU: Funktion zum Umschalten des Öffnungszustands
  const toggleSection = (sectionKey) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  return (
    <div className="mt-8 space-y-8">

      {/* Hilfreiche Prompts */}
      {prompts && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          {/* Klickbarer Header */}
          <div className="w-full p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 cursor-pointer" onClick={() => toggleSection('prompts')}>
            <h3 className="text-xl font-bold text-indigo-700">Hilfreiche Prompts & Anweisungen</h3>
            {/* Pfeil-Icon */}
            <svg className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openSections['prompts'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          {/* Aufklappbarer Inhalt */}
          {openSections['prompts'] && (
            <div className="p-6 border-t border-gray-200">
              {prompts.gptHints && (
                <div className="mb-4 p-4 bg-indigo-50 rounded border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">Hinweise für den GPT</h4>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{prompts.gptHints}</p>
                </div>
              )}
              {prompts.gptInstructions && (
                <div className="mb-4 p-4 bg-indigo-50 rounded border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">GPT Anweisungen</h4>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{prompts.gptInstructions}</p>
                </div>
              )}
              {prompts.perplexityTemplate && (
                <div className="p-4 bg-gray-100 rounded border border-gray-300">
                  <h4 className="font-semibold text-gray-800 mb-2">Perplexity Recherche-Template</h4>
                  <pre className="text-xs text-gray-600 whitespace-pre-wrap overflow-x-auto bg-white p-2 rounded border">
                    {prompts.perplexityTemplate}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Herausforderungen */}
      {challenges && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          {/* Klickbarer Header */}
          <div className="w-full p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 cursor-pointer" onClick={() => toggleSection('challenges')}>
            <h3 className="text-xl font-bold text-red-700">{challenges.title || "Herausforderungen"}</h3>
            <svg className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openSections['challenges'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          {/* Aufklappbarer Inhalt */}
          {openSections['challenges'] && (
            <div className="p-6 border-t border-gray-200">
              {challenges.items && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {challenges.items.map((item, index) => (
                    <div key={index} className={`p-4 rounded border border-${item.color}-200 bg-${item.color}-50`}>
                      <h4 className={`font-semibold text-${item.color}-800 mb-1 flex items-center`}>
                        <span className="mr-2">{item.icon}</span> {item.title}
                      </h4>
                      <p className="text-sm text-gray-700" dangerouslySetInnerHTML={createMarkup(item.description)}></p>
                    </div>
                  ))}
                </div>
              )}
              {challenges.statistics && (
                <div className="mb-4 overflow-x-auto">
                  <h4 className="font-semibold text-gray-700 mb-2">Statistiken (Typische Raten)</h4>
                  <table className="min-w-full text-sm border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        {challenges.statistics.headers.map((header, hIndex) => (
                          <th key={hIndex} className="p-2 border-b border-gray-300 text-left font-medium text-gray-600">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {challenges.statistics.rows.map((row, rIndex) => (
                        <tr key={rIndex} className="hover:bg-gray-50">
                          {row.map((cell, cIndex) => (
                            <td key={cIndex} className="p-2 border-b border-gray-200 text-gray-700">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {challenges.centralProblems && (
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Zentrale Probleme</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {challenges.centralProblems.map((problem, index) => (
                      <li key={index} dangerouslySetInnerHTML={createMarkup(problem)}></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

       {/* Vorteile */}
       {benefits && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          {/* Klickbarer Header */}
          <div className="w-full p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 cursor-pointer" onClick={() => toggleSection('benefits')}>
            <h3 className="text-xl font-bold text-green-700">Vorteile des GPT-gestützten Ansatzes</h3>
            <svg className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openSections['benefits'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          {/* Aufklappbarer Inhalt */}
          {openSections['benefits'] && (
            <div className="p-6 border-t border-gray-200">
              {benefits.strategic && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3 text-lg">Strategische Vorteile</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {benefits.strategic.map((item, index) => (
                      <div key={index} className={`p-4 rounded border border-${item.color}-200 bg-${item.color}-50`}>
                        <h5 className={`font-semibold text-${item.color}-800 mb-1 flex items-center`}>
                          <span className="mr-2 text-xl">{item.icon}</span> {item.title}
                        </h5>
                        <p className="text-sm text-gray-700" dangerouslySetInnerHTML={createMarkup(item.description)}></p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
               {benefits.operational && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3 text-lg">Operative Vorteile</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {benefits.operational.map((item, index) => (
                      <div key={index} className={`p-4 rounded border border-${item.color}-200 bg-${item.color}-50`}>
                        <h5 className={`font-semibold text-${item.color}-800 mb-1 flex items-center`}>
                          <span className="mr-2 text-xl">{item.icon}</span> {item.title}
                        </h5>
                        <p className="text-sm text-gray-700" dangerouslySetInnerHTML={createMarkup(item.description)}></p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {benefits.scalability && (
                 <div className="mb-6 overflow-x-auto">
                   <h4 className="font-semibold text-gray-700 mb-2 text-lg">Skalierbarkeit</h4>
                   <table className="min-w-full text-sm border border-gray-300">
                     <thead className="bg-gray-100">
                       <tr>
                         {benefits.scalability.headers.map((header, hIndex) => (
                           <th key={hIndex} className="p-2 border-b border-gray-300 text-left font-medium text-gray-600">{header}</th>
                         ))}
                       </tr>
                     </thead>
                     <tbody>
                       {benefits.scalability.rows.map((row, rIndex) => (
                         <tr key={rIndex} className="hover:bg-gray-50">
                           {row.map((cell, cIndex) => (
                             <td key={cIndex} className="p-2 border-b border-gray-200 text-gray-700">{cell}</td>
                           ))}
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
              )}
               {benefits.testimonial && (
                <div className="p-4 bg-green-50 border border-green-200 rounded">
                  <h4 className="font-semibold text-green-800 mb-2">Testimonial</h4>
                  <blockquote className="text-sm text-gray-700 italic" dangerouslySetInnerHTML={createMarkup(benefits.testimonial)}></blockquote>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ROI */}
      {roi && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          {/* Klickbarer Header */}
          <div className="w-full p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 cursor-pointer" onClick={() => toggleSection('roi')}>
            <h3 className="text-xl font-bold text-purple-700">Return on Investment (ROI)</h3>
            <svg className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openSections['roi'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          {/* Aufklappbarer Inhalt */}
          {openSections['roi'] && (
            <div className="p-6 border-t border-gray-200">
              {roi.timeComparison && (
                <div className="mb-6 overflow-x-auto">
                  <h4 className="font-semibold text-gray-700 mb-2 text-lg">Zeitvergleich</h4>
                  <table className="min-w-full text-sm border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        {roi.timeComparison.headers.map((header, hIndex) => (
                          <th key={hIndex} className="p-2 border-b border-gray-300 text-left font-medium text-gray-600">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {roi.timeComparison.rows.map((row, rIndex) => (
                        <tr key={rIndex} className="hover:bg-gray-50">
                          {row.map((cell, cIndex) => (
                            <td key={cIndex} className="p-2 border-b border-gray-200 text-gray-700">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {roi.costCalculation && (
                <div className="mb-6 overflow-x-auto">
                  <h4 className="font-semibold text-gray-700 mb-2 text-lg">Kostenkalkulation (Beispiel)</h4>
                  <table className="min-w-full text-sm border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        {roi.costCalculation.headers.map((header, hIndex) => (
                          <th key={hIndex} className="p-2 border-b border-gray-300 text-left font-medium text-gray-600">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {roi.costCalculation.rows.map((row, rIndex) => (
                        <tr key={rIndex} className="hover:bg-gray-50">
                          {row.map((cell, cIndex) => (
                            <td key={cIndex} className="p-2 border-b border-gray-200 text-gray-700">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {roi.additionalBenefits && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2 text-lg">Zusätzliche Vorteile</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    {roi.additionalBenefits.map((benefit, index) => (
                      <li key={index} dangerouslySetInnerHTML={createMarkup(benefit)}></li>
                    ))}
                  </ul>
                </div>
              )}
              {roi.conclusion && (
                <div className="p-4 bg-purple-50 border border-purple-200 rounded">
                  <h4 className="font-semibold text-purple-800 mb-2">Fazit</h4>
                  <p className="text-sm text-gray-700" dangerouslySetInnerHTML={createMarkup(roi.conclusion)}></p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

    </div>
  );
}

export default AdditionalInfo; 