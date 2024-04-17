import React from 'react'

const SectionHeading = ({ section_name }: { section_name: string }) => {
    return <h2 className='text-center mt-14 text-3xl font-bold mb-10'>{section_name}</h2>
}

export default SectionHeading