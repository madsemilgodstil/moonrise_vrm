'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import TranslatedText from '@/components/translatedText/TranslatedText'

// Lazy load tunge komponenter
const Hero = dynamic(() => import('@/components/hero/Hero'), { ssr: true })
const TextImageSlider = dynamic(
  () => import('@/components/textImageSlider/TextImageSlider'),
  { ssr: false }
)
const Stats = dynamic(() => import('@/components/stats/Stats'), { ssr: false })
const Process = dynamic(() => import('@/components/process/Process'), {
  ssr: false
})

// Lazy load ikoner
const FaMapMarkerAlt = dynamic(() =>
  import('react-icons/fa').then(mod => mod.FaMapMarkerAlt)
)
const FaComments = dynamic(() =>
  import('react-icons/fa').then(mod => mod.FaComments)
)
const FaPencilRuler = dynamic(() =>
  import('react-icons/fa').then(mod => mod.FaPencilRuler)
)
const FaClipboardCheck = dynamic(() =>
  import('react-icons/fa').then(mod => mod.FaClipboardCheck)
)
const FaPlay = dynamic(() => import('react-icons/fa').then(mod => mod.FaPlay))

export default function Home () {
  return (
    <>
      <Hero
        backgroundSrc='/assets/movies/moonrise_long.mp4'
        overlayOpacity={0.4}
        height='h-[400px] lg:h-[80vh]'
      />
      <div className='container px-4 py-16 mx-auto space-y-16 md:px-8'>
        <TextImageSlider
          title='Hvad er et dronelysshow?'
          text1='Forestil dig en stjerneklar aften, hvor himlen fyldes med lys, mønstre og farver - alt sammen skabt af vores innovative drone lysshow. En aften hvor du oplever noget særligt, som du husker lang tid efter. Dette er vores mission hos Moonrise.'
          text2='Moonrise er den første danske virksomhed certificeret til at udføre drone lysshows. Vi kombinerer teknologi og underholdning for at skabe spektakulære og mindeværdige oplevelser. Med mere end 20 års erfaring inden for liveevents og scenekunst. Hertil 10 års professionel erfaring med droner er vi jeres betroede partner til innovative og bæredygtige drone lysshows.'
          text3='Vil du høre mere om mulighederne med et drone lysshow?'
          images={['/assets/images/drone-legion.jpg']}
          sliderPosition='right'
          overlayOpacity={0.3}
        />
      </div>
      <div className='py-16 w-full bg-black'>
        <div className='container px-4 mx-auto md:px-8'>
          <h2 className='mb-4 text-center'>
            <TranslatedText>
              Hvor mange droner skal der til et show?
            </TranslatedText>
          </h2>
          <p className='mb-8 text-center text-gray-300'>
            <TranslatedText>
              Antal droner afhænger af showets størrelse, kompleksitet og ønsket
              budget.
            </TranslatedText>
            <br></br>
            <TranslatedText>
              Vi hjælper med at visualisere det nødvendige antal til det
              konkrete behov og budget.
            </TranslatedText>
            <br></br>
            <TranslatedText>
              Eksemplerne herunder giver et indbryk af forskellene:
            </TranslatedText>
          </p>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5'>
            {[50, 100, 150, 200, 250].map(count => (
              <div key={count} className='flex flex-col items-center'>
                <div className='relative mb-2 w-full aspect-video'>
                  <Image
                    src={`/assets/images/drone-${count}.png`}
                    alt={`${count} droner`}
                    className='object-cover w-full h-full rounded'
                    width={300}
                    height={169}
                    loading='lazy'
                  />
                </div>
                <p className='font-semibold text-center'>
                  <TranslatedText>{count} droner</TranslatedText>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='container px-4 py-16 mx-auto space-y-16 md:px-8'>
        <TextImageSlider
          title='Prisstruktur hos Moonrise'
          text1='Hos Moonrise er der forskel på prisen afhængigt af, om kunden vælger et prelavet droneshow eller et skræddersyet  show. Prelaved shows er færdigudviklede koncepter, hvor animationer, lyssætning og sekvenser allerede er planlagt. De kan tilpasses en smule med eksempelvis farver og branding, men kræver mindre udviklingstid og godkendelsesarbejde - og er derfor en mere prisvenlig løsning.'
          text2='Custom shows er derimod specialudviklede efter kundens ønsker og behov. Her designes hele showet fra bunden med unikke animationer, storytelling og koreografi.'
          text3='Det kræver mere kreativt arbejde, flere godkendelsesprocesser og tekniske tests, hvilket gør custom shows markant dyrere end de færdige koncepter.'
          images={['/assets/images/moonrise.jpg']}
          sliderPosition='right'
          overlayOpacity={0.3}
        />
      </div>

      <Stats
        title='Moonrise i tal'
        items={[
          {
            title: 'Flere deltagere',
            value: 65,
            suffix: '%',
            description: 'Stigning i begivenhedsdeltagelse'
          },
          {
            title: 'Støj reduktion',
            value: 90,
            suffix: '%',
            description: 'Sammenlignet med traditionelt fyrværkeri'
          },
          {
            title: 'Mindre CO₂-udledning',
            value: 60,
            suffix: '%',
            description: 'Reduktion af CO2-fodaftryk'
          },
          {
            title: 'Mindre affald',
            value: 500,
            suffix: 'kg',
            description: 'I forhold til mellemstore fyrværkeri shows'
          }
        ]}
      />

      <Process
        title='Sådan arbejder vi'
        items={[
          {
            icon: FaMapMarkerAlt,
            title: 'Site Authorization & Assessment',
            description:
              'Vi sikrer de nødvendige tilladelser og vurderer lokationen for sikkerhed'
          },
          {
            icon: FaComments,
            title: 'Story Board Consultation',
            description:
              'Vi diskuterer din vision og eventets krav med vores ekspertteam'
          },
          {
            icon: FaPencilRuler,
            title: 'Design & Planning',
            description:
              'Sammen skaber vi et skræddersyet droneshow tilpasset dit events tema'
          },
          {
            icon: FaClipboardCheck,
            title: 'Pre-Flight Run-Through',
            description:
              'Vi gennemfører en grundig generalprøve for at sikre alt kører perfekt'
          },
          {
            icon: FaPlay,
            title: 'Show Time',
            description: 'Læn dig tilbage og nyd det spektakulære droneshow'
          }
        ]}
      />

      <div className='container px-4 mx-auto md:px-8'>
        <div className='mx-auto max-w-5xl text-center'>
          <h2 className='mb-8'>
            <TranslatedText>
              Teknisk baggrund og erfaring hos Moonrise
            </TranslatedText>
          </h2>
          <div className='space-y-6'>
            <p>
              <TranslatedText>
                Moonrise bygger på en solid teknisk baggrund gennem deres
                tilknytning til SimpleCreations – en virksomhed med over 15 års
                erfaring inden for teater- og eventproduktion. SimpleCreations
                har en prisvindende baggrund i teknisk teaterdesign og
                balancerer teknologi og design i deres projekter. Denne erfaring
                omfatter blandt andet udlejning af professionelt kameraudstyr og
                tekniske løsninger til film- og eventbranchen.
              </TranslatedText>
            </p>
            <p>
              <TranslatedText>
                Teamet bag Moonrise har arbejdet intensivt med teknik, udstyr og
                produktion i flere år, hvilket giver dem en solid forståelse for
                både det kreative og det tekniske aspekt af at levere store
                visuelle oplevelser. Denne erfaring gør Moonrise i stand til at
                kombinere avanceret droneteknologi med sikkerhed, kvalitet og
                høj professionalisme i deres lysdroneshow.
              </TranslatedText>
            </p>
            <p>
              <TranslatedText>
                Deres tekniske ekspertise sikrer, at hvert show er gennemført
                med præcision og kreativitet, hvilket giver kunderne en unik og
                mindeværdig oplevelse.
              </TranslatedText>
            </p>
          </div>
          <a
            href='/pages/contact'
            className='inline-block px-6 py-3 mt-8 text-white bg-blue-500 rounded-full transition-colors hover:bg-blue-600'
          >
            <TranslatedText>Læs mere her</TranslatedText>
          </a>
        </div>
      </div>
    </>
  )
}
