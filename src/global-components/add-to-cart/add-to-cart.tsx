import CloseIcon from "assets/icons/modal-close-icon.svg"
import Button from "common-components/button/button"
import Modal from 'common-components/modal/modal'
import PlusIcon from "assets/icons/product-details/plus-icon.svg"
import MinusIcon from "assets/icons/product-details/minus-icon.svg"
import Image from "next/image"

type Props = {
  variant?: "primary" | "secondary"
}

const AddToCart = ({ variant }: Props) => {
  return (
    <>
      <Modal>
        {({ open, handleOpenToggle }) => {
          return (
            <>
              <Modal.Button onClick={handleOpenToggle} className='w-full'>
                <div className={`w-full py-2.5 rounded-md text-gray-700 text-sm font-semibold border border-gray-200 hover-primaryBgColor`}>ADD TO CART</div>
              </Modal.Button>

              <Modal.Dialog open={open} handleOpenToggle={handleOpenToggle} closeOnOutsideClick={true} className='bg-[#fff] w-full md:w-[440px] rounded-md'>
                <>
                  <div className="w-full px-5 py-4 space-y-4">
                    <p className="text-base font-bold">Select Preference</p>

                    <div className="space-y-2.5">
                      <p className="text-sm text-gray-700 font-bold">Select Size</p>
                      <div className="flex flex-wrap gap-3">
                        {
                          ['S', 'M', 'L', "XL", 'XXL'].map((size) => {
                            return (
                              <div className="flex justify-center items-center h-9 w-9 md:h-10 md:w-10 cursor-pointer rounded-full border border-gray-300 font-medium text-sm md:text-base text-gray-800 hover-primaryColor hover-primaryBorderColor" key={size}>{size}</div>
                            )
                          })
                        }
                      </div>
                    </div>
                    <Button variant="secondary" className="w-full">Size Chart</Button>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-700 font-bold">Select Quantity</p>
                      <div className="mt-2 md:mt-3 w-[160px] h-10 border border-gray-300 rounded-md flex">
                        <Button className='w-full flex justify-center items-center hover:bg-gray-100 rounded-md'>
                          <Image src={PlusIcon} alt="plus.svg" className='' />
                        </Button>
                        <div className="w-full flex justify-center items-center text-lg font-semibold text-gray-800 ">1</div>
                        <Button className='w-full flex justify-center items-center rounded-md hover:bg-gray-100'>
                          <Image src={MinusIcon} alt="minus.svg" className='' />
                        </Button>
                      </div>
                    </div>

                  </div>

                  <div className="flex gap-3 px-5 py-4 border-t border-gray-200">
                    <Button variant="secondary" className="w-full !py-2 hover-primaryBgColor" onClick={handleOpenToggle}>Cancel</Button>
                    <Button variant="primary" className="w-full !py-2 hover-primaryBgColor">ADD TO CART</Button>
                  </div>

                </>
              </Modal.Dialog>
            </>
          )
        }}
      </Modal>
    </>
  )
}

export default AddToCart