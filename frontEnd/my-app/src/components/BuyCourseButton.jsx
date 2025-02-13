// import React from 'react'
import { Button } from './ui/button'
import { useCreateCheckoutSessionMutation } from '@/features/api/purchaseApi'
import { Loader2 } from 'lucide-react';
const BuyCourseButton = ({ courseId }) => {
  const [createCheckoutSession, { isLoading }] = useCreateCheckoutSessionMutation();
  
  const purchaseCourseHandler = async () => {

    await createCheckoutSession(courseId);
    console.log("Course purchased successfully");
  }
  return (
    <>
      <Button className="w-full" onClick={() => purchaseCourseHandler()}>
        {
          isLoading ? (<><Loader2 className="w-4 h-4 animate-spin" />Loading...</>) : "Buy Course"

        }
      </Button>
    </>
  )
}

export default BuyCourseButton