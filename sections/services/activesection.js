import Activecard from "@/components/activecard"
import src from "@/public/images/activepng.png"
import React from 'react'


const Activesection = () => {
    const data = [
        {
            title: "Active Pharmaceutical Ingredients (APIs)",
            subtitle: "We develop and manufacture high-purity APIs for various therapeutic categories:",
            list: [
                "Cardiovascular",
                "Anti-infective",
                "Analgesic",
                "Anti-inflammatory",
                "Gastrointestinal",
                "Neurological",
                "Respiratory",
                "Metabolic disorders",
                "Anaesthetic"
            ],
            number: "01",
            src: src
        },
        {
            title: "Organic & Inorganic Chemicals",
            subtitle: "We offer a comprehensive range of pharmaceutical-grade chemicals:",
            list: [
                "Intermediates",
                "Building blocks",
                "Reagents",
                "Catalysts",
                "Specialty chemicals"
            ],
            number: "02",
            src: src
        },
        {
            title: "Custom Synthesis",
            subtitle: "Our dedicated R&D team provides custom synthesis solutions to meet specific requirements:",
            list: [
                "Process development",
                "Scale-up services",
                "Contract manufacturing",
                "Analytical method development"
            ],
            number: "03",
            src: src
        }
    ]
    return (
        <div className=' w-full flex flex-col gap-20 py-20 ' >
            <Activecard title={data[0].title} subtitle={data[0].subtitle} list={data[0].list} number={data[0].number} img={data[0].src} />
            <Activecard title={data[1].title} subtitle={data[1].subtitle} list={data[1].list} number={data[1].number} img={data[1].src} reverse={true} />
            <Activecard title={data[2].title} subtitle={data[2].subtitle} list={data[2].list} number={data[2].number} img={data[2].src} />

        </div>
    )
}

export default Activesection
