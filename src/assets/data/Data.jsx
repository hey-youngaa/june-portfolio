import insta from '../images/insta.svg'
import email from '../images/email.svg'

import GW1 from '../images/GW1.jpg'
import GW2 from '../images/GW2.jpg'
import GW3 from '../images/GW3.jpg'
import GW4 from '../images/GW4.jpg'
import GW5 from '../images/GW5.jpg'
import GW6 from '../images/GW6.jpg'
import GW7 from '../images/GW7.jpg'
import GW8 from '../images/GW8.jpg'
import GW9 from '../images/GW9.jpg'
import GW10 from '../images/GW10.jpg'
import GW11 from '../images/GW11.jpg'
import GW1cover from '../images/GW1cover.png'

import BS1 from '../images/BS1.jpg'
import BS2 from '../images/BS2.jpg'
import BS3 from '../images/BS3.jpg'
import BS4 from '../images/BS4.jpg'
import BS5 from '../images/BS5.jpg'
import BScover from '../images/BScover.png'

import os from '../images/os.jpg'
import osb from '../images/osb.jpg'
import oso from '../images/oso.jpg'
import osy from '../images/osy.jpg'
import oscover from '../images/oscover.png'

import isit1 from '../images/isit1.jpg'
import isit2 from '../images/isit2.jpg'
import isit3 from '../images/isit3.jpg'
import isit4 from '../images/isit4.jpg'
import isit5 from '../images/isit5.jpg'
import isit6 from '../images/isit6.jpg'
import isit7 from '../images/isit7.jpg'
import isit1cover from '../images/isit1cover.png'

import DV from '../images/daytimeVacancies.jpg'
import LT from '../images/leopardTranspirings.png'
import LGC from '../images/lettuceGardenCharm.jpg'
import LOFS from '../images/lightOfFoldingScreen.png'
import PF from '../images/potatoFields.jpg'
import R2 from '../images/rendezvous2.jpg'
import RDV from '../images/rendezvous.jpg'
import rubies from '../images/rubies.png'
import splinter from '../images/splinter.jpg'
import untitled from '../images/Untitled.jpg'
import donkey from '../images/donkey.png'

import dwellings from '../images/dwellings.jpg'
import ED from '../images/elephantDreams.png'
import OD from '../images/observationDrawings.png'
import TL from '../images/theLeftover.jpg'
import ddm from '../images/ddm.jpg'
import red from '../images/red.png'
import scap from '../images/scap.jpg'

import window from '../images/window.png'
import windowSide from '../images/windowSide.png'
import dust from '../images/dust.png'
import dustSide from '../images/dustSide.png'
import reflexes from '../images/reflexes.png'
import reflexes2 from '../images/reflexes2.png'
import port from '../images/port.jpg'

import swim from '../images/swim.png'
import divers from '../images/divers.png'
import corner from '../images/corner.png'
import rocks from '../images/rocks.png'
import washingAshore from '../images/washingAshore.png'

export const NavItems = [
    {
        title: 'Painting',
        url: '/painting'
    },
    {
        title: 'Sculpture',
        url: '/sculpture'
    },
    {
        title: 'Drawing',
        url: '/drawing'
    },
    {
        title: 'Misc',
        url: '/misc'
    },
    {
        title: 'About',
        url: '/about'
    }
]

export const socialIcons = [
    {
        icon: insta,
        alt: 'Instagram',
        url: 'http://www.instagram.com/hey.goma',
        cName: 'socialLinks'
    },
    {
        icon: email,
        alt: 'Email',
        url: 'mailto:ju.choi168@gmail.com',
        cName: 'socialLinks'
    }
]

export const paintingWork = [
    {
        image: DV,
        alt: 'painting piece',
        title: 'Daytime Vacancies (2022)'
    },
    {
        image: LOFS,
        alt: 'painting piece',
        title: 'Light of Folding Screen (2021)'
    },
    {
        image: splinter,
        alt: 'painting piece',
        title: 'Story of a Splinter (2022)'
    },
    {
        image: LGC,
        alt: 'painting piece',
        title: 'Lettuce Garden Charm (2021)'
    },
    {
        image: rubies,
        alt: 'painting piece',
        title: 'Rubies in the Sternum, Long Thereafter (2021)'
    },
    {
        image: LT,
        alt: 'painting piece',
        title: 'Leopard Transpirings (2021)'
    },
    {
        image: untitled,
        alt: 'painting piece',
        title: 'Untitled (2020)'
    },
    {
        image: PF,
        alt: 'painting piece',
        title: 'Potato Fields (2020)'
    },
    {
        image: RDV,
        alt: 'painting piece',
        title: 'Rendezvous (2020)'
    },
    {
        image: R2,
        alt: 'painting piece',
        title: 'Rendezvous II (2020)'
    },
]

export const drawingWork = [
    {
        image: red,
        alt: 'drawing piece',
        title: "Hill's Backside Under the Red Sky (2021)",
        matl: '8" x 9" | Oil monoprint and soft pastel on paper'
    },
    {
        image: scap,
        alt: 'drawing piece',
        title: 'An Alien Field (2021)',
        matl: '8" x 9" | Oil monoprint and soft pastel on paper'
    },
    {
        image: donkey,
        alt: 'drawing piece',
        title: 'Guardian (2021)',
        matl: '20" x 20" | Ink, shellac, glitter, and soft pastel on paper'
    },
    {
        image: ED,
        alt: 'drawing piece',
        title: 'Elephant Dreams (2021)',
        matl: 'Acrylic stencil, glitter, and thread on paper'
    },
    {
        image: dwellings,
        alt: 'drawing piece',
        title: 'Dwellings (2020)',
        matl: '9" x 14" | Acrylic and ink on paper'
    },
    {
        image: ddm,
        alt: 'drawing piece',
        title: 'Figure Drawing (2020)',
        matl: 'Conte and soft pastel on paper'
    },
    {
        image: OD,
        alt: 'drawing piece',
        title: 'Observation Drawings (2020)',
        matl: 'Silver point and burned paper'
    },
    {
        image: TL,
        alt: 'drawing piece',
        title: 'The Leftover (2020)'
    },
]

