'use client';

import Hero from "@/components/hero/Hero";
import TextImageSlider from "@/components/textImageSlider/TextImageSlider";
import TranslatedText from "@/components/translatedText/TranslatedText";
import Stats from "@/components/stats/Stats";
import Process from "@/components/process/Process";
import { FaMapMarkerAlt, FaComments, FaPencilRuler, FaClipboardCheck, FaPlay } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Hero
        backgroundSrc="/assets/movies/moonrise_long.mp4"
        overlayOpacity={0.4}
        height="h-[400px] lg:h-[80vh]"
      />
      <div className="container mx-auto px-4 md:px-8 py-16 space-y-16">
        <TextImageSlider
          title="Hvad er et dronelysshow?"
          text1="Forestil dig en stjerneklar aften, hvor himlen fyldes med lys, mønstre og farver - alt sammen skabt af vores innovative drone lysshow. En aften hvor du oplever noget særligt, som du husker lang tid efter. Dette er vores mission hos Moonrise."
          text2="Moonrise er den første danske virksomhed certificeret til at udføre drone lysshows. Vi kombinerer teknologi og underholdning for at skabe spektakulære og mindeværdige oplevelser. Med mere end 20 års erfaring inden for liveevents og scenekunst. Hertil 10 års professionel erfaring med droner er vi jeres betroede partner til innovative og bæredygtige drone lysshows."
          text3="Vil du høre mere om mulighederne med et drone lysshow?"
          images={["/assets/images/drone-legion.jpg"]}
          sliderPosition="right"
          overlayOpacity={0.3}
        />
      </div>
      <div className="w-full bg-black py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-center mb-4">
            <TranslatedText>Hvor mange droner skal der til et show?</TranslatedText>
          </h2>
          <p className="text-center mb-8 text-gray-300">
            <TranslatedText>
              Antal droner afhænger af showets størrelse, kompleksitet og ønsket budget.
            </TranslatedText>
            <br></br>
            <TranslatedText>
              Vi hjælper med at visualisere det nødvendige antal til det konkrete behov og budget.
            </TranslatedText>
            <br></br>
            <TranslatedText>
              Eksemplerne herunder giver et indbryk af forskellene:
            </TranslatedText>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[50, 100, 150, 200, 250].map((count) => (
              <div key={count} className="flex flex-col items-center">
                <div className="relative w-full aspect-video mb-2">
                  <img
                    src={`/assets/images/drone-${count}.png`}
                    alt={`${count} droner`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <p className="text-center font-semibold">
                  <TranslatedText>{count} droner</TranslatedText>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 py-16 space-y-16">
        <TextImageSlider
          title="Prisstruktur hos Moonrise"
          text1="Hos Moonrise er der forskel på prisen afhængigt af, om kunden vælger et prelavet droneshow eller et skræddersyet  show. Prelaved shows er færdigudviklede koncepter, hvor animationer, lyssætning og sekvenser allerede er planlagt. De kan tilpasses en smule med eksempelvis farver og branding, men kræver mindre udviklingstid og godkendelsesarbejde - og er derfor en mere prisvenlig løsning."
          text2="Custom shows er derimod specialudviklede efter kundens ønsker og behov. Her designes hele showet fra bunden med unikke animationer, storytelling og koreografi."
          text3="Det kræver mere kreativt arbejde, flere godkendelsesprocesser og tekniske tests, hvilket gør custom shows markant dyrere end de færdige koncepter."
          images={["/assets/images/moonrise.jpg"]}
          sliderPosition="right"
          overlayOpacity={0.3}
        />
      </div>
      
      <Stats 
        title="Moonrise i tal" 
        items={[
          { title: "Flere deltagere", value: 65, suffix: "%", description: "Stigning i begivenhedsdeltagelse" },
          { title: "Støj reduktion", value: 90, suffix: "%", description: "Sammenlignet med traditionelt fyrværkeri" },
          { title: "Mindre CO₂-udledning", value: 60, suffix: "%", description: "Reduktion af CO2-fodaftryk" },
          { title: "Mindre affald", value: 500, suffix: "kg", description: "I forhold til mellemstore fyrværkeri shows" }
        ]} 
      />

      <Process 
        title="Sådan arbejder vi" 
        items={[
          {
            icon: FaMapMarkerAlt,
            title: "Site Authorization & Assessment",
            description: "Vi sikrer de nødvendige tilladelser og vurderer lokationen for sikkerhed"
          },
          {
            icon: FaComments,
            title: "Story Board Consultation",
            description: "Vi diskuterer din vision og eventets krav med vores ekspertteam"
          },
          {
            icon: FaPencilRuler,
            title: "Design & Planning",
            description: "Sammen skaber vi et skræddersyet droneshow tilpasset dit events tema"
          },
          {
            icon: FaClipboardCheck,
            title: "Pre-Flight Run-Through",
            description: "Vi gennemfører en grundig generalprøve for at sikre alt kører perfekt"
          },
          {
            icon: FaPlay,
            title: "Show Time",
            description: "Læn dig tilbage og nyd det spektakulære droneshow"
          }
        ]} 
      />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-8">
            <TranslatedText>Teknisk baggrund og erfaring hos Moonrise</TranslatedText>
          </h2>
          <div className="space-y-6">
            <p>
              <TranslatedText>
                Moonrise bygger på en solid teknisk baggrund gennem deres tilknytning til SimpleCreations – en virksomhed med over 15 års erfaring inden for teater- og eventproduktion. SimpleCreations har en prisvindende baggrund i teknisk teaterdesign og balancerer teknologi og design i deres projekter. Denne erfaring omfatter blandt andet udlejning af professionelt kameraudstyr og tekniske løsninger til film- og eventbranchen.
              </TranslatedText>
            </p>
            <p>
              <TranslatedText>
                Teamet bag Moonrise har arbejdet intensivt med teknik, udstyr og produktion i flere år, hvilket giver dem en solid forståelse for både det kreative og det tekniske aspekt af at levere store visuelle oplevelser. Denne erfaring gør Moonrise i stand til at kombinere avanceret droneteknologi med sikkerhed, kvalitet og høj professionalisme i deres lysdroneshow.
              </TranslatedText>
            </p>
            <p>
              <TranslatedText>
                Deres tekniske ekspertise sikrer, at hvert show er gennemført med præcision og kreativitet, hvilket giver kunderne en unik og mindeværdig oplevelse.
              </TranslatedText>
            </p>
          </div>
          <a 
            href="/pages/contact" 
            className="inline-block mt-8 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            <TranslatedText>Læs mere her</TranslatedText>
          </a>
        </div>
      </div>
    </>
  );
}