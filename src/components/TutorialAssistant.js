import React, { useState, useEffect } from 'react';

// Komponente definieren und Props entgegennehmen
function TutorialAssistant({ content }) {
  // State für den Fortschritt der Abschnitte
  const [sectionProgress, setSectionProgress] = useState({});
  
  // State für die geöffneten/geschlossenen Abschnitte
  const [openSections, setOpenSections] = useState({});
  
  // NEU: State für erledigte Schritte (Tasks)
  // Speichert { stepId: true/false }
  const [completedSteps, setCompletedSteps] = useState({});
  
  // NEU: State für den Gesamtfortschritt
  const [overallProgress, setOverallProgress] = useState(0);
  
  // Funktion zum Umschalten des Öffnungszustands eines Abschnitts
  const toggleSection = (index, event) => {
    // Stellen wir sicher, dass das Event nicht weitergeleitet wird
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    console.log("Toggle section", index, "Current state:", openSections[index]); // Debug-Ausgabe
    
    setOpenSections(prev => {
      const newState = {
        ...prev,
        [index]: !prev[index]
      };
      console.log("New state:", newState); // Debug-Ausgabe
      return newState;
    });
  };

  // NEU: Funktion zum Umschalten des Erledigungsstatus eines Schritts
  const handleCheckboxChange = (stepId) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepId]: !prev[stepId] // Toggle den Status
    }));
  };

  // NEU: Effekt zur Berechnung des Fortschritts, wenn sich erledigte Schritte ändern
  useEffect(() => {
    if (!content || !content.sections) return;

    let totalSteps = 0;
    let totalCompleted = 0;
    const newSectionProgress = {};

    content.sections.forEach((section, index) => {
      const sectionSteps = section.steps || [];
      const completedInSection = sectionSteps.filter(step => completedSteps[step.id]).length;
      const totalInSection = sectionSteps.length;

      totalSteps += totalInSection;
      totalCompleted += completedInSection;

      newSectionProgress[index] = totalInSection > 0 ? Math.round((completedInSection / totalInSection) * 100) : 0;
    });

    setSectionProgress(newSectionProgress);
    setOverallProgress(totalSteps > 0 ? Math.round((totalCompleted / totalSteps) * 100) : 0);

  // Abhängigkeiten: Neuberechnung bei Änderung der erledigten Schritte oder des Inhalts
  }, [completedSteps, content]);

  // Initialisierung des completedSteps-States (optional, falls Fortschritt gespeichert werden soll)
  // useEffect(() => { // Diesen useEffect entfernen, da er leer ist und aktuell nicht benötigt wird
  //   // Hier könnte man z.B. gespeicherten Fortschritt aus localStorage laden
  //   // setCompletedSteps(JSON.parse(localStorage.getItem('tutorialProgress') || '{}'));
  // }); // Entfernen

  // Prüfen, ob content existiert
  if (!content || !content.sections) {
    // Zeige eine klarere Lade-/Fehlermeldung an
    return <div className="p-4 text-center text-gray-500">Tutorial-Inhalte werden geladen oder sind nicht verfügbar...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-800">{content.title}</h2>
      
      {/* Gesamtfortschritt */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue-700">Gesamtfortschritt</span>
          <span className="text-sm font-medium text-blue-700">{overallProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${overallProgress}%` }}></div>
        </div>
      </div>

      {/* Abschnitte des Tutorials */}
      {content.sections.map((section, index) => (
        <div key={section.id || index} className="mb-4 border rounded-lg bg-white shadow-sm overflow-hidden"> {/* Verwende section.id als Key wenn möglich */}
          {/* Hauptbereich (immer sichtbar) */}
          <div className="w-full p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 cursor-pointer"
               onClick={(e) => toggleSection(index, e)}>
            <span className="font-semibold text-gray-700">{section.title}</span>
            <div className="flex items-center space-x-3">
              {/* Fortschrittsanzeige */}
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${sectionProgress[index] || 0}%` }}></div>
              </div>
              <span className="text-sm text-gray-600 w-8 text-right">{sectionProgress[index] || 0}%</span>
              
              {/* Pfeil-Icon - dreht sich je nach Zustand */}
              <svg 
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openSections[index] ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          
          {/* Aufklappbarer Inhalt */}
          {openSections[index] && (
            <div className="p-4 border-t border-gray-200">
              {/* 1. Beschreibung anzeigen (sofort sichtbar, wenn Abschnitt offen) */}
              {section.description ? (
                <p className="text-gray-600 mb-3">{section.description}</p>
              ) : (
                <p className="text-gray-400 italic mb-3">Keine Beschreibung für diesen Abschnitt vorhanden.</p>
              )}

              {/* 2. Schritte anzeigen (sollten auch sofort sichtbar sein, wenn Abschnitt offen) */}
              {section.steps && section.steps.length > 0 ? (
                <div className="mt-2">
                  <h4 className="font-semibold text-gray-700 mb-1">Schritte:</h4>
                  {section.steps.map((step, stepIndex) => (
                    <div key={step.id || stepIndex} className="flex items-center ml-2 mb-2">
                      <input
                        type="checkbox" // Sicherstellen, dass der Typ gesetzt ist
                        id={`step-${step.id}`}
                        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                        checked={completedSteps[step.id] || false}
                        onChange={() => handleCheckboxChange(step.id)}
                      />
                      {/* Label hinzugefügt für bessere Klickbarkeit */}
                      <label htmlFor={`step-${step.id}`} className="text-gray-700 cursor-pointer flex-1">
                        {typeof step === 'string' ? step : step.text || 'Ungültiger Schritt'}
                      </label>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 italic">Keine Schritte für diesen Abschnitt definiert.</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Den default export hinzufügen
export default TutorialAssistant; 