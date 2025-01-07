import { useEffect, useState } from "react"

const useIsMobileView = () => {
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    if (window?.innerWidth < 768) setIsMobileView(true)
  }, [])

  return { isMobileView }
}

export default useIsMobileView