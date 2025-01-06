import HorizontalScroll from 'common-components/horizontal-scroll/horizontal-scroll'
import CustomerFeedbackCard from 'global-components/customer-feedback-card/customer-feedback-card'
import React from 'react'

type Props = {}

const CustomerFeedback = (props: Props) => {
  return (
    <div className='space-y-6 md:space-y-8 pt-5'>
      <h1 className="text-center text-xl md:text-2xl font-semibold text-gray-800">Customer Feedback</h1>
      <div className='columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-2 md:gap-5'>
        {
          [...new Array(5)].map((_, index) => {
            return <CustomerFeedbackCard hasImage={index % 2 === 1 ? true : false} />
          })
        }
      </div>
    </div>
  )
}

export default CustomerFeedback