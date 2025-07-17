import BackButton from '@/components/BackButton'
import StructuredTable from '@/components/ratings/StructuredTable'
import TablePagination from '@/components/TablePagination'
import React from 'react'

const page = () => {
  return (
    <div>
      <BackButton text="Go Back" link="/" />
      <StructuredTable title="Custom Ratings Title" limit={5} />
      <TablePagination />
    </div>
  )
}

export default page