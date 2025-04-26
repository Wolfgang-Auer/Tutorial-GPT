// tutorialContent.js - Inhaltsdaten für den B2B-Kaltakquise-GPT-Assistenten 
//Version 0.1.3 Robert Kron

const tutorialContent = {
  id: "b2b-cold-email",
  title: "Erstellung eines GPTs für B2B-Kaltakquise-Emails",

  // Abschnitte mit Aufgaben (ohne description und prompts innerhalb der sections)
  sections: [
    {
      id: "preparation",
      title: "Vorbereitung",
      description: "Stelle sicher, dass alle Voraussetzungen erfüllt sind, bevor du mit der GPT-Erstellung beginnst.",
      steps: [
        { id: "prep1", text: "ChatGPT-Konto mit Plus-Abonnement sicherstellen" },
        { id: "prep2", text: "Perplexity-Konto für die Recherche einrichten" },
        { id: "prep3", text: "Unternehmensinformationen zusammenstellen (Digitale Beschreibungen, Marketingmaterial, etc.)" },
        { id: "prep4", text: "Beispiel-Zielunternehmen für Tests auswählen (muss eine Website haben)" }
      ]
    },
    {
      id: "info-search",
      title: "Informationssuche zum eigenen Unternehmen",
      description: "Bevor du den GPT nutzt, musst du relevante Informationen über dein Unternehmen sammeln. Perplexity Tiefensuche ist dafür gut geeignet.",
      steps: [
        { id: "is1", text: "Öffne Perplexity (https://www.perplexity.ai/)." },
        { id: "is2", text: "Verwende das Recherche-Template (siehe Abschnitt 'Hilfreiche Prompts, Perplexity Recherche-Template (Eigenes Unternehmen)'), um nach Informationen zu deinem Unternehmen zu suchen." },
        { id: "is3", text: "Verwende Forschung, wähle bei den Quellen die Option Sozial aus und füge den Link zu deiner Webseite ein." },
        { id: "is4", text: "Prüfe die Ergebnisse und unter Exportieren die Option Markdown auswählen und speichere diese als Datei für die spätere eingabe in den GPT am Desktop." }
      ]
    },
    {
      id: "step1",
      title: "Schritt 1: GPT-Editor öffnen",
      description: "Navigiere zum Editor, um deinen neuen GPT zu erstellen.",
      steps: [
        { id: "s1t1", text: "Bei ChatGPT-Konto einloggen" },
        { id: "s1t2", text: "Links im Menübaum \"GPTs erkunden\" auswählen" },
        { id: "s1t3", text: "Oben rechts \"+ Erstellen\" anklicken um den GPT erstmals zu erstellen" }
      ]
    },
    {
      id: "step2",
      title: "Schritt 2: Grundlegende GPT-Konfiguration",
      description: "Gib deinem GPT einen Namen, eine Beschreibung und erste Anweisungen.",
      steps: [
        { id: "s2t0", text: "Auf das Plus Symbol in der Mitte drücken und ein Foto hochladen oder mit DALL-E ein Bild generieren" },
        { id: "s2t1", text: "Namen eingeben: z.B. \"B2B Kaltakquise Profi\"" },
        { id: "s2t2", text: "Beschreibung eingeben: z.B. \"Erstellt hochpersonalisierte B2B-Kaltakquise-Emails für Unternehmen jeder Branche basierend auf detaillierten Recherchen zum Unternehmen des Kunden und den eigenen Dienstleistungen.\"" },
        { id: "s2t3", text: "Hinweise für den GPT eingeben (siehe Abschnitt \"Hilfreiche Prompts\")" },
        { id: "s2t4", text: "Gesprächsaufhänger eingeben: z.B. \"Ich möchte eine personalisierte Kaltakquise-Email erstellen. Hier sind Informationen zum Unternehmen des Kunden und verwende das Wissen zu meinen Dienstleistungen.\"" }
      ]
    },
    {
      id: "step3",
      title: "Schritt 3: Funktionen aktivieren (Stand 04/25)",
      description: "Wähle die notwendigen Fähigkeiten für deinen GPT aus.",
      steps: [
        { id: "s3t1", text: "Internetsuche aktivieren ✓" },
        { id: "s3t2", text: "Canvas aktivieren ✓" },
        { id: "s3t3", text: "Bildgenerierung mit 4o ✗" },
        { id: "s3t4", text: "Code-Interpreter und Datenanalyse deaktivieren ✗" }
      ]
    },
    {
      id: "step4",
      title: "Schritt 4: GPT-Anweisungen eingeben",
      description: "Definiere genau, wie dein GPT arbeiten soll.",
      steps: [
        { id: "s4t1", text: "Unter Hinweise die Anweisungen für den GPT einfügen (siehe Abschnitt \"Hilfreiche Prompts\")" },
        { id: "s4t2", text: "Anweisungen auf Vollständigkeit prüfen" }
      ]
    },
    {
      id: "step5",
      title: "Schritt 5: GPT-Wissen hochladen",
      description: "Stelle deinem GPT Informationen über dein Unternehmen und Dienstleistungen zur Verfügung.",
      steps: [
        { id: "s5t1", text: "\"Datei hochladen\" wählen" },
        { id: "s5t2", text: "Perplexity-Recherche über eigenes Unternehmen hochladen" },
        { id: "s5t3", text: "Bei Bedarf weitere Dokumente hochladen (Produktkataloge, Referenzen, etc.)" }
      ]
    },
    {
      id: "step6",
      title: "Schritt 6: GPT testen",
      description: "Überprüfe die Funktionalität deines GPTs mit einem Testlauf.",
      steps: [
        { id: "s6t1", text: "\"Vorschau erstellen\" anklicken" },
        { id: "s6t2", text: "Standardeinstieg verwenden: \"Ich möchte eine hochpersonalisierte Kaltakquise-Email erstellen.\"" },
        { id: "s6t3", text: "Zusätzliche Informationen für eigenes Unternehmen bereitstellen" },
        { id: "s6t4", text: "Perplexity-Recherche für Zielunternehmen einfügen" },
        { id: "s6t5", text: "Erstellte Email auf Qualität und Personalisierung prüfen und überarbeiten" }
      ]
    },
    {
      id: "step7",
      title: "Schritt 7: GPT optimieren",
      description: "Verfeinere die Anweisungen basierend auf den Testergebnissen.",
      steps: [
        { id: "s7t1", text: "Bei Bedarf zu \"Anweisungen\" zurückkehren und Anpassungen vornehmen" },
        { id: "s7t2", text: "GPT erneut testen mit unterschiedlichen Unternehmen" },
        { id: "s7t3", text: "Feintuning basierend auf Testergebnissen" }
      ]
    },
    {
      id: "step8",
      title: "Schritt 8: GPT veröffentlichen & teilen",
      description: "Mache deinen GPT für dich oder dein Team verfügbar.",
      steps: [
        { id: "s8t1", text: "Rechts oben auf \"Erstellen\" klicken" },
        { id: "s8t2", text: "Zugriffseinstellungen anpassen (privat oder für das Team freigeben)" },
        { id: "s8t3", text: "Link zum GPT kopieren und für das Team bereitstellen" }
      ]
    },
    {
      id: "step9",
      title: "Schritt 9: Schulung & Dokumentation",
      description: "Stelle sicher, dass dein Team den neuen Workflow versteht und anwenden kann.",
      steps: [
        { id: "s9t1", text: "Anleitung für Team-Mitglieder erstellen" },
        { id: "s9t2", text: "Best Practices für Kaltakquise-Emails dokumentieren" },
        { id: "s9t3", text: "Schulungssitzung für das Team durchführen" },
        { id: "s9t4", text: "Feedback-Prozess einrichten" }
      ]
    }
  ],

  // --- NEU: Top-Level-Objekte hinzugefügt ---

  // Hilfreiche Prompts
  prompts: {
    gptHints: `Dieser GPT hilft dir, hochpersonalisierte Kaltakquise-Emails für B2B-Leads zu erstellen, unabhängig von deiner Branche.
1. Sammeln wir Informationen über dein eigenes Unternehmen und deine Dienstleistungen/Produkte uns speichern diese in diesem UseCase ab.
2. Wir machen eine Recherche über das Zielunternehmen (z.B. aus Perplexity) und verwenden diese Informationen um eine hochpersonalisierte Email zu erstellen.

Der GPT analysiert beide Informationsquellen und erstellt eine überzeugende, personalisierte Email, die auf spezifische Bedürfnisse, Herausforderungen und Möglichkeiten des Zielunternehmens eingeht.

Für die besten Ergebnisse solltest du:
- Detaillierte Informationen über dein Unternehmen bereitstellen
- Gründliche Recherchen zum Zielunternehmen hochladen
- Spezifische Anpassungswünsche für die Email angeben`,

    gptInstructions: `Du bist ein spezialisierter B2B-Kaltakquise-Email-Generator für Unternehmen aller Branchen. Deine Aufgabe ist es, hochpersonalisierte Emails zu erstellen, die auf detaillierten Recherchen über das Zielunternehmen und das anbietende Unternehmen basieren.

# ARBEITSWEISE

1. Du beginnst jedes Gespräch, indem du dem Nutzer sagst, welches Unternehmen du repräsentierst (also das aus deiner Wissensdatenbank) und nach wichtigen Informationsbereichen fragst:
   - Sind die Informationen über das eigene Unternehmen (Branche, Produkte, Dienstleistungen, USPs) die im GPT gespeichert sind noch aktuell oder sind neue Informationen verfügbar
   - Welche Rechercheergebnisse über das Zielunternehmen vorhanden sind.

2. Du analysierst die bereitgestellten Informationen sorgfältig und identifizierst:
   - Die wichtigsten Dienstleistungen/Produkte des eigenen Unternehmens
   - Die Herausforderungen, Bedürfnisse und Schmerzpunkte des Zielunternehmens
   - Die wichtigsten Entscheidungsträger (insbesondere CEO/Geschäftsführer)
   - Potenzielle Überschneidungen und Synergien zwischen beiden Unternehmen
   - Aktuelle Entwicklungen oder strategische Ziele des Zielunternehmens
   - Branchenspezifische Probleme und Lösungsansätze

3. Du erstellst eine Email mit folgenden Eigenschaften:
   - Persönliche Ansprache des Entscheidungsträgers (vorzugsweise CEO/Geschäftsführer)
   - Kurze, prägnante Form (max. 250-300 Wörter)
   - Klarer Bezug zu aktuellen Herausforderungen oder Zielen des Zielunternehmens
   - Spezifische Vorschläge, wie die Produkte/Dienstleistungen des eigenen Unternehmens helfen können
   - Konkreter Mehrwert und messbare Vorteile
   - Klarer Call-to-Action für ein Erstgespräch

# FORMAT DER EMAIL

Die Email soll folgende Struktur haben:
1. Betreffzeile: Prägnant, personalisiert und Interesse weckend
2. Anrede: Persönlich und korrekt
3. Eröffnung: Bezug zu einer aktuellen Entwicklung/Herausforderung des Zielunternehmens
4. Brücke: Verbindung zwischen Herausforderung und eigener Lösung
5. Wertversprechen: Spezifischer Mehrwert und potenzielle Ergebnisse
6. Call-to-Action: Klarer Vorschlag für den nächsten Schritt (z.B. kurzes Gespräch)
7. Abschluss: Professionelle Grußformel

# TON UND STIL

- Professionell, aber nicht steif
- Selbstbewusst, aber nicht arrogant
- Wertorientiert und lösungsorientiert
- Respektvoll gegenüber der Zeit des Empfängers
- Vermeide generische Marketingphrasen

# WICHTIGE HINWEISE

- Nutze die Informationen aus der Perplexity-Recherche intensiv.
- Gehe spezifisch auf die Branche und die Situation des Zielunternehmens ein.
- Stelle sicher, dass der Name des Ansprechpartners und des Unternehmens korrekt sind.
- Passe die Email an, wenn der Nutzer spezifische Wünsche äußert.
- Frage nach, wenn Informationen unklar sind.
- Verwende Markdown für die Formatierung der Email.`,

    perplexityTemplate: 
    
    `[ROLLE]: Agiere als spezialisierter Business Intelligence Analyst mit Fokus auf B2B-Vertriebschancen und Entscheidungsträgeranalyse.

[KONTEXT]: Basierend auf der angegebenen Unternehmenswebsite soll eine akquisefokussierte Unternehmensanalyse erstellt werden. 
Ziel ist die Identifikation konkreter Ansatzpunkte für eine hochpersonalisierte Verkaufsansprache, die exakt auf aktuelle Herausforderungen, Ziele und Entscheidungsträger des Unternehmens zugeschnitten ist.
Berücksichtige dabei besonders die aktuellen makroökonomischen und branchenspezifischen Herausforderungen des Marktes wo das Unternehmen tätig ist.

[AUFGABE]: Analysiere umfassend das Unternehmen unter besonderer Berücksichtigung vertriebsrelevanter Informationen. Durchsuche und kombiniere dabei:
* Offizielle Website des Unternehmens (besonders Team/About-Seiten, Karriere, aktuelle Projekte)
* LinkedIn-Profile der Führungskräfte und Entscheidungsträger
* Pressemitteilungen der letzten 12 Monate
* Stellenanzeigen (als Indikatoren für aktuelle Herausforderungen)
* Kundenreferenzen und Fallstudien (für Pain Points und Lösungsansätze)
* Aktuelle Berichte der Wirtschaftskammern und Branchenverbänden wo das Unternehmen tätig ist
* Wirtschaftsnachrichten zu aktuellen Herausforderungen der Branche wo das Unternehmen tätig ist

Strukturiere die Analyse präzise in folgende Abschnitte:

1. Unternehmensprofil
* Vollständiger Name, Gründungsjahr, Hauptsitz
* Kernprodukte/-dienstleistungen mit konkreten Anwendungsbeispielen
* Unternehmensgröße und Wachstumsphase
* Geschäftsmodell und Umsatzströme
* Wichtigste Meilensteine der letzten 2-3 Jahre
* Position im österreichischen Marktumfeld (regional/national/international)

2. Entscheidungsträger und Organisationsstruktur
* Schlüsselpersonen mit Entscheidungsbefugnis (Namen, Positionen, Hintergrund)
* LinkedIn-Aktivitäten und berufliche Schwerpunkte der Entscheidungsträger
* Kommunikationsstil und Fachsprache der Führungsebene (für Tonalität der Akquise)
* Entscheidungswege und Hierarchien (soweit erkennbar)

3. Aktuelle Herausforderungen und Initiativen
* Laufende Projekte und strategische Initiativen 
* Wachstumsambitionen und neue Märkte/Produkte
* Erkennbare Engpässe oder Ineffizienzen
* Technologische Transformationsprozesse
* Indikatoren für Budget- und Investitionsprioritäten
* Spezifisch Wirtschaftsherausforderungen wo das Unternehmen tätig ist:
  - Energiekostenentwicklung und Nachhaltigkeitsdruck
  - Fachkräftemangel und demographischer Wandel
  - Digitalisierungsdruck und Automatisierungsbedarf
  - Inflation und Kostendruck in der Lieferkette
  - Exportabhängigkeit und internationale Wettbewerbsfähigkeit
  - Regulatorische Anpassungen und Compliance-Anforderungen
  - vertriebliche Herausforderungen und Kundengewinnung

4. Konkrete Pain Points und Bedarfe
* Spezifische operative Schmerzpunkte des Unternehmens
* Aktuelle Problemstellungen in den Bereichen, die meine Dienstleistungen adressieren
* Indizien für Unzufriedenheit mit bestehenden Lösungen
* Implizite Bedarfe, die in der Kommunikation durchscheinen
* Dringlichkeit der identifizierten Bedürfnisse
* Überschneidungen mit typischen Herausforderungen der Branche wo das Unternehmen tätig ist:
  - Digitale Transformation bei starker handwerklicher/industrieller Tradition
  - Internationalisierung bei überwiegend KMU-geprägter Wirtschaft
  - Effizienzsteigerung bei steigenden Betriebskosten
  - Modernisierung bei gleichzeitiger Bewahrung traditioneller Stärken

5. Bestehende Lösungsansätze und Partner
* Aktuell genutzte Tools, Technologien und Dienstleister
* Kürzlich eingeführte Lösungen oder Partnerschaften
* Lücken im bestehenden Lösungsportfolio
* Potenzielle "Replacement"-Chancen
* Nutzung von Förderungen und Unterstützungsprogrammen

6. Unternehmenssprache und Wertekultur
* Zentrale Begriffe und Schlüsselwörter in der Unternehmenskommunikation
* Kommunizierte Unternehmenswerte und -kultur
* Bevorzugte Ansprache (formell/informell, technisch/zugänglich)
* Content-Typen und Formate, auf die das Unternehmen anspricht

7. Konkrete Anknüpfungspunkte für Akquise
* Top 5 spezifische Schmerzpunkte, die meine Dienstleistungen lösen können
* Passende Case Studies oder Referenzen aus meinem Portfolio
* Optimaler Zeitpunkt für die Ansprache (basierend auf Geschäftszyklus)
* Personalisierte Gesprächseinstiege je Entscheidungsträger

8. Akquise-Roadmap
* Idealer Erstansprechpartner mit konkretem Mehrwertversprechen
* Empfohlene Schritte für mehrstufigen Akquiseprozess
* Potenzielle Einwände und Vorbehalte mit Gegenargumenten
* Konkrete Formulierungsvorschläge für personalisierte Erstansprache
* Bezug zu erfolgreichen Lösungen für ähnliche Unternehmen in der Branche wo das Unternehmen tätig ist

9. Makroökonomischer Kontext für das Land wo das Unternehmen tätig ist
* Aktuelle wirtschaftliche Situation der spezifischen Branche wo das Unternehmen tätig ist
* Relevante Förderprogramme und Unterstützungsmaßnahmen
* Branchenspezifische Regulierungen und Compliance-Anforderungen
* Wettbewerbssituation im Markt wo das Unternehmen tätig ist
* Aktuelle Wirtschaftstrends mit besonderer Relevanz für die Branche

[DENKWEISE]:
* Präzise Fokussierung auf verkaufsrelevante Informationen
* Objektive Beurteilung tatsächlicher Bedarfe, nicht nur kommunizierter Wünsche
* Erkennung impliziter Signale für Veränderungsbereitschaft
* Verknüpfung identifizierter Probleme mit meinen konkreten Lösungsangeboten
* Berücksichtigung kultureller und wirtschaftlicher Besonderheiten des Marktes wo das Unternehmen tätig ist
* Verknüpfung individueller Unternehmensherausforderungen mit übergeordneten Markttrends 

[INPUT]: **Website-URL**: [HIER WEBSITE-URL]

[OUTPUT]:
* Präzise, akquisefokussierte Analyse mit konkreten Handlungsempfehlungen
* Spezifische, nicht generische Erkenntnisse zu Pain Points und Entscheidungsträgern
* Direkt umsetzbare Formulierungsvorschläge für personalisierte Erstansprache
* Klare Verknüpfung mit relevanten Wirtschaftsherausforderungen für das Land wo das Unternehmen tätig ist
* Referenzierung erfolgreicher Lösungsbeispiele oder Fallstudien für die Branche wo das Unternehmen tätig ist
`,
    perplexityOwnCompanyTemplate: 
    `[ROLLE]: Agiere als strategischer Marketing- und Vertriebsanalyst mit Fokus auf wertorientierte B2B-Kommunikation und Kundenwertdarstellung.

[KONTEXT]: Für die Erstellung hochpersonalisierter Akquise-E-Mails benötige ich eine strukturierte Analyse meines eigenen Unternehmens und meiner Dienstleistungen. Ziel ist es, alle relevanten Informationen zu identifizieren, die den spezifischen Mehrwert meiner Lösungen für potenzielle Kunden überzeugend darstellen können.

[AUFGABE]: Führe eine umfassende Analyse meines Unternehmens durch, indem du folgende Quellen auswerten:
* Meine Unternehmenswebsite: [HIER MEINE WEBSITE-URL]
* LinkedIn-Unternehmensprofil und persönliche Profile der Führungskräfte
* Case Studies und Kundenreferenzen
* Bewertungen auf Plattformen wie Google, Trustpilot oder branchenspezifischen Portalen
* Fachartikel, Whitepaper oder Blogbeiträge meines Unternehmens

Strukturiere die Analyse in folgende Abschnitte:

1. Kernkompetenzen und Dienstleistungsportfolio
* Detaillierte Beschreibung aller angebotenen Dienstleistungen mit jeweiligen Hauptmerkmalen
* Identifikation der besonders differenzierenden Angebote
* Katalogisierung der wichtigsten Technologien, Methoden und Prozesse
* Preispositionierung und Wertverhältnis im Markt (Premium/Mittelfeld/Einstieg)
* Modularität und Anpassungsfähigkeit der Angebote

2. Nachweisbare Erfolge und Referenzen
* Konkrete Erfolgsgeschichten mit messbaren Ergebnissen (z.B. "20% Effizienzsteigerung")
* Branchenspezifische Referenzfälle, kategorisiert nach Problemstellungen
* Spezifische Kundenzitate mit konkreten Mehrwertbeschreibungen
* Besonders beeindruckende Transformationsgeschichten von Kunden
* Branchenspezifische Spezialisierungen und Erfolge

3. Problemlösungskompetenz nach Kundensegmenten
* Matrix der typischen Kundenprobleme und meiner spezifischen Lösungsansätze
* Differenzierung nach Unternehmensgröße (KMU, Mittelstand, Konzern)
* Branchenspezifische Lösungsansätze und Anpassungen
* Einzigartige Methoden zur Problemlösung im Vergleich zu Wettbewerbern
* Konkrete "Vorher-Nachher"-Szenarien bei Kundenprojekten

4. Alleinstellungsmerkmale (USPs) und Differenzierungsfaktoren
* Klar definierte, verifizierbare Alleinstellungsmerkmale
* Kernunterscheidungen zu direkten Wettbewerbern
* Besondere Methodik, Technologie oder Philosophie
* Erfahrungsvorsprünge und Spezialisierungsgrad
* Zertifizierungen, Auszeichnungen oder Partnerschaften

5. Unternehmenskultur und Serviceverständnis
* Beschreibung des Kundenerlebnisses und Serviceansatzes
* Kernwerte und deren Umsetzung in der täglichen Arbeit
* Nachweisbare Qualitätssicherungsmethoden
* Kommunikations- und Kollaborationsmodelle mit Kunden
* Reaktionsfähigkeit und Flexibilität bei unerwarteten Herausforderungen

6. Wertebasierte Überzeugungspunkte
* Tiefere Unternehmenswerte und -mission
* Nachhaltigkeitsaspekte und gesellschaftliches Engagement
* Langfristige Partnerschaftsphilosophie
* Wissenstransfer und Kundenermächtigung
* Emotionale Differenzierungsfaktoren jenseits funktionaler Vorteile

7. Akquise-Kommunikationsbaukasten
* Prägnante Formulierungen meiner Werteversprechen nach Kundensegment
* Überzeugende Argumente für typische Kundeneinwände
* Konkrete Formulierungen für verschiedene Schmerzpunkte ("Sie kämpfen vermutlich mit...")
* Überzeugende Übergänge von Kundenproblemen zu meinen Lösungen
* Wirkungsvolle Call-to-Actions für verschiedene Entscheiderebenen

8. Optimale Erstgesprächsstrategie
* Ideale Gesprächseinstiege je nach Kundentyp
* Schlüsselfragen zur Bedarfsermittlung
* Typische Kundenreaktionen und erfolgreiche Antwortstrategien
* Empfohlener Gesprächsablauf für maximale Überzeugungskraft
* Balance zwischen Zuhören und eigener Lösungspräsentation

[DENKWEISE]:
* Kundenzentriert: Alle Informationen aus Perspektive des konkreten Kundennutzens betrachten
* Evidenzbasiert: Fokus auf nachweisbare, quantifizierbare Erfolge und Differenzierungsfaktoren
* Problemorientiert: Verknüpfung meiner Stärken mit typischen Kundenproblemen
* Wettbewerbsdifferenzierend: Klare Abgrenzung zu alternativen Lösungsanbietern

[OUTPUT]:
* Strukturierte Analyse aller vertriebsrelevanten Unternehmensinformationen
* Überzeugungskräftige Formulierungsbausteine für personalisierte Akquise
* Segmentierte Mehrwertdarstellung nach Kundentypologien und Problemstellungen
* Direkt anwendbare Kommunikationsstrategien für die personalisierte Erstansprache
    `
  },

  // Herausforderungen der B2B-Kaltakquise
  challenges: {
    title: "Typische Herausforderungen bei der B2B-Kaltakquise",
    items: [
      {
        icon: "🔒",
        title: "Zugangshürden zu Entscheidern",
        color: "red",
        description: "<strong>93% der Entscheider</strong> öffnen keine generischen Kaltakquise-Emails. Die größte Herausforderung besteht darin, überhaupt durch den Spam-Filter zu kommen und gelesen zu werden. <strong>Personalisierung ist entscheidend</strong>, aber traditionell sehr zeitaufwändig."
      },
      {
        icon: "⏱️",
        title: "Hoher Zeitaufwand für Recherche",
        color: "orange",
        description: "Für eine wirklich personalisierte Email benötigt ein Vertriebsmitarbeiter <strong>durchschnittlich 45-60 Minuten</strong> allein für die Recherche. Bei größeren Kampagnen ist dieser Aufwand <strong>kaum skalierbar</strong>, was zu qualitativ minderwertigen Massen-Emails führt."
      },
      {
        icon: "🎯",
        title: "Relevanz und Timing",
        color: "yellow",
        description: "<strong>Nur 13% der traditionellen Kaltakquise-Emails</strong> treffen einen aktuellen Schmerzpunkt des Empfängers. Die Identifikation der <strong>richtigen Herausforderungen zum richtigen Zeitpunkt</strong> erfordert tiefgehende Recherche, die manuell oft oberflächlich bleibt."
      },
      {
        icon: "📊",
        title: "Wissens- und Skill-Gap",
        color: "blue",
        description: "Die Qualität der Kaltakquise variiert stark innerhalb des Teams. <strong>Erfahrene Vertriebsmitarbeiter</strong> erzielen oft 3-5x bessere Ergebnisse als Neulinge. Dieses <strong>implizite Wissen</strong> ist schwer zu übertragen und standardisieren."
      }
    ],
    statistics: {
      headers: ["Email-Typ", "Öffnungsrate", "Antwortquote", "Terminvereinbarungen"],
      rows: [
        ["Generische Massen-Emails", "10-15%", "0.5-2%", "0.1-0.5%"],
        ["Oberflächlich personalisiert", "15-25%", "2-5%", "0.5-1.5%"],
        ["Tiefgehend personalisiert (traditionell)", "30-45%", "8-15%", "3-7%"],
        ["KI-gestützt personalisiert", "40-60%", "10-25%", "5-12%"]
      ]
    },
    centralProblems: [
      "<strong>Skalierungsproblem:</strong> Hohe Qualität und hohe Quantität scheinen unvereinbar",
      "<strong>Ressourcenproblem:</strong> Der Zeit- und Personalaufwand für hochwertige Kaltakquise ist enorm",
      "<strong>Informationsproblem:</strong> Die Erfassung und Analyse relevanter Daten zu Zielunternehmen ist komplex",
      "<strong>Konsistenzproblem:</strong> Die Qualität schwankt stark je nach Mitarbeiter und Zeitdruck",
      "<strong>Anpassungsproblem:</strong> Branchenspezifische Sprache und Verständnis erfordern Spezialwissen"
    ]
  },

  // Vorteile des GPT-gestützten Ansatzes
  benefits: {
    strategic: [
      {
        icon: "🎯",
        title: "Höhere Relevanz & Personalisierung",
        color: "blue",
        description: "Der GPT analysiert umfangreiche Daten zu Zielunternehmen und identifiziert <strong>spezifische Schmerzpunkte</strong>, Bedürfnisse und Opportunitäten. Dies ermöglicht eine <strong>tiefere Personalisierung</strong> als bei manuellen Methoden, da Verbindungen hergestellt werden können, die menschlichen Researchern möglicherweise entgehen."
      },
      {
        icon: "📈",
        title: "Höhere Conversion-Raten",
        color: "green",
        description: "Durch die verbesserte Personalisierung und Relevanz steigen typischerweise die Öffnungsraten um <strong>30-40%</strong> und die Antwortquoten um <strong>25-35%</strong> im Vergleich zu generischen Ansätzen. Dies führt zu <strong>mehr Erstgesprächen</strong> und letztendlich zu mehr Abschlüssen."
      },
      {
        icon: "🔄",
        title: "Konsistente Markensprache",
        color: "purple",
        description: "Der GPT sorgt für eine <strong>einheitliche Kommunikation</strong>, die zur Unternehmensstimme passt - unabhängig davon, wer die Emails erstellt. Dies stärkt die <strong>Markenwahrnehmung</strong> und verhindert qualitative Schwankungen zwischen verschiedenen Vertriebsmitarbeitern."
      }
    ],
    operational: [
      {
        icon: "⚡",
        title: "Drastische Effizienzsteigerung",
        color: "amber",
        description: "Was früher 2+ Stunden pro qualitativ hochwertiger Email in Anspruch nahm, kann jetzt in etwa <strong>10 Minuten</strong> erledigt werden. Dies ermöglicht eine <strong>mehr als 10-fache</strong> Steigerung der Outreach-Kapazität und eine signifikant schnellere Marktbearbeitung."
      },
      {
        icon: "🧠",
        title: "Verringerung des Skill-Gaps",
        color: "red",
        description: "Auch <strong>weniger erfahrene Vertriebsmitarbeiter</strong> können mit Hilfe des GPTs hochwertige Kaltakquise betreiben. Der GPT fungiert als <strong>eingebauter Coach</strong>, der Best Practices anwendet und das kollektive Wissen des Unternehmens nutzbar macht."
      },
      {
        icon: "🔍",
        title: "Tiefere Markteinblicke",
        color: "teal",
        description: "Die systematische Recherche mit Perplexity liefert <strong>umfassendere Einblicke</strong> in Zielunternehmen, Wettbewerber und Markttrends. Diese Informationen können über die Kaltakquise hinaus für <strong>strategische Entscheidungen</strong> genutzt werden und bereichern die Marktintelligenz des Unternehmens."
      }
    ],
    scalability: {
      headers: ["Szenario", "Traditioneller Ansatz", "Mit GPT & Perplexity", "Steigerung"],
      rows: [
        ["Emails pro Mitarbeiter pro Woche", "15-20", "120-150", "+750%"],
        ["Zielgenauigkeit bei Ansprache", "Mittel", "Hoch", "+65%"],
        ["Erschließung neuer Märkte (Zeit)", "4-6 Wochen", "1-2 Wochen", "-75%"],
        ["Onboarding neuer Vertriebsmitarbeiter", "3-4 Monate", "1 Monat", "-70%"]
      ]
    },
    testimonial: "Unser Team konnte die Anzahl der qualifizierten Leads um <strong>720%</strong> steigern, ohne zusätzliches Personal einzustellen. Die Kombination aus ChatGPT und Perplexity hat nicht nur die Effizienz <strong>dramatisch verbessert</strong>, sondern auch die Qualität der Erstgespräche. Prospects kommen jetzt bereits besser informiert und mit konkreteren Vorstellungen in die Gespräche, was die Conversion-Rate im weiteren Verkaufsprozess <strong>deutlich erhöht</strong> hat."
  },

  // ROI-Berechnung
  roi: {
    timeComparison: {
      headers: ["Prozessschritt", "Traditioneller Ansatz (Min/Email)", "Mit KI-Tools (Min/Email)", "Zeitersparnis (%)"],
      rows: [
        ["Recherche zum Zielunternehmen", "45", "5", "89%"],
        ["Analyse der Bedürfnisse/Schmerzpunkte", "30", "2", "93%"],
        ["Emailerstellung und Personalisierung", "35", "2", "94%"],
        ["Überprüfung und Optimierung", "15", "1", "93%"],
        ["Gesamtzeit pro Email", "125 Min", "10 Min", "92%"]
      ]
    },
    costCalculation: {
      headers: ["Kennzahl", "Traditioneller Ansatz", "Mit KI-Tools", "Differenz"],
      rows: [
        ["Zeitaufwand für 100 Emails", "208,3 Stunden", "16,7 Stunden", "191,6 Stunden gespart"],
        ["Arbeitskosten (bei 60€/Stunde)", "12.500€", "1.000€", "11.500€ gespart"],
        ["KI-Tool Kosten (ca.)", "0€", "500€", "500€ Mehrkosten"],
        ["Netto-Kosteneinsparung", "-", "-", "11.000€"]
      ]
    },
    additionalBenefits: [
      "<span class=\"font-semibold\">Höhere Qualität:</span> Durch bessere Personalisierung potentiell höhere Öffnungs- und Antwortrate",
      "<span class=\"font-semibold\">Konsistente Qualität:</span> Gleichbleibend hohe Qualität auch bei großen Volumina",
      "<span class=\"font-semibold\">Skalierbarkeit:</span> Einfache Skalierung auf größere Emailmengen möglich",
      "<span class=\"font-semibold\">Schnellere Marktbearbeitung:</span> Mehr Leads in kürzerer Zeit ansprechen",
      "<span class=\"font-semibold\">Mitarbeiterentlastung:</span> Fokus auf höherwertige Aufgaben statt repetitive Recherche",
      "<span class=\"font-semibold\">Wissenstransfer:</span> KI-Tools können von weniger erfahrenen Mitarbeitern genutzt werden"
    ],
    conclusion: "Bei 100 personalisierten Kaltakquise-Emails spart der Einsatz der KI-Tools ca. <strong>92%</strong> der Arbeitszeit ein, was einer Netto-Kosteneinsparung von etwa <strong>11.000€</strong> entspricht. Die Investition in die KI-Tools amortisiert sich bereits nach <strong>wenigen Emails</strong>."
  }
};

export default tutorialContent;