export const sculptureWork = [
    {
        image: reflexes,
        alt: 'sculpture piece',
        title: 'Reflexes Of A Vulnerable Earth (After Worster) (2023)',
        matl: '7" x 7" | Acrylic, staples, soft and oil pastel on hanji, cardboard and wood'
    },
    {
        image: reflexes2,
        alt: 'sculpture piece',
        title: 'Reflexes Of A Vulnerable Earth II (After Worster) (2023) ',
        matl: '7" x 7" | Acrylic, staples, soft and oil pastel on hanji, cardboard and wood'
    },
    {
        image: window,
        alt: 'sculpture piece',
        title: 'Mountainside View (2023)',
        matl: '7" x 7" | Acrylic, glitter, staples, soft and oil pastel on hanji, cardboard, paper pulp and foam board'
    },
    {
        image: dust,
        alt: 'sculpture piece',
        title: 'The Dust That Falls On Modern Things (The Artificial Kingdom, Celeste Olalquiga) (2023)',
        matl: '5" x 7" | Acrylic, color pencil, soft and oil pastel on hanji, paper pulp and wood'
    },
    {
        image: dustSide,
        alt: 'sculpture piece',
        title: 'The Dust That Falls On Modern Things (The Artificial Kingdom, Celeste Olalquiga)',
        matl: '5" x 7" | Acrylic, color pencil, soft and oil pastel on hanji, paper pulp and wood'
    },
    {
        image: windowSide,
        alt: 'sculpture piece',
        title: 'Mountainside View - side (2023)',
        matl: '7" x 7" | Acrylic, glitter, staples, soft and oil pastel on hanji, cardboard, paper pulp and foam board'
    },
    {
        image: port,
        alt: 'sculpture piece',
        title: 'Port (2022)',
        matl: '7" x 7" | Oil and ink on found wood'
    },
]

export const miscWork = [
    {
        image: divers,
        title: 'Divers (2023)',
        alt: 'misc work'
    },
    {
        image: swim,
        title: 'Swimmer (2022)',
        alt: 'misc work'
    },
    {
        image: washingAshore,
        title: 'Washed Ashore (2022)',
        alt: 'misc work'
    },
    {
        image: rocks,
        title: 'Rock Trail (2022)',
        alt: 'misc work'
    },
    {
        image: corner,
        title: 'Onlooker (2022)',
        alt: 'misc work'
    }
]
export const drawingSeries = [
    {
        id: 'groundwater-series',
        title: 'Groundwater',
        cover: GW1cover,
        alt: 'groundwater piece',
        imgs: [
            {
                image: GW1,
                alt: 'groundwater'
            },
            {
                image: GW2,
                alt: 'groundwater'
            },
            {
                image: GW3,
                alt: 'groundwater'
            },
            {
                image: GW4,
                alt: 'groundwater'
            },
            {
                image: GW5,
                alt: 'groundwater'
            },
            {
                image: GW6,
                alt: 'groundwater'
            },
            {
                image: GW7,
                alt: 'groundwater'
            },
            {
                image: GW8,
                alt: 'groundwater'
            },
            {
                image: GW9,
                alt: 'groundwater'
            },
            {
                image: GW10,
                alt: 'groundwater'
            },
            {
                image: GW11,
                alt: 'groundwater'
            },
        ]
    },
    {
        id:'bedtime-tales-series',
        title: 'Bedtime Tales',
        cover: BScover,
        alt: 'bedtime tales piece',
        imgs: [
            {
                image: BS1,
                alt: 'bedtime tales'
            },
            {
                image: BS2,
                alt: 'bedtime tales'
            },
            {
                image: BS3,
                alt: 'bedtime tales'
            },
            {
                image: BS4,
                alt: 'bedtime tales'
            },
            {
                image: BS5,
                alt: 'bedtime tales'
            }
        ]
    },
    {
        id: 'in-summer-i-will-tear-series',
        title: "In Summer I'll Tear",
        cover: isit1cover,
        alt: "in summer i'll tear piece",
        text: 'Dried peel, staked wood, rubber pipe, splintered corner',
        imgs: [
            {
                image: isit1,
                alt: "in summer i'll tear"
            },
            {
                image: isit2,
                alt: "in summer i'll tear"
            },
            {
                image: isit3,
                alt: "in summer i'll tear"
            },
            {
                image: isit4,
                alt: "in summer i'll tear"
            },
            {
                image: isit5,
                alt: "in summer i'll tear"
            },
            {
                image: isit6,
                alt: "in summer i'll tear"
            },
            {
                image: isit7,
                alt: "in summer i'll tear"
            }
        ]
    },
    {
        id:'oil-spill-series',
        title: 'Oill Spill',
        cover: oscover,
        alt: 'oill spill piece',
        imgs: [
            {
                image: os,
                alt: 'oill spill'
            },
            {
                image: osb,
                alt: 'oill spill'
            },
            {
                image: oso,
                alt: 'oill spill'
            },
            {
                image: osy,
                alt: 'oill spill'
            }
        ]
    }
]