import React, { useState } from 'react';
import TutorialAssistant from './components/TutorialAssistant';
import AdditionalInfo from './components/AdditionalInfo'; // NEU: Importieren
import tutorialContentB2B from './data/tutorialContent'; // B2B Inhalte
import meetingGptContent from './data/meetingGptContent'; // Meeting Inhalte
// import ReactPlayer from 'react-player/lazy'; // Nicht mehr benötigt
import './App.css';

/**
 * Hauptkomponente der Anwendung
 * Integriert den Tutorial-Assistenten und zeigt Beispielinhalte an
 */
function App() {
  // const [showTutorial, setShowTutorial] = useState(true); // Zustand nicht mehr benötigt
  // --- NEU: State für die Sichtbarkeit des Video-Modals ---
  // const [showVideo, setShowVideo] = useState(false);
  // --- NEU: State für ReactPlayer Modal ---
  // const [showReactPlayer, setShowReactPlayer] = useState(false);
  const [selectedTutorial, setSelectedTutorial] = useState('b2b');
  const tutorials = {
    b2b: tutorialContentB2B,
    meeting: meetingGptContent
  };

  // Für Debugging: Überprüfen der Struktur
  // console.log("Tutorial Content:", tutorialContentB2B); // Kann entfernt werden
  // console.log("Tutorial Content Title:", tutorialContentB2B.title); // Kann entfernt werden
  // console.log("Tutorial Content Sections:", tutorialContentB2B.sections); // Kann entfernt werden

  // --- Debugging Logs ---
  // console.log("App.js: showTutorial =", showTutorial); // Zustand entfernt
  const currentContent = tutorials[selectedTutorial];
  // console.log("App.js: selectedTutorial =", selectedTutorial);
  console.log("App.js: currentContent =", currentContent); // Überprüfen, ob die Daten geladen werden

  return (
    <div className="min-h-screen bg-gray-100"> {/* Hauptcontainer */}

      {/* --- DIESER TEIL IST VERMUTLICH FÜR DIE FUNKTIONS-KARTEN VERANTWORTLICH --- */}
      <header className="bg-white shadow p-4 mb-6"> {/* Beispiel Header */}
        <h1 className="text-xl font-semibold text-center text-gray-700">GPT Tutorial Assistent</h1> {/* App Titel */}
      </header>

      <main className="container mx-auto px-4 pb-8"> {/* Hauptinhalt Container - padding bottom hinzugefügt */}

        {/* --- NEU: Einführung zum Tutorial --- */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">
            {currentContent?.title || "Wähle ein Tutorial"} {/* Zeige den Titel des aktuellen Tutorials */}
          </h2>
          <p className="text-gray-600">
            {/* Kurze Beschreibung basierend auf Auswahl */}
            {selectedTutorial === 'b2b' && "Lerne Schritt für Schritt, wie du einen spezialisierten GPT für die Erstellung von B2B-Kaltakquise-Emails konfigurierst und nutzt."}
            {selectedTutorial === 'meeting' && "Entdecke, wie du einen GPT erstellst, der dir hilft, Meetings effizienter vorzubereiten, durchzuführen und nachzubereiten."}
          </p>
        </div>
        {/* --- ENDE DES FUNKTIONS-KARTEN BEREICHS --- */}

        {/* Tutorial Auswahl Dropdown */}
        <div className="mb-6 flex justify-center">
          <select
            value={selectedTutorial}
            onChange={(e) => setSelectedTutorial(e.target.value)}
            className="p-2 border rounded-md shadow-sm"
          >
            <option value="b2b">B2B Kaltakquise GPT</option>
            <option value="meeting">Meeting Optimierung GPT</option>
          </select>
          {/* Optional: Button zum Ein-/Ausblenden */}
          {/* <button onClick={() => setShowTutorial(!showTutorial)} className="ml-4 p-2 border rounded">
            {showTutorial ? 'Tutorial ausblenden' : 'Tutorial anzeigen'}
          </button> */}
        </div>

        {/* Tutorial Assistant Komponente */}
        {currentContent && currentContent.sections && (
          <div className="mt-8">
            <TutorialAssistant
              key={`${currentContent.id}-sections`} // Eindeutiger Key
              content={currentContent} // Übergibt das gesamte Objekt, aber TA nutzt nur sections
            />
          </div>
        )}

        {/* NEU: AdditionalInfo Komponente (zeigt den Rest) */}
        {currentContent && (
          <AdditionalInfo
             key={`${currentContent.id}-additional`} // Eindeutiger Key
             prompts={currentContent.prompts}
             challenges={currentContent.challenges}
             benefits={currentContent.benefits}
             roi={currentContent.roi}
          />
        )}

      </main>

      {/* --- Video Modal ENTFERNT --- */}
      {/* {showVideo && ( ... )} */}

      {/* --- ReactPlayer Modal ENTFERNT --- */}
      {/* {showReactPlayer && ( ... )} */}

      <footer className="text-center p-4 mt-8 text-gray-500 text-sm"> {/* Beispiel Footer */}
        <p>Entwickelt mit React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;